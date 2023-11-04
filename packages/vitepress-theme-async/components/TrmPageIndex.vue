<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { AsyncThemeConfig } from "types";
import { useAllPosts, useCategories, usePageUrl } from "../composables";
import { useCurrentPageIndex } from "../blog";

import TrmCardCategorie from "./global/TrmCardCategorie.vue";
import TrmCardPost from "./global/TrmCardPost.vue";
import TrmPagination from "./TrmPagination.vue";
import TrmDividerTitle from "./global/TrmDividerTitle.vue";

const { page, theme } = useData<AsyncThemeConfig>();
const pageUrl = usePageUrl();
const currentPageIndex = useCurrentPageIndex();
const allPosts = useAllPosts();
const pageSize = theme.value.indexGenerator?.perPage || 10;

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
			<TrmCardCategorie :name="item[0]" :length="item[1]" :category-url="pageUrl.categorys + '?q=' + item[0]" />
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12" v-if="categories.length > 0">
			<TrmDividerTitle :title="$t('title.newPublish')" index="01" />
		</div>
		<div class="col-lg-6" v-for="item in pageList" :key="item.url">
			<TrmCardPost :post="item" :category-url="pageUrl.categorys" :sticky="page.frontmatter.index && item.sticky && item.sticky > 0" />
		</div>
	</div>
	<TrmPagination :total="allPosts.length" :size="pageSize" />
</template>
