<script setup>
import { ref } from 'vue'

defineProps({
	title: String,
	desc: String,
})

const show = ref(false)
</script>

<template>
	<div class="demo-block">
		<div class="demo-block__title">
			<slot name="title">
				<div>
					{{ title }}
				</div>
			</slot>
			<div class="demo-block__title-opt">
				<i class="btn" @click="show = !show" data-title="展开代码">
					{{ show ? '折叠代码' : '展开代码' }}
				</i>
			</div>
		</div>
		<div class="demo-block__desc" v-if="desc || $slots.desc">
			<slot name="desc">
				{{ desc }}
			</slot>
		</div>
		<div class="demo-block__main">
			<slot name="code"></slot>
		</div>
		<div v-show="show" class="demo-block__code">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="less">
.demo-block {
	border: 1px solid var(--vp-c-divider);
	margin: 28px auto;

	.trm-scroll-animation {
		opacity: 1 !important;
		transform: translateY(0) scale(1) !important;
	}

	&:hover {
		.btn {
			opacity: 1;
		}
	}

	&__title {
		padding: 16px 24px;
		font-size: 18px;
		font-weight: 600;
		font-family: v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		display: flex;
		align-items: center;
		justify-content: space-between;

		.btn {
			transition: opacity .3s;
			background-color: var(--vp-sidebar-bg-color);
			font-size: .8rem;
			line-height: 16px;
			display: inline-block;
			cursor: pointer;
			padding: 4px 8px;
			user-select: none;
			border-radius: 2px;
			opacity: 0;
		}
	}

	&__desc {
		padding: 0 24px 16px;
		font-size: 14px;

		p {
			padding: 0 !important;
			margin: 0 !important;
		}
	}

	&__main {
		padding: 0 24px 16px;

		li+li {
			margin-top: unset !important;
		}

		svg {
			display: unset;
		}
	}

	&__code {
		border-top: 1px solid var(--vp-c-divider);
		padding: 0 0;
	}

	div[class*='language-'] {
		margin: 0 !important;
		border-radius: 0 !important;
		background-color: transparent !important;
	}
}
</style>
