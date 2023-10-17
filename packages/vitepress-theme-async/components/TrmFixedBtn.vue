<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useTheme } from "../composables/index";
import handle from "../utils/global";
import TrmIcon from "./TrmIcon.vue";
import { getScrollTop } from "../utils/client";

const theme = useTheme();
const offset = ref(false);
const ratio = ref(0);

const themeLoading = (wait: number = 600): Promise<void> => {
	return new Promise<void>(resolve => {
		document.documentElement.classList.add("theme-animating");
		setTimeout(() => {
			setTimeout(() => {
				document.documentElement.classList.remove("theme-animating");
			}, wait);
			resolve();
		}, wait);
	});
};

const switchThemeMode = () => {
	themeLoading().then(() => {
		const type = document.documentElement.classList.contains("dark") ? "style-light" : "style-dark";
		const fun = type === "style-dark" ? "add" : "remove";
		document.querySelector(".trm-mode-swich-animation")?.classList[fun]("trm-active");
		document.documentElement.classList[fun]("dark");

		localStorage.setItem("theme-mode", type);
		// setThemeColor();
	});
};

const switchSingleColumn = () => {
	document.body.classList.toggle("trm-single-column");
};

const scrollFun = () => {
	const scrollTop = getScrollTop();
	const { scrollHeight, clientHeight } = document.documentElement;
	offset.value = scrollTop >= 500;
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
		<slot name="fixed-container-before" />
		<!-- <% if(is_toc) { %> -->
		<div class="trm-fixed-btn post-toc-btn" data-title="<%- __('rightside.toc_title') %>">
			<TrmIcon :icon="theme.icons!.toc_tag" />
		</div>
		<div class="trm-fixed-btn" data-title="切换主题模式" @click="switchThemeMode()">
			<TrmIcon class="trm-dark-icon" :icon="theme.icons!.sun" />
			<TrmIcon class="trm-light-icon" :icon="theme.icons!.moon" />
		</div>
		<!--  <% if(is_post() && theme.rightside.readmode) { %> -->
		<div class="trm-fixed-btn" data-title="阅读模式" @click="handle.switchReadMode()">
			<TrmIcon :icon="theme.icons!.read" />
		</div>
		<!-- <% if(theme.rightside.aside && !page.single_column) { %> -->
		<div class="trm-fixed-btn hidden-md" data-title="切换单双栏" @click="switchSingleColumn()">
			<TrmIcon :icon="theme.icons!.arrows" />
		</div>
		<div class="trm-fixed-btn trm-back-top" :style="`background-size:100% ${ratio}%;`" data-title="返回顶部">
			<TrmIcon :icon="theme.icons!.back_top" />
		</div>
		<slot name="fixed-container-after" />
	</div>
</template>
