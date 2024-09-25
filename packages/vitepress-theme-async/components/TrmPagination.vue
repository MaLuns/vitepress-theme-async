<script setup lang="ts">
import { computed } from "vue";

const emits = defineEmits<{ "update:pageIndex": [e: number] }>()

const props = withDefaults(
	defineProps<{
		total: number;
		pageIndex: number;
		size?: number;
	}>(),
	{
		total: 0,
		size: 10,
	},
);

const pageList = computed(() => {
	const count = Math.ceil(props.total / props.size);
	if (count > 5) {
		const list = [1, props.pageIndex - 1, props.pageIndex, props.pageIndex + 1, count].filter(i => i > 0 && i <= count);
		return [...new Set(list)];
	} else {
		return new Array(count).fill(null).map((_v, i) => i + 1);
	}
});

const onChangePageNumber = (current: number) => emits('update:pageIndex', current)
</script>

<template>
	<div v-if="pageList.length > 1" class="trm-pagination">
		<template v-for="(page, i) in pageList" :key="page">
			<span v-if="i > 0 && page - 1 !== pageList[i - 1]" class="space">…</span>
			<span v-if="page === props.pageIndex" class="page-number current">{{ page }}</span>
			<template v-else>
				<slot>
					<a class="page-number" @click="onChangePageNumber(page)">{{ page }}</a>
				</slot>
			</template>
		</template>
	</div>
</template>
<style lang="less">
.trm-pagination {
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	margin-bottom: var(--card-bottom-card);

	&:first-child {
		margin-left: 0;
	}

	&:last-child {
		margin-right: 0;
	}

	a,
	span {
		display: inline-block;
		height: 36px;
		width: 36px;
		line-height: 36px;
		font-weight: 700;
		text-align: center;
		border-radius: 6px;
		transition: all 0.4s ease-in-out;
	}

	a {
		cursor: pointer;

		&:hover {
			opacity: 1;
			color: var(--primary, #afb42b);
		}
	}

	span.current {
		color: #fcfcfe;
		background-color: var(--primary, #afb42b);
	}
}
</style>
