<script setup lang="ts">
import { AsyncThemeConfig } from "types";
import { computed, ref, shallowRef } from "vue";
import { onContentUpdated, useData } from "vitepress";
import { getHeader, useActiveAnchor, resolveTitle } from "../composables/outline";
import { useIsPost } from "../composables/index";

import TrmIcon from "./TrmIcon.vue";
import TrmPostOutlineItem from "./TrmPostOutlineItem.vue";

const show = ref(false);
const isPost = useIsPost();
const headers = shallowRef<AsyncTheme.MenuItem[]>([]);
const { frontmatter, theme } = useData<AsyncThemeConfig>();

onContentUpdated(() => {
	headers.value = getHeader(frontmatter.value.outline ?? theme.value.outline);
});

const hasOutline = computed(() => {
	return isPost && headers.value.length && frontmatter.value.outline !== false;
});

const container = ref();
const marker = ref();

useActiveAnchor(container, marker);
</script>
<template>
	<div v-if="hasOutline" class="trm-fixed-btn post-toc-btn" data-title="文章目录" @click="show = !show">
		<TrmIcon :icon="theme.icons!.toc_tag" />
		<Teleport to="body">
			<div ref="container" class="trm-outline" :class="show ? 'active' : ''" role="navigation">
				<div ref="marker" class="trm-outline-mask"></div>
				<div class="trm-outline-title">
					{{ resolveTitle(theme) }}
				</div>
				<nav aria-labelledby="doc-outline-aria-label">
					<TrmPostOutlineItem :headers="headers" :root="true" />
				</nav>
			</div>
		</Teleport>
	</div>
</template>
<style lang="less" scoped></style>
