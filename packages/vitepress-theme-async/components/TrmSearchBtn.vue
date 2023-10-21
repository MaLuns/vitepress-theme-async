<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { useTheme } from "../composables";
import TrmIcon from "./TrmIcon.vue";

const TrmSearchBoxLocal = __VP_LOCAL_SEARCH__ ? defineAsyncComponent(() => import("./TrmSearchBoxLocal.vue")) : () => null;

const provider = __VP_LOCAL_SEARCH__ ? "local" : "";
const theme = useTheme();
const showSearch = ref(false);
</script>
<template>
	<div v-if="provider" class="trm-fixed-btn post-toc-btn" data-title="搜索" @click="showSearch = true">
		<TrmIcon :icon="theme.icons!.search" />
	</div>
	<ClientOnly>
		<TrmSearchBoxLocal v-if="showSearch" @close="showSearch = false" />
	</ClientOnly>
</template>
