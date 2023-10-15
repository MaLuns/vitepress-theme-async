<script setup lang="ts">
import { useTheme } from "../composables/index.js";
import handle from "../utils/global.js";
import TrmIcon from "./TrmIcon.vue";

const theme = useTheme();
</script>

<template>
	<div class="trm-fixed-container">
		<!--   <% if(is_toc) { %> -->
		<div class="trm-fixed-btn post-toc-btn" data-title="<%- __('rightside.toc_title') %>">
			<TrmIcon :icon="theme.icons!.toc_tag" />
		</div>
		<!--     <% } %>
    <% if(is_post() && theme.rightside.readmode) { %> -->
		<div class="trm-fixed-btn" data-title="<%- __('rightside.readmode_title') %>" @click="handle.switchReadMode()">
			<TrmIcon :icon="theme.icons!.read" />
		</div>
		<!-- <% if(theme.rightside.aside && !page.single_column) { %> -->
		<div class="trm-fixed-btn hidden-md" data-title="<%- __('rightside.aside') %>" @click="handle.switchSingleColumn()">
			<TrmIcon :icon="theme.icons!.arrows" />
		</div>
		<div class="trm-fixed-btn" id="trm-back-top" data-title="<%- __('rightside.back_to_top') %>">
			<TrmIcon :icon="theme.icons!.back_top" />
		</div>
	</div>
</template>
