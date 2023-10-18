<script setup lang="ts">
import { useTheme } from "../composables/index";
const theme = useTheme();
withDefaults(
	defineProps<{
		icon?: string;
	}>(),
	{
		icon: "",
	},
);
</script>
<template>
	<svg v-if="theme.icons?.type === 'symbol'" class="symbol-icon" :class="icon" aria-hidden="true">
		<use :xlink:href="`#${icon}`"></use>
	</svg>
	<i v-else class="iconfont" :class="icon"></i>
</template>
