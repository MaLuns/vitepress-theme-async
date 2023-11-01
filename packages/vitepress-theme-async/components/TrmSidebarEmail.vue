<script setup lang="ts">
import { useTheme } from "../composables/index";
import TrmIconEmail from "./icons/TrmIconEmail.vue";
const theme = useTheme();
</script>
<template>
	<template v-if="theme.user?.email">
		<div class="trm-divider trm-mb-40 trm-mt-40"></div>
		<!-- action button -->
		<div class="text-center">
			<a :href="`mailto:${theme.user.email}`" class="trm-btn">
				{{ $t("site.contactMe") }}
				<TrmIconEmail />
			</a>
		</div>
		<!-- action button end -->
	</template>
</template>
