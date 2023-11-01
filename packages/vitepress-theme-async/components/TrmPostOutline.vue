<script setup lang="ts">
import { AsyncThemeConfig } from "types";
import { ref, shallowRef } from "vue";
import { onContentUpdated, useData } from "vitepress";
import { getHeader, useActiveAnchor, resolveTitle } from "../composables/outline";
import { useHasOutline } from "../composables/index";
import { onClickOutside } from "@vueuse/core";

import TrmPostOutlineItem from "./TrmPostOutlineItem.vue";
import TrmIconTocTag from "./icons/TrmIconTocTag.vue";

const show = ref(false);
const headers = shallowRef<AsyncTheme.MenuItem[]>([]);
const { frontmatter, theme } = useData<AsyncThemeConfig>();
const hasOutline = useHasOutline();

const container = ref();
const marker = ref();

onContentUpdated(() => {
	headers.value = getHeader(frontmatter.value.outline ?? theme.value.outline);
});

useActiveAnchor(container, marker);
onClickOutside(container, () => {
	show.value = false;
});
</script>
<template>
	<div v-if="hasOutline && headers.length" class="trm-fixed-btn post-toc-btn" :data-title="$t('rightside.toc')" @click="show = !show">
		<TrmIconTocTag />
		<ClientOnly>
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
		</ClientOnly>
	</div>
</template>
<style lang="less" scoped></style>
