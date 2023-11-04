<script setup lang="ts">
import { computed } from "vue";
import { diffDate } from "../utils/shared";
import { useTheme } from "../composables";

const props = defineProps<{ date: string | number }>();
const theme = useTheme();

const diffDays = computed(() => diffDate(props.date, false));
const show = computed(() => diffDays.value >= (theme.value.noticeOutdate?.limitDay ?? 365));
</script>

<template>
	<div v-if="show" class="trm-outdate-notice" :class="theme.noticeOutdate?.style">
		{{ $t("post.noticeOutdateMessage", diffDays.toString()) }}
	</div>
</template>

<style lang="less">
.trm-outdate-notice {
	position: relative;
	padding: 0.5em 1em;
	border-radius: 4px;
	font-size: 0.9rem;
	background-color: var(--notice-outdate-bg);
	color: var(--notice-outdate-color);

	&.flat {
		border-radius: 0;
		border-left: 4px solid var(--notice-outdate-border);
	}
}
</style>
