<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
	defineProps<{
		src: Array<string | undefined>;
		attrs?: Record<string, string>;
	}>(),
	{
		src: () => [],
		attrs: () => ({}),
	},
);

const imgs = computed(() => props.src.filter(Boolean));
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
