<script setup lang="ts">
import { useTheme } from "../composables/index";
import TrmIcon from "./TrmIcon.vue";
const theme = useTheme();
</script>
<template>
	<template v-if="theme.user?.email">
		<div class="trm-divider trm-mb-40 trm-mt-40"></div>
		<!-- action button -->
		<div class="text-center">
			<a :href="`mailto:${theme.user.email}`" class="trm-btn">
				联系我
				<TrmIcon :icon="theme.icons?.email" />
			</a>
		</div>
		<!-- action button end -->
	</template>
</template>
