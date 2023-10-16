<script setup lang="ts">
import { computed, ref } from "vue";
import { useAllPosts, useCategories } from "../composables";

import TrmCardCategorie from "./TrmCard/Categorie.vue";
import TrmCardPost from "./TrmCard/Post.vue";
import TrmPagination from "./TrmPagination.vue";

const allPosts = useAllPosts();

const categories = useCategories()
	.sort((a, b) => b[1] - a[1])
	.slice(0, 2);

const currentPage = ref(1);

const pageList = computed(() => {
	const startIdx = (currentPage.value - 1) * 10;
	const endIdx = startIdx + 10;
	return allPosts.slice(startIdx, endIdx);
});

const onCurrentPageChange = (num: number) => {
	currentPage.value = num;
};
</script>
<template>
	<div v-if="categories.length > 0" class="row hidden-sm">
		<div v-for="(item, index) in categories" class="col-lg-6" :key="index">
			<TrmCardCategorie :name="item[0]" :length="item[1]" />
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12" v-if="categories.length > 0">
			<!-- title -->
			<h5 class="trm-title-with-divider">
				最近发布
				<span data-number="01"></span>
			</h5>
		</div>
		<div class="col-lg-6" v-for="item in pageList" :key="item.url">
			<TrmCardPost :post="item.frontmatter" :url="item.url" />
		</div>
	</div>
	<TrmPagination :total="allPosts.length" @current-page-change="onCurrentPageChange"></TrmPagination>
</template>
