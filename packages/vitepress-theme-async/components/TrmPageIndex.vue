<script setup lang="ts">
import { useData } from "vitepress";
import { usePageIndexParam, usePageIndexStatic, usePageUrl } from "../composables";

import TrmCardCategorie from "./global/TrmCardCategorie.vue";
import TrmCardPost from "./global/TrmCardPost.vue";
import TrmPagination from "./TrmPagination.vue";
import TrmDividerTitle from "./global/TrmDividerTitle.vue";


const { theme, page } = useData<AsyncThemeConfig>();
const pageUrl = usePageUrl();

const { pageIndex, pageList, pageSize, pageLength, hasCategorieCard, categorieList, onChangePage } =
	theme.value.indexGenerator?.static ?
		usePageIndexStatic() : usePageIndexParam()
</script>
<template>
	<div v-if="hasCategorieCard" class="row hidden-sm">
		<div v-for="(item, index) in categorieList" class="col-lg-6" :key="index">
			<TrmCardCategorie :name="item[0]" :length="item[1]" :category-url="pageUrl.categories + '?q=' + item[0]" />
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12" v-if="hasCategorieCard">
			<TrmDividerTitle :title="$t('title.newPublish')" index="01" />
		</div>
		<div class="col-lg-6" v-for="item in pageList" :key="item.url">
			<TrmCardPost :post="item" :category-url="pageUrl.categories" :sticky="Boolean(page.frontmatter.index && item.sticky && item.sticky > 0)" />
		</div>
	</div>
	<TrmPagination :page-index="pageIndex" :total="pageLength" :size="pageSize" @update:page-index="onChangePage" />
</template>
