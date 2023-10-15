<script setup lang="ts">
import { useTheme } from "../composables/index.js";
import TrmIcon from "./TrmIcon.vue";

const theme = useTheme();
</script>
<template>
	<div class="trm-mode-swich-animation-frame">
		<div class="trm-mode-swich-animation">
			<i class="i-sun">
				<TrmIcon :icon="theme.icons!.sun"></TrmIcon>
			</i>
			<div class="trm-horizon"></div>
			<i class="i-moon">
				<TrmIcon :icon="theme.icons!.moon"></TrmIcon>
			</i>
		</div>
	</div>
</template>
