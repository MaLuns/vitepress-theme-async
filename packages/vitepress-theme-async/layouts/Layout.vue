<script setup lang="ts">
import TrmTopBar from "../components/TrmTopBar.vue";
import TrmBanner from "../components/TrmBanner.vue";
import TrmSidebar from "../components/TrmSidebar.vue";
import TrmFooter from "../components/TrmFooter.vue";
import TrmThemeLoading from "../components/TrmThemeLoading.vue";
import TrmPageLoading from "../components/TrmPageLoading.vue";
import TrmFixedBtn from "../components/TrmFixedBtn.vue";

import TrmPageIndex from "../components/TrmPageIndex.vue";
import TrmPagePost from "../components/TrmPagePost.vue";
import TrmPageArchive from "../components/TrmPageArchive.vue";

// import handle from "../utils/global";
import { useSingleColumn } from "../composables/index";
import { useData } from "vitepress";

const { frontmatter } = useData();
const singleColumn = useSingleColumn();
</script>

<template>
	<TrmPageLoading />
	<TrmThemeLoading />
	<div v-if="frontmatter.layout !== false" class="trm-app-frame">
		<div id="trm-dynamic-content" class="trm-swup-animation">
			<!-- <div id="trm-scroll-container" class="trm-scroll-container"> -->
			<TrmTopBar />
			<div class="trm-content-start">
				<!-- banner -->
				<TrmBanner />
				<!-- banner end -->
				<div class="container">
					<div class="row">
						<div v-if="!singleColumn" class="trm-page-sidebar col-lg-4 hidden-sm">
							<TrmSidebar />
						</div>
						<div class="trm-page-content" :class="!singleColumn ? 'col-lg-8' : 'col-lg-12'">
							<div id="trm-content" class="trm-content">
								<TrmPageIndex v-if="frontmatter.index" />
								<TrmPageArchive :key="frontmatter.layout" v-else-if="['tags', 'archives', 'categorys'].includes(frontmatter.layout)" />
								<TrmPagePost v-else />
								<div class="trm-divider footer-divider"></div>
								<TrmFooter />
							</div>
						</div>
					</div>
				</div>

				<TrmFixedBtn>
					<template #fixed-container-before><slot name="fixed-container-before" /></template>
					<template #fixed-container-after><slot name="fixed-container-after" /></template>
				</TrmFixedBtn>
			</div>
			<!-- </div> -->
		</div>
	</div>
	<Content v-else />
</template>
