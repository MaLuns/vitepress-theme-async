<script setup lang="ts">
import { useData } from "vitepress";

const { page } = useData();

console.log(page);
</script>
<template>
	<div class="trm-card">
		<article id="article-container" class="trm-publication">
			<Content />
		</article>
	</div>
</template>
