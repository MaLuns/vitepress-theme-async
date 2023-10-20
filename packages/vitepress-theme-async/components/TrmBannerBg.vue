<script setup lang="ts">
defineProps<{
	banner: AsyncTheme.BannerConfig;
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
</template>
