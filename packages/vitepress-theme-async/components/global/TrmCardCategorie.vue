<script setup lang="ts">
import TrmIconNext from "../icons/TrmIconNext.vue";

defineProps<{
	name: string;
	categoryUrl: string;
	length: number;
}>();
</script>

<template>
	<div class="trm-blog-categories trm-scroll-animation">
		<h6>
			{{ name }}
			<span class="trm-number">{{ length }}</span>
		</h6>
		<div class="trm-divider trm-mb-20 trm-mt-20"></div>
		<a :href="categoryUrl" class="trm-label">
			{{ $t("title.more") }}
			<TrmIconNext class="arrow-right" />
		</a>
	</div>
</template>
<style lang="less">
.trm-blog-categories {
	text-align: center;
	position: relative;
	background-color: var(--theme-bg-color, #fcfcfe);
	border-radius: var(--card-border-radius, 10px);
	padding: var(--card-padding, 40px);
	margin-bottom: var(--card-bottom-card, 40px);
	box-shadow: var(--box-shadow2, 0 2px 4px -2px rgba(0, 0, 0, 0.15));

	&:before {
		content: "";
		position: absolute;
		left: 30px;
		top: -8px;
		height: 8px;
		width: calc(100% - 60px);
		background-color: var(--theme-bg-color, #fcfcfe);
		border-radius: 5px 5px 0 0;
		opacity: 0.3;
	}

	.trm-number {
		color: var(--theme-bg-color, #fcfcfe);
		margin-left: 5px;
		border-radius: 20px;
		font-size: 12px;
		font-weight: 600;
		display: inline-block;
		padding: 3px 10px;
		transform: translateY(-2px);
		background-color: var(--primary, #afb42b);
	}
}
</style>
