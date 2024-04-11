<script setup lang="ts">
import { useTheme } from "../composables/index";
const theme = useTheme();
</script>

<template>
	<template v-if="theme.sidebar?.info">
		<div class="trm-divider trm-mb-40 trm-mt-40"></div>
		<ul class="trm-table trm-mb-20">
			<li v-for="(item, idx) in theme.sidebar?.info" :key="idx">
				<div class="trm-label">{{ $t(<"none">item.key) }}:</div>
				<div class="trm-label trm-label-light">{{ $t(<"none">item.val) }}</div>
			</li>
		</ul>
	</template>
</template>
