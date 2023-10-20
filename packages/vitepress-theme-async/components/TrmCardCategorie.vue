<script setup lang="ts">
import { withBase } from "vitepress";
import { usePageUrl, useTheme } from "../composables";
import TrmIcon from "./TrmIcon.vue";

defineProps<{
	name: string;
	length: number;
}>();

const theme = useTheme();
const pageUrl = usePageUrl();
</script>

<template>
	<div class="trm-blog-categories trm-scroll-animation">
		<h6>
			{{ name }}
			<span class="trm-number">{{ length }}</span>
		</h6>
		<div class="trm-divider trm-mb-20 trm-mt-20"></div>
		<a :href="withBase(pageUrl.categorys + '/' + name)" class="trm-label">
			更多
			<TrmIcon :icon="theme.icons?.next" class="arrow-right" />
			<!-- <%- icon(theme.icons.next, 'arrow-right') %> -->
		</a>
	</div>
</template>
