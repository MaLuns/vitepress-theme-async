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

const { frontmatter, page, theme } = useData<AsyncThemeConfig>();
</script>

<template>
	<TrmPageLoading v-if="theme.pageLoading" />
	<TrmThemeLoading v-if="theme.themeLoading" />
	<div v-if="frontmatter.layout !== false" class="trm-app-frame">
		<div id="trm-dynamic-content" class="trm-swup-animation">
			<!-- <div id="trm-scroll-container" class="trm-scroll-container"> -->
			<TrmTopBar>
				<template #topbar-left-before>
					<slot name="topbar-left-before" />
				</template>
				<template #topbar-left-after>
					<slot name="topbar-left-after" />
				</template>
				<template #topbar-right-before>
					<slot name="topbar-right-before" />
				</template>
				<template #topbar-right-after>
					<slot name="topbar-right-after" />
				</template>
			</TrmTopBar>
			<div v-if="!page.isNotFound" class="trm-content-start">
				<TrmBanner>
					<template #banner-top>
						<slot name="banner-top" />
					</template>
					<template #banner-bottom>
						<slot name="banner-bottom" />
					</template>
				</TrmBanner>
				<div class="container">
					<div class="row">
						<TrmSidebar>
							<template #sidebar-before>
								<slot name="sidebar-before" />
							</template>
							<template #sidebar-user-before>
								<slot name="sidebar-user-before" />
							</template>
							<template #sidebar-social-before>
								<slot name="sidebar-social-before" />
							</template>
							<template #sidebar-info-before>
								<slot name="sidebar-info-before" />
							</template>
							<template #sidebar-email-before>
								<slot name="sidebar-email-before" />
							</template>
							<template #sidebar-after>
								<slot name="sidebar-after" />
							</template>
						</TrmSidebar>
						<TrmPageContent>
							<slot name="page-content-top" />
							<TrmPageIndex v-if="frontmatter.index || frontmatter.layout === 'index'" />
							<TrmPageArchive v-else-if="['tags', 'archives', 'categories'].includes(frontmatter.layout)" :key="page.relativePath" />
							<TrmPageAbout v-else-if="frontmatter.layout === 'about'">
								<template #about-before>
									<slot name="about-before" />
								</template>
								<template #about-introduction-before>
									<slot name="about-introduction-before" />
								</template>
								<template #about-blog-before>
									<slot name="about-blog-before" />
								</template>
								<template #about-privacy-before>
									<slot name="about-privacy-before" />
								</template>
								<template #about-after>
									<slot name="about-after" />
								</template>
							</TrmPageAbout>
							<TrmPageLinks v-else-if="frontmatter.layout === 'links'">
								<template #links-before>
									<slot name="links-before" />
								</template>
								<template #links-siteinfo-before>
									<slot name="links-siteinfo-before" />
								</template>
								<template #links-list-before>
									<slot name="links-list-before" />
								</template>
								<template #links-after>
									<slot name="links-after" />
								</template>
							</TrmPageLinks>
							<template v-else-if="frontmatter.layout === 'custom'">
								<article id="article-container">
									<Content />
								</article>
							</template>
							<TrmPagePost v-else>
								<template #post-before>
									<slot name="post-before" />
								</template>
								<template #post-info-after>
									<slot name="post-info-after" />
								</template>
								<template #post-container-before>
									<slot name="post-container-before" />
								</template>
								<template #post-content-before>
									<slot name="post-content-before" />
								</template>
								<template #post-content-after>
									<slot name="post-content-after" />
								</template>
								<template #post-copyright-before>
									<slot name="post-copyright-before" />
								</template>
								<template #post-reward-before>
									<slot name="post-reward-before" />
								</template>
								<template #post-reward-after>
									<slot name="post-reward-after" />
								</template>
								<template #post-pagination-before>
									<slot name="post-pagination-before" />
								</template>
								<template #post-after>
									<slot name="post-after" />
								</template>
							</TrmPagePost>
							<slot name="page-content-bottom" />
							<div class="trm-divider footer-divider"></div>
							<slot name="footer-before" />
							<TrmFooter>
								<template #footer-content-before>
									<slot name="footer-content-before" />
								</template>
								<template #footer-content-after>
									<slot name="footer-content-after" />
								</template>
							</TrmFooter>
							<slot name="footer-after" />
						</TrmPageContent>
					</div>
				</div>
				<TrmFixedBtn>
					<template #fixed-btn-before>
						<slot name="fixed-btn-before" />
					</template>
					<template #fixed-btn-after>
						<slot name="fixed-btn-after" />
					</template>
				</TrmFixedBtn>
			</div>
			<Content v-else />
		</div>
	</div>
	<Content v-else />
</template>
