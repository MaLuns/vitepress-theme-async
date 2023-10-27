<script setup lang="ts">
import { usePageUrl } from "../composables";
import TrmIconNext from "./icons/TrmIconNext.vue";

defineProps<{
	name: string;
	length: number;
}>();

const pageUrl = usePageUrl();
</script>

<template>
	<div class="trm-blog-categories trm-scroll-animation">
		<h6>
			{{ name }}
			<span class="trm-number">{{ length }}</span>
		</h6>
		<div class="trm-divider trm-mb-20 trm-mt-20"></div>
		<a :href="pageUrl.categorys + '?q=' + name" class="trm-label">
			更多
			<TrmIconNext class="arrow-right" />
		</a>
	</div>
</template>
