<script setup lang="ts">
import { AsyncThemeConfig } from "types/index";
import { useData } from "vitepress";
import { isActive } from "../utils/shared";

const { theme, page } = useData<AsyncThemeConfig>();
</script>

<template>
	<div class="trm-menu">
		<nav>
			<ul>
				<li
					v-for="(element, index) in theme.top_bars"
					:key="index"
					:class="{
						'current-menu-item': isActive(page.relativePath, element.activeMatch || element.url, !!element.activeMatch),
					}"
				>
					<a :href="element.url ? element.url : 'javascript:void(0)'" :target="element?.target" :rel="element?.rel">
						{{ element.title }}
					</a>
					<ul v-if="element.children?.length">
						<li
							v-for="(item, idx) in element.children"
							:key="idx"
							:class="{
								'current-item': isActive(page.relativePath, item.activeMatch || item.url, !!item.activeMatch),
							}"
						>
							<a :href="item.url" :target="item.target" :rel="item.rel">
								{{ item.title }}
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>
