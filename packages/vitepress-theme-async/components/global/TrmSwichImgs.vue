<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
	defineProps<{
		src: Array<string | undefined> | string;
		attrs?: Record<string, string>;
	}>(),
	{
		src: () => [],
		attrs: () => ({}),
	},
);

const imgs = computed(() => {
	if (Array.isArray(props.src)) {
		return props.src.filter(Boolean);
	} else {
		return [props.src];
	}
});
</script>

<template>
	<template v-if="imgs.length === 2">
		<img class="trm-light-icon" v-bind="attrs" :src="imgs[0]" />
		<img class="trm-dark-icon" v-bind="attrs" :src="imgs[1]" />
	</template>
	<template v-else>
		<img v-if="imgs[0]" v-bind="attrs" :src="imgs[0]" />
	</template>
</template>
