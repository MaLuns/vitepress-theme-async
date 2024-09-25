<script setup lang="ts">
import { formatDate } from "../../utils/shared";
import defImage from "../../assets/block.jpg";
import TrmSwichImgs from "./TrmSwichImgs.vue";

withDefaults(
	defineProps<{
		post: AsyncTheme.PostData;
		categoryUrl: string;
		sticky?: boolean;
	}>(),
	{
		sticky: false,
	},
);
</script>

<template>
	<div class="trm-blog-card trm-scroll-animation">
		<a :href="post.url" class="trm-cover-frame trm-anima-link">
			<template v-if="post.cover?.type === 'date'">
				<div class="trm-cover-date">
					<div class="trm-cover-day">{{ formatDate(post.date, "DD") }} %></div>
					<div class="trm-cover-month">{{ formatDate(post.date, "MM") }}</div>
				</div>
			</template>
			<template v-else-if="post.cover?.type === 'random'">
				<div class="trm-cover-img" data-random-img></div>
			</template>
			<template v-else-if="post.cover?.type">
				<TrmSwichImgs :src="post.cover.default || defImage" :attrs="{ alt: 'cover', class: 'no-fancybox' }" />
			</template>
		</a>
		<div v-if="sticky" class="trm-top">
			{{ $t("post.sticky") }}
		</div>
		<div class="trm-card-descr">
			<div class="trm-label trm-category trm-mb-20">
				<a :href="post.categories?.length ? categoryUrl + '?q=' + post.categories[0] : '#.'">
					{{ post.categories?.length ? post.categories[0] : $t("title.unclassified") }}
				</a>
			</div>
			<h5>
				<a :href="post.url" class="trm-anima-link">
					{{ post.title }}
				</a>
			</h5>
			<div class="trm-divider trm-mb-20 trm-mt-20"></div>
			<ul class="trm-card-data trm-label">
				<li>{{ formatDate(post.date, "YY-MM-DD") }}</li>
				<li>{{ formatDate(post.date, "HH:mm") }}</li>
			</ul>
		</div>
	</div>
</template>
<style lang="less">
.trm-blog-card {
	background-color: var(--theme-bg-color, #fcfcfe);
	position: relative;
	overflow: hidden;
	border-radius: var(--card-border-radius, 10px);
	margin-bottom: var(--card-bottom-card, 40px);
	box-shadow: var(--box-shadow2, 0 2px 4px -2px rgba(0, 0, 0, 0.15));

	.trm-top {
		position: absolute;
		top: -18px;
		right: -36px;
		background: var(--card-top-bg-color);
		color: var(--card-top-color);
		padding: 30px 30px 4px;
		transform: rotate(45deg);
		font-size: 12px;
	}

	.trm-cover-frame {
		display: block;
		position: relative;
		padding-bottom: 60%;
		overflow: hidden;

		.trm-cover-date,
		.trm-cover-img,
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			transform: scale(1.05);
			transition: all 0.4s ease-in-out;
		}

		.trm-cover-date {
			background-color: var(--card-cover-bg-color, #f3f3f3);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			line-height: 1.2;
			font-family: fantasy;

			.trm-cover-day {
				font-size: 100px;
				font-weight: 800;
			}

			.trm-cover-month {
				font-size: 20px;
			}
		}

		.trm-cover-img {
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}
	}

	.trm-card-descr {
		padding: var(--card-padding, 40px);

		h5 {
			a {
				font-size: 1.1rem;
				white-space: nowrap;
				text-overflow: ellipsis;
				width: 100%;
				display: inline-block;
				overflow: hidden;
			}
		}

		.trm-category {
			a {
				opacity: 0.6;
				transition: all 0.4s ease-in-out;

				&:hover {
					opacity: 1;
					color: var(--primary, #afb42b);
				}
			}
		}
	}

	&:hover {
		.trm-cover-frame {
			.trm-cover-img,
			img {
				transform: scale(1);
			}
		}
	}
}
</style>
