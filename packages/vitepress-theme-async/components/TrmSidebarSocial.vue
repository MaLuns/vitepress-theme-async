<script setup lang="ts">
import { useTheme } from "../composables/index";

const theme = useTheme();
</script>

<template>
	<template v-if="theme.sidebar?.social">
		<div class="trm-divider trm-mb-40 trm-mt-40"></div>
		<div class="trm-social">
			<template v-for="item in theme.sidebar.social" :key="item.url">
				<a :href="item.url" :title="item.name" rel="nofollow" target="_blank">
					<i v-html="item.icon"></i>
				</a>
			</template>
		</div>
	</template>
</template>
