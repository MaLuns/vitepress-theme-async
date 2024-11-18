<script setup lang="ts">
import { withBase } from "vitepress";

withDefaults(
	defineProps<{
		src: string
		cover: string
		title: string
		desc?: string
	}>(),
	{
		src: '',
		cover: '',
		title: '',
		desc: ''
	},
);
</script>

<template>
	<a :href="withBase(src)" class="trm-portfolio-item trm-scroll-animation trm-active-el">
		<div class="trm-cover-frame" style="padding-bottom:60%">
			<img class="trm-cover no-fancybox" :src="withBase(cover)" data-tag="post-image" loading="lazy" onload="this.onload=null;this.style.opacity=1;" />
		</div>
		<div class="trm-item-description">
			<div>
				<h6>{{ title }}</h6>
				<p v-if="desc" style="margin: 5px 0 0;font-size: .9rem;opacity: .8;">{{ desc }}</p>
			</div>
		</div>
	</a>
</template>
<style lang="less">
.trm-portfolio-item {
	display: block;
	position: relative;
	overflow: hidden;
	margin-bottom: var(--card-bottom-card, 40px);
	border-radius: var(--card-border-radius, 10px);
	transition:
		all 0.4s ease-in-out,
		box-shadow 0.3s ease;
	box-shadow: var(--box-shadow);
	background-color: var(--theme-bg2-color, #f4f5f7);

	.trm-cover-frame {
		padding-bottom: 100%;
		position: relative;
		overflow: hidden;

		.trm-cover {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			transform: scale(1.05);
			margin: 0;
			transition: all .4s ease-in-out;
			opacity: 0;
		}
	}

	.trm-item-description {
		background-color: var(--theme-bg-color, #fcfcfe);
		position: absolute;
		width: 100%;
		padding: 20px 40px;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: var(--box-shadow);
		opacity: 0;
		transform: translateY(30px);
		transition: all .4s ease-in-out;

		.trm-zoom-icon {
			background-color: var(--primary, #afb42b);
			border-radius: 50%;
			color: #fcfcfe;
			width: 40px;
			height: 40px;
			font-size: 12px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	&:hover {
		box-shadow: var(--box-shadow-hover);

		.trm-cover-frame {
			.trm-cover {
				transform: scale(1);
			}
		}

		.trm-item-description {
			opacity: 1;
			transform: translateY(0);
		}
	}

	&:focus {
		outline: inherit;
	}

	&.trm-demo-card {
		.trm-cover-frame {
			padding-bottom: 0;

			.trm-cover {
				position: relative;
			}
		}
	}
}

@media (max-width: 992px) {
	.trm-portfolio-item .trm-item-description {
		transform: none;
		opacity: 1;
	}
}
</style>
