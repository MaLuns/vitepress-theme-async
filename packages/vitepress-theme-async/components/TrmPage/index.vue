<script setup lang="ts">
import { computed } from "vue";
import { data as allPosts } from "../../composables/posts.data.js";
import TrmCardCategorie from "../TrmCard/categorie.vue";
import TrmCardPost from "../TrmCard/post.vue";

const categories = computed(() => {
	const map = new Map<string, number>();
	allPosts.forEach(item => {
		const { categories } = item.frontmatter;
		if (categories) {
			if (map.has(categories)) {
				map.set(categories, map.get(categories)! + 1);
			} else {
				map.set(categories, 1);
			}
		}
	});
	return Array.from(map)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 2);
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
			<!-- title -->
			<h5 class="trm-title-with-divider">
				最近发布
				<span data-number="01"></span>
			</h5>
		</div>
		<div class="col-lg-6" v-for="item in allPosts">
			<TrmCardPost :post="item.frontmatter" :url="item.url" />
		</div>
	</div>
</template>
