<script setup lang="ts">
import { computed } from "vue";
import { useAllPosts, useCategories, useQueryVal, useTheme } from "../composables";

import TrmCardCategorie from "./TrmCardCategorie.vue";
import TrmCardPost from "./TrmCardPost.vue";
import TrmPagination from "./TrmPagination.vue";
import TrmDividerTitle from "./TrmDividerTitle.vue";

const theme = useTheme();
const allPosts = useAllPosts(`-sticky ${theme.value.index_generator?.order_by || "-date"}`);

const categories = useCategories()
	.sort((a, b) => b[1] - a[1])
	.slice(0, 2);

const currentPage = useQueryVal<number>("page", 1, i => (isNaN(Number(i)) ? 1 : Number(i)));

const pageList = computed(() => {
	const startIdx = (currentPage.value - 1) * 10;
	const endIdx = startIdx + 10;
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
			<TrmCardPost :post="item" :url="item.url" />
		</div>
	</div>
	<TrmPagination :total="allPosts.length" />
</template>
