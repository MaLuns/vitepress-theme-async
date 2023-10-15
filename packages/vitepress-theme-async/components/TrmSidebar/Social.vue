<script setup lang="ts">
import { useTheme } from "../../composables/index.js";
import TrmIcon from "../TrmIcon.vue";
const theme = useTheme();
</script>

<template>
	<template v-if="theme.sidebar?.social">
		<div class="trm-divider trm-mb-40 trm-mt-40"></div>
		<div class="trm-social">
			<template v-for="item in theme.sidebar.social">
				<a :href="item.url" :title="item.name" rel="nofollow" target="_blank">
					<TrmIcon :icon="item.icon"></TrmIcon>
				</a>
			</template>
		</div>
	</template>
</template>
