<script setup lang="ts">
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
<style lang="less">
.trm-outline {
	position: fixed;
	right: calc(30px + 3rem);
	bottom: 26px;
	z-index: 50;
	padding: 10px;
	border-radius: var(--card-border-radius, 10px);
	box-shadow: var(--top-bar-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.15));
	background-color: var(--theme-bg-color, #fcfcfe);
	max-height: 60vh;
	max-width: 300px;
	overflow: hidden;
	transform: scale(0.9) translateY(20px);
	opacity: 0;
	display: flex;
	flex-direction: column;
	pointer-events: none;
	user-select: none;
	transition:
		transform 0.3s,
		opacity 0.3s;
	overflow-x: hidden;
	overflow-y: auto;
	scrollbar-width: none;
	font-weight: 600;

	&::-webkit-scrollbar {
		display: none;
	}

	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	&.active {
		opacity: 1;
		transform: scale(1) translateY(0px);
		pointer-events: all;
	}

	.nested {
		padding-left: 16px;
	}

	.trm-outline-mask {
		position: absolute;
		top: 32px;
		left: 0px;
		z-index: 0;
		opacity: 0;
		width: 2px;
		border-radius: 2px;
		height: 18px;
		background-color: var(--primary-70);
		transition:
			top 0.25s cubic-bezier(0, 1, 0.5, 1),
			background-color 0.5s,
			opacity 0.25s;
	}

	.trm-outline-title {
		letter-spacing: 0.4px;
		line-height: 28px;
		font-weight: 600;
		background-color: var(--theme-bg-color, #fcfcfe);
		position: sticky;
		top: -10px;
	}

	.outline-link {
		display: block;
		line-height: 28px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: color 0.3s;
		font-weight: 400;

		&.active {
			color: var(--primary);
		}

		&:hover {
			color: var(--primary);
		}

		&.nested {
			padding-left: 13px;
		}
	}
}
</style>
