<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { getScrollTop } from "../utils/client";

defineProps<{
	banner: AsyncTheme.BannerConfig;
}>();

const bannerRef = ref<HTMLElement>()

const scrollFun = () => {
	const scrollTop = getScrollTop();
	bannerRef.value && (bannerRef.value.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${Math.min(scrollTop / 3, 100)}, 0, 1)`);
}

onMounted(() => {
	scrollFun();
	window.addEventListener("scroll", scrollFun);

	onUnmounted(() => {
		window.removeEventListener("scroll", scrollFun);
	});
});
</script>

<template>
	<template v-if="banner?.type === 'img'">
		<img
			ref="bannerRef"
			class="trm-banner-cover"
			:src="banner.bgurl"
			:style="`object-position: ${banner.position || 'top'};object-fit:${banner.fit || 'cover'};`"
			alt="banner"
			onload="this.onload=null;this.style.opacity=1;"
		/>
	</template>
	<template v-if="banner?.type === 'video'">
		<video class="trm-banner-cover" autoplay="true" loop muted playsinline webkit-playinginline>
			<source :src="banner.bgurl" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
			Your browser does not support HTML5 video.
		</video>
	</template>
</template>
