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
<style lang="less">
.trm-title-with-divider {
	display: flex;
	align-items: center;
	white-space: nowrap;
	margin-bottom: var(--card-bottom-card);

	span {
		position: relative;
		margin-left: 20px;
		margin-right: 35px;
		display: inline-block;
		height: 1px;
		border-bottom: var(--border-dotted, dotted 2px rgba(225, 225, 235, 0.9));
		width: 100%;

		&:after {
			content: attr(data-number);
			border-radius: 50%;
			position: absolute;
			font-size: 12px;
			font-weight: 600;
			text-align: center;
			color: var(--body-color, #7b7b7d);
			opacity: 0.8;
			width: 15px;
			height: 15px;
			top: -6px;
			right: -35px;
		}
	}

	@media (max-width: 768px) {
		background: var(--theme-bg-color, #fcfcfe);
		border-radius: var(--card-border-radius, 10px);
		font-size: 1rem;
		padding: 10px;
		margin-bottom: 10px;
	}
}
</style>
