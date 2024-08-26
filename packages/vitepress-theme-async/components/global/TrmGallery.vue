<script setup lang="ts">
import { withBase } from "vitepress";

withDefaults(
	defineProps<{
		srcs?: string[]
	}>(),
	{
		srcs: () => []
	},
);
</script>
<template>
	<div class="fj-gallery no-fancybox">
		<img v-for="src in srcs" :src="withBase(src)" :key="src" />
		<slot></slot>
	</div>
</template>
