<script setup lang="ts">
import { AsyncThemeConfig } from "types/index";
defineProps<{
	banner: AsyncThemeConfig["banner"];
}>();
</script>

<template>
	<template v-if="banner?.type === 'img'">
		<img class="trm-banner-cover" :src="banner.bgurl" :style="`object-position: ${banner.position || 'top'};object-fit:${banner.fit || 'cover'};`" alt="banner" />
	</template>
	<template v-if="banner?.type === 'video'">
		<video class="trm-banner-cover" autoplay="true" loop muted playsinline webkit-playinginline>
			<source :src="banner.bgurl" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
			Your browser does not support HTML5 video.
		</video>
	</template>
	<template v-else>
		<!-- <div class="trm-banner-cover xxxx">
			<div class="words">
				<span>T</span>
				<span>H</span>
				<span>I</span>
				<span>N</span>
				<span>G</span>
				<span>S</span>
			</div>
		</div> -->
	</template>
</template>
<style lang="less">
.xxxx {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	// background-color: var(--theme-bg2-color);
	// color: var(--theme-bg2-color);

	.words {
		font-size: 0;
		line-height: 1;

		span {
			font-size: 120px;
			display: inline-block;
			animation: move 2s ease-in-out infinite;

			&:nth-child(2) {
				animation-delay: 0.4s;
			}

			&:nth-child(3) {
				animation-delay: 0.8s;
			}

			&:nth-child(4) {
				animation-delay: 1.3s;
			}
		}
	}

	@keyframes move {
		0% {
			opacity: 0;
			transform: translate(-25%, 0);
		}
		50% {
			opacity: 1;
			text-shadow: 0 15px 40px rgba(0, 0, 0, 0.377);
		}
		100% {
			opacity: 0;
			transform: translate(33%, 0);
		}
	}
}
</style>
