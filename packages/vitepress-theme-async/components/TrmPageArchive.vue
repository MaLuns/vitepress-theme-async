<script setup lang="ts">
import { computed, ref } from "vue";
import { useTags, useArchives, useCategories, useAllPosts, useTheme } from "../composables";

import TrmPagination from "./TrmPagination.vue";
import TrmTimeLine from "./TrmTimeline.vue";
import TrmDividerTitle from "./TrmDividerTitle.vue";
import { formatDate } from "../utils/client";

const props = defineProps<{
	type: "tags" | "archives" | "categories";
}>();

const theme = useTheme();
const allPosts = useAllPosts(theme.value.archive_generator?.order_by || "-date");

const data = new Map([
	["tags", useTags],
	["archives", useArchives],
	["categories", useCategories],
]);

const list = (data.get(props.type) ?? (() => []))();

const currentPage = ref(1);
const filter = ref("");

const pageList = computed(() => {
	const startIdx = (currentPage.value - 1) * 10;
	const endIdx = startIdx + 10;
	let list = allPosts;
	if (filter.value) {
		if (["tags", "categories"].includes(props.type)) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			list = list.filter(item => item[props.type].includes(filter.value));
			console.log(list);
		} else {
			list = list.filter(item => formatDate(item.date, "YYYY") === filter.value);
		}
	}
	return list.slice(startIdx, endIdx);
});

const onCurrentPageChange = (num: number) => {
	currentPage.value = num;
};

const onFilter = (item: string) => {
	filter.value = item;
};
</script>
<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="trm-card">
				<div style="padding: 0 20px">
					<ul class="trm-list row">
						<li v-for="[item, count] in list" class="col-lg-4 trm-list-item" :key="item" @click="onFilter(item)">{{ item }} ({{ count }})</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="col-lg-12">
			<TrmDividerTitle :title="filter || 'All'" index="01" />
		</div>
		<div class="col-lg-12">
			<TrmTimeLine :list="pageList" />
		</div>
	</div>
	<TrmPagination :total="pageList.length" @current-page-change="onCurrentPageChange"></TrmPagination>
</template>
<style scoped>
.trm-list-item {
	margin: 6px 0;
}
</style>
