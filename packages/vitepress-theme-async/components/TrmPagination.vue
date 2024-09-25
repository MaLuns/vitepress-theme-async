<script setup lang="ts">
import { computed, watch, ref } from "vue";
import { useRouter, useData } from "vitepress";
import { useBrowserLocation } from "@vueuse/core";
import { useCurrentPageIndex } from "../blog";

const props = withDefaults(
	defineProps<{
		total: number;
		size?: number;
		static?: boolean;
		url?: string
	}>(),
	{
		total: 0,
		size: 10,
	},
);

const { params } = useData()

const queryPageNumKey = "page";
const router = useRouter();
const location = useBrowserLocation();
const currentPage = props.static ?
	ref(params.value?.index === 'index' ? 1 :
		Number(params.value?.index.replace('page/', '') || '1'))
	: useCurrentPageIndex();

const pageList = computed(() => {
	const count = Math.ceil(props.total / props.size);
	if (count > 5) {
		const list = [1, currentPage.value - 1, currentPage.value, currentPage.value + 1, count].filter(i => i > 0 && i <= count);
		return [...new Set(list)];
	} else {
		return new Array(count).fill(null).map((_v, i) => i + 1);
	}
});

const onChangePageNumber = (current: number) => {
	if (currentPage.value === current) {
		return;
	}
	currentPage.value = current;
	if (props.static) {
		const url = `${props.url}${current === 1 ? '' : `/page/${current}`}`.replace('//', '/')
		router.go(`${location.value.origin}${url}`);
	} else {
		const { searchParams } = new URL(window.location.href!);
		searchParams.delete(queryPageNumKey);
		searchParams.append(queryPageNumKey, String(current));
		router.go(`${location.value.origin}${router.route.path}?${searchParams.toString()}`);
	}
};

if (!props.static) {
	watch(
		location,
		() => {
			if (location.value.href) {
				const { searchParams } = new URL(location.value.href);
				if (searchParams.has(queryPageNumKey)) {
					currentPage.value = Number(searchParams.get(queryPageNumKey));
				} else {
					currentPage.value = 1;
				}
			}
		},
		{
			immediate: true,
		},
	);
}
</script>

<template>
	<div v-if="pageList.length > 1" class="trm-pagination">
		<template v-for="(page, i) in pageList" :key="page">
			<span v-if="i > 0 && page - 1 !== pageList[i - 1]" class="space">…</span>
			<span v-if="page === currentPage" class="page-number current">{{ page }}</span>
			<a v-else class="page-number" @click="onChangePageNumber(page)">{{ page }}</a>
		</template>
	</div>
</template>
<style lang="less">
.trm-pagination {
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	margin-bottom: var(--card-bottom-card);

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}

	a,
	span {
		display: inline-block;
		height: 36px;
		width: 36px;
		line-height: 36px;
		font-weight: 700;
		text-align: center;
		border-radius: 6px;
		transition: all 0.4s ease-in-out;
	}

	a {
		cursor: pointer;

		&:hover {
			opacity: 1;
			color: var(--primary, #afb42b);
		}
	}

	span.current {
		color: #fcfcfe;
		background-color: var(--primary, #afb42b);
	}
}
</style>
