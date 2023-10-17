<script setup lang="ts">
import { useTheme } from "../composables";
import TrmDividerTitle from "./TrmDividerTitle.vue";
let i = 0;
const theme = useTheme();
</script>
<template>
	<div v-if="theme.user?.ruleText" class="row trm-mb-40">
		<div class="col-lg-12">
			<blockquote class="trm-scroll-animation">
				友链要求：
				<br />
				{{ theme.user?.ruleText }} %>
			</blockquote>
		</div>
	</div>

	<div class="row trm-mb-20">
		<div class="col-lg-12">
			<TrmDividerTitle title="本站信息" :index="`0${++i}`" />
		</div>
		<div class="col-lg-12">
			<div class="trm-service-icon-box trm-scroll-animation trm-active-el">
				<ul class="trm-list">
					<li v-if="theme.user?.name">网站名称：{{ theme.user.name }}</li>
					<li v-if="theme.user?.domain">网站链接：{{ theme.user.domain }}</li>
					<li v-if="theme.user?.avatar">网站头像：{{ theme.user.avatar }}</li>
					<li v-if="theme.user?.describe">网站简介：{{ theme.user.describe }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
