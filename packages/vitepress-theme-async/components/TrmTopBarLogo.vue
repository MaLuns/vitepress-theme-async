<script setup lang="ts">
import { withBase } from "vitepress";
import { useTheme } from "../composables/index";
import TrmSwichImgs from "./global/TrmSwichImgs.vue";

const theme = useTheme();


const logos = [
	theme.value.favicon?.logo ? withBase(theme.value.favicon?.logo) : undefined,
	theme.value.favicon?.darkLogo ? withBase(theme.value.favicon?.darkLogo) : undefined
]
</script>

<template>
	<a href="/" class="trm-logo-frame trm-anima-link">
		<TrmSwichImgs v-if="theme.favicon?.logo" :src="logos" />
		<div class="trm-logo-text">
			{{ theme?.user?.lastName }}
			<span>{{ theme?.user?.firstName }}</span>
		</div>
	</a>
</template>
