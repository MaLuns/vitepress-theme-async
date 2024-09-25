<script setup lang="ts">
import { formatDate } from "../../utils/shared";

type DataItem = {
	url: string;
	title: string;
	date?: string | number;
	excerpt?: string;
};

withDefaults(defineProps<{ list: DataItem[]; excerpt?: boolean }>(), {
	excerpt: false,
});
</script>
<template>
	<div class="trm-timeline">
		<div v-for="item in list" class="trm-timeline-item trm-scroll-animation" :key="item.url">
			<div class="trm-timeline-mark-light"></div>
			<div class="trm-timeline-mark"></div>
			<div class="trm-a trm-timeline-content">
				<div class="trm-card-header">
					<div class="trm-left-side">
						<h6>
							<a :href="item.url" class="trm-anima-link">
								{{ item.title }}
							</a>
						</h6>
						<div v-if="item.date" class="trm-text-sm trm-accent-color trm-mt-15">
							<ul class="trm-card-data trm-label">
								<li class="trm-accent-color">
									{{ formatDate(item.date, "YY-MM-DD") }}
								</li>
								<li class="trm-accent-color">
									{{ formatDate(item.date, "HH:mm") }}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div v-if="excerpt && item.excerpt" class="trm-publication trm-mt-15" v-html="item.excerpt"></div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
.trm-timeline {
	position: relative;
	padding: 0 10px;

	&::before {
		content: "";
		position: absolute;
		top: 20px;
		left: 10px;
		height: calc(100% - 20px);
		width: 4px;
		background: var(--theme-bg-color, #fcfcfe);
	}

	.trm-timeline-item {
		position: relative;

		.trm-timeline-mark-light {
			background: var(--primary-weak, #afb42b);
			position: absolute;
			top: 15px;
			left: -12px;
			width: 26px;
			height: 26px;
			opacity: 0;
			border-radius: 50%;
			transition: all 0.4s ease-in-out;
		}

		.trm-timeline-mark {
			position: absolute;
			top: 18px;
			left: -8px;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			border: solid 3px var(--primary, #afb42b);
			background: var(--theme-bg-color, #fcfcfe);
		}

		&:hover {
			.trm-timeline-mark-light {
				animation: puls 1s infinite;
			}
		}
	}

	.trm-timeline-content {
		border-radius: var(--card-border-radius, 10px);
		position: relative;
		margin-left: 45px;
		background: var(--theme-bg-color, #fcfcfe);
		padding: var(--card-padding, 40px);
		margin-bottom: var(--card-bottom-card, 40px);
		box-shadow: var(--box-shadow2, 0 2px 4px -2px rgba(0, 0, 0, 0.15));

		&:after {
			height: 10px;
			width: 10px;
			background-color: var(--theme-bg-color, #fcfcfe);
			transform: rotate(-135deg);
			content: "";
			position: absolute;
			top: 23px;
			left: -5px;
			border-top-right-radius: 50%;
		}

		.trm-card-header {
			width: 100%;
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			flex-wrap: wrap;

			.trm-right-side {
				margin-bottom: 15px;

				.trm-date {
					color: var(--theme-color, #00283a);
					margin-left: auto;
					background: var(--theme-bg2-color, #f4f5f7);
					padding: 5px 15px;
					border-radius: 15px;
					font-size: 10px;
				}
			}
		}

		.trm-publication {
			> p:last-of-type {
				margin-bottom: 0;
			}
		}

		&.less {
			margin-left: 35px;
			padding: 20px;
		}
	}

	@media (max-width: 768px) {
		padding: 0;

		&::before {
			content: unset;
		}

		.trm-timeline-content {
			margin-left: 0;

			&::after {
				content: unset;
			}
		}

		.trm-timeline-item {
			.trm-timeline-mark-light,
			.trm-timeline-mark {
				display: none;
			}
		}
	}
}
</style>
