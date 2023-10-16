<script setup lang="ts">
import { useTheme } from "../composables/index";
const theme = useTheme();
</script>

<template>
	<div class="trm-divider trm-mb-40 trm-mt-40"></div>
	<ul class="trm-table trm-mb-20">
		<template v-if="theme.sidebar?.info">
			<li v-for="(item, idx) in theme.sidebar?.info" :key="idx">
				<div class="trm-label">{{ item.key }}:</div>
				<div class="trm-label trm-label-light">{{ item.val }}</div>
			</li>
		</template>
	</ul>
</template>
