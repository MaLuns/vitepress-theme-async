<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useData } from "vitepress";
import { useAllPosts, useCategories, usePageUrl } from "../composables";
import { useCurrentPageIndex } from "../blog";

import TrmCardCategorie from "./global/TrmCardCategorie.vue";
import TrmCardPost from "./global/TrmCardPost.vue";
import TrmPagination from "./TrmPagination.vue";
import TrmDividerTitle from "./global/TrmDividerTitle.vue";

const { page, theme, params, site } = useData<AsyncThemeConfig>();
const pageUrl = usePageUrl();
const currentPageIndex = theme.value.indexGenerator?.static ?
	ref(params.value?.index === 'index' ? 1 :
		Number(params.value?.index.replace('page/', '') || '1'))
	: useCurrentPageIndex();

const allPosts = useAllPosts();
const pageSize = theme.value.indexGenerator?.perPage || 10;

const allCategories = useCategories();
const categories = allCategories.sort((a, b) => b[1] - a[1]).slice(0, theme.value.categorieCard?.len || 2);

const pageList = computed(() => {
	const startIdx = (currentPageIndex.value - 1) * pageSize;
	const endIdx = startIdx + pageSize;
	return allPosts.slice(startIdx, endIdx);
});

const hasCategorieCard = computed(() => {
	const cc = theme.value.categorieCard;
	return cc?.enable && (categories.length > 0 || (Array.isArray(cc.list) && cc.list.length > 0));
});

const categorieList = computed(() => {
	if (!hasCategorieCard.value) {
		return [];
	}
	const cc = theme.value.categorieCard;
	if (Array.isArray(cc?.list) && cc.list.length > 0) {
		return allCategories.filter(item => cc.list!.includes(item[0]));
	}
	return categories;
});

// 如果是静态生成, 监听路由参数变更
if (theme.value.indexGenerator?.static) {
	watch(() => params.value?.index, () => {
		currentPageIndex.value = params.value?.index === 'index' ? 1 :
			Number(params.value?.index.replace('page/', '') || '1')
	})
}
</script>
<template>
	<div v-if="hasCategorieCard" class="row hidden-sm">
		<div v-for="(item, index) in categorieList" class="col-lg-6" :key="index">
			<TrmCardCategorie :name="item[0]" :length="item[1]" :category-url="pageUrl.categorys + '?q=' + item[0]" />
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12" v-if="hasCategorieCard">
			<TrmDividerTitle :title="$t('title.newPublish')" index="01" />
		</div>
		<div class="col-lg-6" v-for="item in pageList" :key="item.url">
			<TrmCardPost :post="item" :category-url="pageUrl.categorys" :sticky="Boolean(page.frontmatter.index && item.sticky && item.sticky > 0)" />
		</div>
	</div>
	<TrmPagination :total="allPosts.length" :size="pageSize" :static="theme.indexGenerator?.static" :url="site.base" />
</template>
