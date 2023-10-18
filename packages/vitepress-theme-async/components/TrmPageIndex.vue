<script setup lang="ts">
import { computed } from "vue";
import { useAllPosts, useCategories, useTheme } from "../composables";
import { useCurrentPageIndex } from "../blog";

import TrmCardCategorie from "./TrmCardCategorie.vue";
import TrmCardPost from "./TrmCardPost.vue";
import TrmPagination from "./TrmPagination.vue";
import TrmDividerTitle from "./TrmDividerTitle.vue";

const theme = useTheme();
const currentPageIndex = useCurrentPageIndex();
const pageSize = theme.value.index_generator?.per_page || 10;
const allPosts = useAllPosts();

const categories = useCategories()
	.sort((a, b) => b[1] - a[1])
	.slice(0, 2);

const pageList = computed(() => {
	const startIdx = (currentPageIndex.value - 1) * pageSize;
	const endIdx = startIdx + pageSize;
	return allPosts.slice(startIdx, endIdx);
});
</script>
<template>
	<div v-if="categories.length > 0" class="row hidden-sm">
		<div v-for="(item, index) in categories" class="col-lg-6" :key="index">
			<TrmCardCategorie :name="item[0]" :length="item[1]" />
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12" v-if="categories.length > 0">
			<TrmDividerTitle title="最近发布" index="01" />
		</div>
		<div class="col-lg-6" v-for="item in pageList" :key="item.url">
			<TrmCardPost :post="item" />
		</div>
	</div>
	<TrmPagination :total="allPosts.length" :size="pageSize" />
</template>
