<script setup lang="ts">
import { useTheme } from "../composables";
import TrmDividerTitle from "./global/TrmDividerTitle.vue";
let i = 0;
const theme = useTheme();
</script>
<template>
	<slot name="about-before" />
	<div v-if="theme.about?.title" class="row trm-scroll-animation" style="margin-bottom: var(--card-bottom-card)">
		<div class="col-lg-12">
			<blockquote>
				{{ theme.about.title }}
			</blockquote>
		</div>
	</div>
	<slot name="about-introduction-before" />
	<div v-if="theme.about?.introduction" class="row trm-scroll-animation">
		<div class="col-lg-12">
			<TrmDividerTitle :title="$t('title.author')" :index="`0${++i}`" />
			<div class="trm-card trm-contrast trm-active-el" v-html="theme.about.introduction"></div>
		</div>
	</div>
	<slot name="about-blog-before" />
	<div v-if="theme.about?.blog" class="row trm-scroll-animation">
		<div class="col-lg-12">
			<TrmDividerTitle :title="$t('title.blog')" :index="`0${++i}`" />
			<div class="trm-card trm-active-el" v-html="theme.about.blog"></div>
		</div>
	</div>
	<slot name="about-privacy-before" />
	<div v-if="theme.about?.privacy" class="row trm-scroll-animation">
		<div class="col-lg-12">
			<TrmDividerTitle :title="$t('title.privacy')" :index="`0${++i}`" />
			<div class="trm-card trm-active-el" v-html="theme.about.privacy"></div>
		</div>
	</div>
	<slot name="about-after" />
</template>
