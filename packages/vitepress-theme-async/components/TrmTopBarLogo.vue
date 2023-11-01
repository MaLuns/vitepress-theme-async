<script setup lang="ts">
import { useTheme } from "../composables/index";
import TrmSwichImgs from "./TrmSwichImgs.vue";

const theme = useTheme();
</script>

<template>
	<a href="/" class="trm-logo-frame trm-anima-link">
		<TrmSwichImgs v-if="theme.favicon?.logo" :src="[theme?.favicon?.logo, theme?.favicon?.dark_logo]" />
		<div class="trm-logo-text">
			{{ theme?.user?.lastName }}
			<span>{{ theme?.user?.firstName }}</span>
		</div>
	</a>
</template>
