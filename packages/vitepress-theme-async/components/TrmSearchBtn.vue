<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import TrmIconSearch from "./icons/TrmIconSearch.vue";

const TrmSearchBoxLocal = __VP_LOCAL_SEARCH__ ? defineAsyncComponent(() => import("./TrmSearchBoxLocal.vue")) : () => null;

const provider = __VP_LOCAL_SEARCH__ ? "local" : "";
const showSearch = ref(false);
</script>
<template>
	<div v-if="provider" class="trm-fixed-btn post-toc-btn" :data-title="$t('rightside.search')" @click="showSearch = true">
		<TrmIconSearch />
	</div>
	<ClientOnly>
		<TrmSearchBoxLocal v-if="showSearch" @close="showSearch = false" />
	</ClientOnly>
</template>
