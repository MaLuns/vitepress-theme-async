<script setup lang="ts">
import { useData, withBase } from "vitepress";
import { useBanner, useSingleColumn } from "../composables/index";
import TrmBannerBg from "./TrmBannerBg.vue";

const { page } = useData();
const banner = useBanner();
const singleColumn = useSingleColumn();

const onScrollTo = () => {
	const container = document.querySelector(".trm-banner");
	container && window.scrollTo({ top: container.clientHeight - 160, behavior: "smooth" });
};
</script>

<template>
	<div class="trm-banner">
		<slot name="banner-top" />
		<TrmBannerBg :banner="banner" />
		<div class="trm-banner-content trm-overlay">
			<div class="container">
				<div class="row">
					<div v-if="!singleColumn" class="col-lg-4"></div>
					<div :class="!singleColumn ? 'col-lg-8' : 'col-lg-12'">
						<!-- banner title -->
						<div :class="!singleColumn ? 'trm-banner-text' : 'trm-banner-text trm-text-center'">
							<div class="trm-label trm-mb-20">{{ banner?.bannerText }}</div>
							<h1 class="trm-mb-30 trm-hsmb-font" v-html="banner?.bannerTitle"></h1>
							<ul class="trm-breadcrumbs trm-label">
								<li>
									<a :href="withBase('/')" class="trm-anima-link">Home</a>
								</li>
								<li>
									<span>
										{{ page.relativePath.split("/")[0].replace('.md', '') }}
									</span>
								</li>
							</ul>
						</div>
						<!-- banner title end -->
						<!-- scroll hint -->
						<span class="trm-scroll-hint-frame" @click="onScrollTo">
							<div class="trm-scroll-hint"></div>
							<span class="trm-label">Scroll down</span>
						</span>
						<!-- scroll hint end -->
					</div>
				</div>
			</div>
		</div>
		<slot name="banner-bottom" />
	</div>
</template>
