<script setup lang="ts">
import { truncate } from "../../utils/shared";
import friend_404 from '../../assets/friend_404.gif'

withDefaults(
	defineProps<{
		url?: string;
		name?: string;
		image?: string;
		desc?: string;
		err?: string;
	}>(), {
	err: friend_404
})
</script>
<template>
	<a :href="url" target="_blank" rel="nofollow">
		<div class="trm-link-box trm-scroll-animation">
			<div class="trm-link-avatar">
				<img draggable="false" :alt="name" :src="image" :onerror='`this.onerror=null;this.src="${err}"`' />
			</div>
			<div class="trm-link-text">
				<h6 class="trm-mb-10">{{ name }}</h6>
				<div>{{ desc ? truncate(desc, { length: 32 }) : "" }}</div>
			</div>
		</div>
	</a>
</template>
<style lang="less">
.trm-link-box {
	display: flex;
	padding: 20px;
	border-radius: var(--card-border-radius, 10px);
	background-color: var(--theme-bg-color, #fcfcfe);
	box-shadow: var(--box-shadow2, 0 2px 4px -2px rgba(0, 0, 0, 0.15));
	margin-bottom: var(--card-bottom-card, 40px);
	align-items: center;

	.trm-link-avatar {
		width: 50px;
		height: 50px;
		margin-right: 20px;
		flex-shrink: 0;

		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			box-shadow: none !important;
			padding: 2px;
		}
	}

	.trm-link-text {
		div {
			height: 2.6em;
			line-height: 1.3em;
			overflow: hidden;
		}
	}
}
</style>
