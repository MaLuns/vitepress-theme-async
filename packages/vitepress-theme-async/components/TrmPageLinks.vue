<script setup lang="ts">
import TrmDividerTitle from "./global/TrmDividerTitle.vue";
import TrmCardLink from "./global/TrmCardLink.vue";
import { data } from '../composables/links.data'
import { useTheme } from "../composables";
import { withBase } from "vitepress";

let i = 0;
const theme = useTheme();
const flink = theme.value.errorImg?.flink ? withBase(theme.value.errorImg?.flink) : undefined
</script>
<template>
	<slot name="links-before" />
	<div v-if="theme.user?.ruleText" class="row trm-scroll-animation" style="margin-bottom: var(--card-bottom-card)">
		<div class="col-lg-12">
			<blockquote>
				{{ $t("site.ruleText") }}{{ $t("symbol.colon") }}
				<br />
				{{ theme.user?.ruleText }}
			</blockquote>
		</div>
	</div>
	<slot name="links-siteinfo-before" />
	<div class="row trm-scroll-animation">
		<div class="col-lg-12">
			<TrmDividerTitle :title="$t('site.title')" :index="`0${++i}`" />
		</div>
		<div class="col-lg-12">
			<div class="trm-card trm-active-el">
				<ul class="trm-list">
					<li v-if="theme.user?.name">{{ $t("site.webmaster") }}{{ $t("symbol.colon") }}{{ theme.user.name }}</li>
					<li v-if="theme.user?.domain">{{ $t("site.domain") }}{{ $t("symbol.colon") }}{{ theme.user.domain }}</li>
					<li v-if="theme.user?.avatar">{{ $t("site.avatar") }}{{ $t("symbol.colon") }}{{ theme.user.avatar }}</li>
					<li v-if="theme.user?.describe">{{ $t("site.describe") }}{{ $t("symbol.colon") }}{{ theme.user.describe }}</li>
				</ul>
			</div>
		</div>
	</div>
	<slot name="links-list-before" />
	<div v-if="data?.length" class="row trm-scroll-animation">
		<div class="col-lg-12">
			<TrmDividerTitle :title="$t('title.links')" :index="`0${++i}`" />
		</div>
		<div v-for="item in data" :key="item.url" class="col-lg-6">
			<TrmCardLink v-bind="item" :err="flink" />
		</div>
	</div>
	<slot name="links-after" />
</template>
