<script setup lang="ts">
import { computed, watch } from "vue";
import { useRouter } from "vitepress";
import { useBrowserLocation } from "@vueuse/core";
import { useCurrentPageIndex } from "../blog";

const props = withDefaults(
	defineProps<{
		total: number;
		size?: number;
	}>(),
	{
		total: 0,
		size: 10,
	},
);

const queryPageNumKey = "page";
const router = useRouter();
const location = useBrowserLocation();
const currentPage = useCurrentPageIndex();

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
	const { searchParams } = new URL(window.location.href!);
	searchParams.delete(queryPageNumKey);
	searchParams.append(queryPageNumKey, String(current));
	router.go(`${location.value.origin}${router.route.path}?${searchParams.toString()}`);
};

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
