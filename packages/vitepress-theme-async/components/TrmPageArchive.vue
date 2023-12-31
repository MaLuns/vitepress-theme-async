<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useTags, useArchives, useCategories, useAllPosts, useTheme } from "../composables";

import TrmTimeline from "./global/TrmTimeline.vue";
import TrmDividerTitle from "./global/TrmDividerTitle.vue";
import TrmPagination from "./TrmPagination.vue";
import { formatDate } from "../utils/client";
import { useCurrentPageIndex } from "../blog";

const theme = useTheme();
const currentPageIndex = useCurrentPageIndex();
const pageSize = theme.value.archiveGenerator?.perPage || 10;
const props = defineProps<{ type: "tags" | "archives" | "categories" }>();

const allPosts = useAllPosts(theme.value.archiveGenerator?.orderBy || "-date", item => {
	if (["tags", "categories"].includes(props.type)) {
		//@ts-ignore
		return item[props.type].length > 0;
	} else {
		//@ts-ignore
		item.archive_date = formatDate(item.date, theme.value.archiveGenerator?.dateFmt || "YYYY");
		return true;
	}
});

const data = new Map([
	["tags", useTags],
	["archives", useArchives],
	["categories", useCategories],
]);

const filter = ref("");
const tagsList = (data.get(props.type) ?? (() => []))();

const filterList = computed(() => {
	let list = allPosts;
	if (filter.value) {
		if (["tags", "categories"].includes(props.type)) {
			//@ts-ignore
			list = list.filter(item => item[props.type].includes(filter.value));
		} else {
			//@ts-ignore
			list = list.filter(item => item.archive_date === filter.value);
		}
	}
	return list;
});

const pageList = computed(() => {
	const startIdx = (currentPageIndex.value - 1) * pageSize;
	const endIdx = startIdx + pageSize;
	return filterList.value.slice(startIdx, endIdx);
});

const onFilter = (item: string) => {
	filter.value = item;
	currentPageIndex.value = 1;
};

onMounted(() => {
	const { searchParams } = new URL(location.href);
	if (searchParams.has("q")) {
		filter.value = searchParams.get("q") ?? "";
	}
});
</script>
<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="trm-card">
				<div style="padding: 0 20px">
					<ul class="trm-list row">
						<li v-for="[item, count] in tagsList" class="col-lg-4 trm-list-item" :key="item" @click="onFilter(item)">{{ item }} ({{ count }})</li>
					</ul>
				</div>
			</div>
		</div>
		<div v-if="pageList.length" class="col-lg-12">
			<TrmDividerTitle :title="filter || 'All'" index="01" />
		</div>
		<div class="col-lg-12">
			<TrmTimeline :list="pageList" />
		</div>
	</div>
	<TrmPagination :total="filterList.length" :size="pageSize" />
</template>
<style scoped>
.trm-list-item {
	margin: 6px 0;
	cursor: pointer;
}
</style>
