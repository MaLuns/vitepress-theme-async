<script setup lang="ts">
import { withBase, useData } from "vitepress";
import { onMounted } from "vue";
import { initJustifiedGallery } from "../../utils/client";
const { theme } = useData<AsyncThemeConfig>();

withDefaults(
	defineProps<{
		srcs?: string[]
	}>(),
	{
		srcs: () => []
	},
);

onMounted(() => {
	if (theme.value.plugin?.plugins?.flickrJustifiedGallery) {
		initJustifiedGallery(theme.value.plugin?.thirdPartyProvider + theme.value.plugin.plugins.flickrJustifiedGallery)
	}
})
</script>
<template>
	<div class="fj-gallery no-fancybox">
		<img v-for="src in srcs" :src="withBase(src)" :key="src" />
		<slot></slot>
	</div>
</template>
