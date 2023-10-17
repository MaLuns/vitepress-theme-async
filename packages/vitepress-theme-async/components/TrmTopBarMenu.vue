<script setup lang="ts">
import { AsyncThemeConfig } from "types/index";
import { useData } from "vitepress";
const { theme } = useData<AsyncThemeConfig>();
</script>

<template>
	<div class="trm-menu">
		<nav>
			<ul>
				<li v-for="(element, index) in theme.nav" :key="index" class="menu-item-has-children">
					<a :href="element.link ? element.link : 'javascript:void(0)'">
						{{ element.text }}
					</a>
					<ul v-if="element.items?.length">
						<li v-for="(item, idx) in element.items" :key="idx">
							<a :href="item.link">
								{{ item.text }}
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>
