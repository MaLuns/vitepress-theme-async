<script setup lang="ts">
import localSearchIndex from "@localSearchIndex";
import MiniSearch, { type SearchResult } from "minisearch";
// @ts-ignore
import Mark from "mark.js/src/vanilla.js";
import { computedAsync, debouncedWatch, onKeyStroke } from "@vueuse/core";
import { Ref, computed, createApp, markRaw, nextTick, ref, shallowRef } from "vue";
import { dataSymbol, useData } from "vitepress";
// @ts-ignore
import { pathToFile } from "vitepress/dist/client/app/utils.js";

const vitePressData = useData<AsyncThemeConfig>();
const { localeIndex, theme } = vitePressData;

interface Result {
	title: string;
	titles: string[];
	text?: string;
}
const emit = defineEmits(["close"]);
const el = shallowRef<HTMLElement>();
const resultsEl = shallowRef<HTMLElement>();
const searchInput = ref<HTMLInputElement>();

const showDetailedList = ref(false);
const filterText = ref("");
const searchIndexData = shallowRef(localSearchIndex);
const results: Ref<(SearchResult & Result)[]> = shallowRef([]);

const searchIndex = computedAsync(async () =>
	markRaw(
		MiniSearch.loadJSON<Result>((await searchIndexData.value[localeIndex.value]?.())?.default, {
			fields: ["title", "titles", "text"],
			storeFields: ["title", "titles"],
			searchOptions: {
				fuzzy: 0.2,
				prefix: true,
				boost: { title: 4, text: 2, titles: 1 },
				...(theme.value.search?.provider === "local" && theme.value.search.options?.miniSearch?.searchOptions),
			},
			...(theme.value.search?.provider === "local" && theme.value.search.options?.miniSearch?.options),
		}),
	),
);

const mark = computedAsync(async () => {
	if (!resultsEl.value) return;
	return markRaw(new Mark(resultsEl.value));
}, null);

debouncedWatch(
	() => [searchIndex.value, filterText.value, showDetailedList.value] as const,
	async ([index, filterTextValue, showDetailedListValue], old, onCleanup) => {
		let canceled = false;
		onCleanup(() => {
			canceled = true;
		});

		if (!index) return;

		// Search
		results.value = index.search(filterTextValue).slice(0, 16) as (SearchResult & Result)[];

		// Highlighting
		const mods = showDetailedListValue ? await Promise.all(results.value.map(r => fetchExcerpt(r.id))) : [];

		if (canceled) return;
		const c = new Map<string, Map<string, string>>();
		for (const { id, mod } of mods) {
			const mapId = id.slice(0, id.indexOf("#"));
			let map = c.get(mapId);
			if (map) continue;
			map = new Map();
			c.set(mapId, map);
			const comp = mod.default ?? mod;
			if (comp?.render || comp?.setup) {
				const app = createApp(comp);
				// Silence warnings about missing components
				app.config.warnHandler = () => {};
				app.provide(dataSymbol, vitePressData);
				Object.defineProperties(app.config.globalProperties, {
					$frontmatter: {
						get() {
							return vitePressData.frontmatter.value;
						},
					},
					$params: {
						get() {
							return vitePressData.page.value.params;
						},
					},
				});
				const div = document.createElement("div");
				app.mount(div);
				const headings = div.querySelectorAll("h1, h2, h3, h4, h5, h6");
				headings.forEach(el => {
					const href = el.querySelector("a")?.getAttribute("href");
					const anchor = href?.startsWith("#") && href.slice(1);
					if (!anchor) return;
					let html = "";
					while ((el = el.nextElementSibling!) && !/^h[1-6]$/i.test(el.tagName)) html += el.outerHTML;
					map!.set(anchor, html);
				});
				app.unmount();
			}
			if (canceled) return;
		}

		const terms = new Set<string>();

		results.value = results.value.map(r => {
			const [id, anchor] = r.id.split("#");
			const map = c.get(id);
			const text = map?.get(anchor) ?? "";
			for (const term in r.match) {
				terms.add(term);
			}
			return { ...r, text };
		});

		await nextTick();
		if (canceled) return;

		await new Promise(r => {
			mark.value?.unmark({
				done: () => {
					mark.value?.markRegExp(formMarkRegex(terms), { done: r });
				},
			});
		});

		const excerpts = el.value?.querySelectorAll(".trm-result .excerpt") ?? [];

		for (const excerpt of excerpts) {
			excerpt.querySelector('mark[data-markjs="true"]')?.scrollIntoView({ block: "center" });
		}

		// FIXME: without this whole page scrolls to the bottom
		resultsEl.value?.firstElementChild?.scrollIntoView({ block: "start" });
	},
	{ debounce: 200, immediate: true },
);

async function fetchExcerpt(id: string) {
	const file = pathToFile(id.slice(0, id.indexOf("#")));
	try {
		if (!file) throw new Error(`Cannot find file for id: ${id}`);
		return { id, mod: await import(/*@vite-ignore*/ file) };
	} catch (e) {
		console.error(e);
		return { id, mod: {} };
	}
}

const disableReset = computed(() => filterText.value?.length <= 0);

function focusSearchInput(select = true) {
	searchInput.value?.focus();
	select && searchInput.value?.select();
}

function resetSearch() {
	filterText.value = "";
	nextTick().then(() => focusSearchInput(false));
}

function formMarkRegex(terms: Set<string>) {
	return new RegExp(
		[...terms]
			.sort((a, b) => b.length - a.length)
			.map(term => {
				return `(${term.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")})`;
			})
			.join("|"),
		"gi",
	);
}

onKeyStroke("Escape", () => {
	emit("close");
});
</script>
<template>
	<ClientOnly>
		<Teleport to="body">
			<div ref="el" class="trm-search-popup">
				<div class="backdrop" @click="$emit('close')"></div>

				<div class="trm-search-wrapper">
					<div class="form trm-search-form">
						<label id="localsearch-label" for="localsearch-input">
							<svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
								<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21l-4.35-4.35" />
								</g>
							</svg>
						</label>
						<input v-model="filterText" ref="searchInput" id="localsearch-input" aria-labelledby="localsearch-label" class="trm-search-input" type="text" placeholder="内容搜索" />
						<button type="button" class="trm-toggle-layout-button" :class="{ 'detailed-list': showDetailedList }" @click="showDetailedList = !showDetailedList">
							<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
								<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 14h7v7H3zM3 3h7v7H3zm11 1h7m-7 5h7m-7 6h7m-7 5h7" />
							</svg>
						</button>
						<button @click="resetSearch" :disabled="disableReset" class="trm-clear-button" type="reset">
							<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
								<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 5H9l-7 7l7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-2 4l-6 6m0-6l6 6" />
							</svg>
						</button>
					</div>

					<ul ref="resultsEl" class="trm-search-result-container">
						<li v-for="p in results" :key="p.id" role="option">
							<a class="trm-result" :href="p.id" @click="$emit('close')">
								<div class="titles">
									<span class="title-icon">#</span>
									<span v-for="(t, index) in p.titles" :key="index" class="title">
										<span class="text" v-html="t" />
										<svg width="18" height="18" viewBox="0 0 24 24">
											<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6" />
										</svg>
									</span>
									<span class="title main">
										<span class="text" v-html="p.title" />
									</span>
								</div>
								<div v-if="showDetailedList" class="excerpt-wrapper">
									<div v-if="p.text" class="excerpt" inert>
										<div class="trm-publication" v-html="p.text" />
									</div>
								</div>
							</a>
						</li>
					</ul>

					<div class="trm-search-footer">
						<div class="trm-search-stats"></div>
						<ul class="trm-search-commands">
							<li>
								<kbd class="command-palette-commands-key">
									<svg width="15" height="15" aria-label="Escape key" role="img">
										<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
											<path
												d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
											></path>
										</g>
									</svg>
								</kbd>
								<span class="command-palette-Label">to close</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Teleport>
	</ClientOnly>
</template>
