<script setup lang="ts">
import { useTheme } from "../composables";
import TrmDividerTitle from "./TrmDividerTitle.vue";
import { truncate } from "../utils/shared";
let i = 0;
const theme = useTheme();
</script>
<template>
	<slot name="links-before" />
	<div v-if="theme.user?.ruleText" class="row trm-scroll-animation" style="margin-bottom: var(--card-bottom-card)">
		<div class="col-lg-12">
			<blockquote>
				友链要求：
				<br />
				{{ theme.user?.ruleText }} %>
			</blockquote>
		</div>
	</div>
	<slot name="links-siteinfo-before" />
	<div class="row trm-scroll-animation">
		<div class="col-lg-12">
			<TrmDividerTitle title="本站信息" :index="`0${++i}`" />
		</div>
		<div class="col-lg-12">
			<div class="trm-card trm-active-el">
				<ul class="trm-list">
					<li v-if="theme.user?.name">网站名称：{{ theme.user.name }}</li>
					<li v-if="theme.user?.domain">网站链接：{{ theme.user.domain }}</li>
					<li v-if="theme.user?.avatar">网站头像：{{ theme.user.avatar }}</li>
					<li v-if="theme.user?.describe">网站简介：{{ theme.user.describe }}</li>
				</ul>
			</div>
		</div>
	</div>
	<slot name="links-list-before" />
	<div v-if="theme.links?.length" class="row trm-scroll-animation">
		<div class="col-lg-12">
			<TrmDividerTitle title="友情链接" :index="`0${++i}`" />
		</div>
		<div v-for="item in theme.links" :key="item.url" class="col-lg-6">
			<a :href="item.url" target="_blank" rel="nofollow">
				<div class="trm-link-box trm-scroll-animation">
					<div class="trm-link-avatar">
						<img draggable="false" :alt="item.name" :src="item.image" />
					</div>
					<div class="trm-link-text">
						<h6 class="trm-mb-10">{{ item.name }}</h6>
						<div>{{ item.desc ? truncate(item.desc, { length: 32 }) : "" }}</div>
					</div>
				</div>
			</a>
		</div>
	</div>
	<slot name="links-after" />
</template>
