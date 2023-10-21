<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useData } from "vitepress";
import { AsyncThemeConfig } from "types";
import { useIsPost } from "../composables/index";
import { getScrollTop, backTop, themeLoading, switchReadMode, switchSingleColumn, setThemeColor } from "../utils/client";
import { throttleAndDebounce } from "../utils/shared";

import TrmIcon from "./TrmIcon.vue";
import TrmPostOutline from "./TrmPostOutline.vue";
import TrmSearchBtn from "./TrmSearchBtn.vue";

const offset = ref(false);
const ratio = ref(0);
const isPost = useIsPost();
const { theme, frontmatter, isDark } = useData<AsyncThemeConfig>();

const scrollFun = () => {
	const scrollTop = getScrollTop();
	const { scrollHeight, clientHeight } = document.documentElement;
	offset.value = scrollTop >= 420;
	ratio.value = parseInt(((scrollTop / (scrollHeight - clientHeight)) * 100).toString());
};

onMounted(() => {
	scrollFun();
	window.addEventListener("scroll", scrollFun);

	onUnmounted(() => {
		window.removeEventListener("scroll", scrollFun);
	});
});

const onSwitchReadMode = throttleAndDebounce(switchReadMode, 500);

const onSwitchThemeMode = () => {
	themeLoading().then(() => {
		const fun = isDark.value ? "add" : "remove";
		document.querySelector(".trm-mode-swich-animation")?.classList[fun]("trm-active");
		isDark.value = !isDark.value;
		setThemeColor();
	});
};
</script>

<template>
	<div class="trm-fixed-container" :class="offset ? 'offset' : ''">
		<slot name="fixed-btn-top" />
		<TrmSearchBtn />
		<TrmPostOutline />
		<div class="trm-fixed-btn" data-title="切换主题模式" @click="onSwitchThemeMode">
			<TrmIcon class="trm-dark-icon" :icon="theme.icons!.sun" />
			<TrmIcon class="trm-light-icon" :icon="theme.icons!.moon" />
		</div>
		<div v-if="isPost && theme.rightside?.readmode" class="trm-fixed-btn" data-title="阅读模式" @click="onSwitchReadMode()">
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
