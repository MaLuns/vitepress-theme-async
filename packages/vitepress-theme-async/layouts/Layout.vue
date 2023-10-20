<script setup lang="ts">
import TrmTopBar from "../components/TrmTopBar.vue";
import TrmBanner from "../components/TrmBanner.vue";
import TrmSidebar from "../components/TrmSidebar.vue";
import TrmFooter from "../components/TrmFooter.vue";
import TrmThemeLoading from "../components/TrmThemeLoading.vue";
import TrmPageLoading from "../components/TrmPageLoading.vue";
import TrmFixedBtn from "../components/TrmFixedBtn.vue";
import TrmPageContent from "../components/TrmPageContent.vue";

import TrmPageIndex from "../components/TrmPageIndex.vue";
import TrmPagePost from "../components/TrmPagePost.vue";
import TrmPageArchive from "../components/TrmPageArchive.vue";
import TrmPageAbout from "../components/TrmPageAbout.vue";
import TrmPageLinks from "../components/TrmPageLinks.vue";
import { useData } from "vitepress";

const { frontmatter, page } = useData();
</script>

<template>
	<TrmPageLoading />
	<TrmThemeLoading />
	<div v-if="frontmatter.layout !== false" class="trm-app-frame">
		<div id="trm-dynamic-content" class="trm-swup-animation">
			<!-- <div id="trm-scroll-container" class="trm-scroll-container"> -->
			<TrmTopBar>
				<template #topbar-left-before><slot name="topbar-left-before" /></template>
				<template #topbar-left-after><slot name="topbar-left-after" /></template>
				<template #topbar-right-before><slot name="topbar-right-before" /></template>
				<template #topbar-right-after><slot name="topbar-right-after" /></template>
			</TrmTopBar>
			<!-- 指定唯一 key, 确保组件更新 -->
			<div v-if="!page.isNotFound" class="trm-content-start">
				<TrmBanner>
					<template #banner-top><slot name="banner-top" /></template>
					<template #banner-bottom><slot name="banner-bottom" /></template>
				</TrmBanner>
				<div class="container">
					<div class="row">
						<TrmSidebar></TrmSidebar>
						<TrmPageContent>
							<slot name="page-content-top" />
							<TrmPageIndex v-if="frontmatter.index" />
							<TrmPageArchive v-else-if="['tags', 'archives', 'categories'].includes(frontmatter.layout)" :type="frontmatter.layout" :key="frontmatter.layout" />
							<TrmPageAbout v-else-if="frontmatter.layout === 'about'" />
							<TrmPageLinks v-else-if="frontmatter.layout === 'links'" />
							<TrmPagePost v-else></TrmPagePost>
							<slot name="page-content-bottom" />
							<div class="trm-divider footer-divider"></div>
							<slot name="footer-top" />
							<TrmFooter />
							<slot name="footer-bottom" />
						</TrmPageContent>
					</div>
				</div>
				<TrmFixedBtn>
					<template #fixed-btn-top><slot name="fixed-btn-top" /></template>
					<template #fixed-btn-bottom><slot name="fixed-btn-bottom" /></template>
				</TrmFixedBtn>
			</div>
			<Content v-else />
		</div>
	</div>
	<Content v-else />
</template>
