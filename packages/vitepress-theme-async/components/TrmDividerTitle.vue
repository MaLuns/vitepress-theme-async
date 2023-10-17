<script setup lang="ts">
defineProps<{
	title?: string;
	index?: string | number;
}>();
</script>
<template>
	<h5 class="trm-title-with-divider">
		<slot>{{ title }}</slot>
		<span :data-number="index"></span>
	</h5>
</template>
