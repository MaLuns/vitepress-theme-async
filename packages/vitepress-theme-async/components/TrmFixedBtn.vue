<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { AsyncThemeConfig } from "types";
import { useIsPost } from "../composables/index";
import { useData } from "vitepress";
import { getScrollTop, backTop, switchThemeMode, switchReadMode, switchSingleColumn } from "../utils/client";

import TrmIcon from "./TrmIcon.vue";
import TrmPostOutline from "./TrmPostOutline.vue";

const offset = ref(false);
const ratio = ref(0);
const isPost = useIsPost();
const { theme, frontmatter } = useData<AsyncThemeConfig>();

const scrollFun = () => {
	const scrollTop = getScrollTop();
	const { scrollHeight, clientHeight } = document.documentElement;
	offset.value = scrollTop >= 420;
	ratio.value = parseInt(((scrollTop / (scrollHeight - clientHeight)) * 100).toString());
};

onMounted(() => {
	window.addEventListener("scroll", scrollFun);
	scrollFun();
});

onUnmounted(() => {
	window.removeEventListener("scroll", scrollFun);
});
</script>

<template>
	<div class="trm-fixed-container" :class="offset ? 'offset' : ''">
		<slot name="fixed-btn-top" />
		<TrmPostOutline />
		<div class="trm-fixed-btn" data-title="切换主题模式" @click="switchThemeMode()">
			<TrmIcon class="trm-dark-icon" :icon="theme.icons!.sun" />
			<TrmIcon class="trm-light-icon" :icon="theme.icons!.moon" />
		</div>
		<div v-if="isPost && theme.rightside?.readmode" class="trm-fixed-btn" data-title="阅读模式" @click="switchReadMode()">
			<TrmIcon :icon="theme.icons!.read" />
		</div>
		<div v-if="theme.rightside?.aside && !frontmatter.single_column" class="trm-fixed-btn hidden-md" data-title="切换单双栏" @click="switchSingleColumn()">
			<TrmIcon :icon="theme.icons!.arrows" />
		</div>
		<slot name="fixed-btn-bottom" />
		<div class="trm-fixed-btn trm-back-top" :style="`background-size:100% ${ratio}%;`" data-title="返回顶部" @click="backTop()">
			<TrmIcon :icon="theme.icons!.back_top" />
		</div>
	</div>
</template>
