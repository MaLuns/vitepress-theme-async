<script setup lang="ts">
import { formatDate } from "../../utils/shared";
import TrmSwichImgs from "./TrmSwichImgs.vue";
import defImage from "../../assets/block.jpg";

defineProps<{
	post: AsyncTheme.PostData;
}>();
</script>
<template>
	<div class="trm-older-publications-card trm-scroll-animation trm-active-el">
		<div class="trm-older-publication">
			<a class="trm-op-top trm-anima-link" :href="post.url">
				<span class="trm-op-cover">
					<TrmSwichImgs :src="post?.cover?.default || defImage" :attrs="{ alt: 'cover', class: 'no-fancybox' }" />
				</span>
				<h6 class="trm-op-title">
					{{ post.title }}
				</h6>
			</a>
			<div class="trm-divider trm-mb-15 trm-mt-20"></div>
			<ul class="trm-card-data trm-label">
				<li>{{ formatDate(post.date, "YY-MM-DD") }}</li>
				<li>{{ formatDate(post.date, "HH:mm") }}</li>
				<li>
					{{ post.categories?.length ? post.categories[0] : $t("title.unclassified") }}
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="less">
.trm-older-publications-card {
	background-color: var(--theme-bg-color, #fcfcfe);
	position: relative;
	overflow: hidden;
	border-radius: var(--card-border-radius, 10px);
	padding: var(--card-padding, 40px);
	margin-bottom: var(--card-bottom-card, 40px);
	box-shadow: var(--box-shadow2, 0 2px 4px -2px rgba(0, 0, 0, 0.15));

	.trm-older-publication {
		margin-bottom: var(--card-bottom-card, 40px);

		.trm-op-top {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.trm-op-cover {
				width: 30%;
				height: 50px;
				margin-right: 20px;
				border-radius: 5px;
				position: relative;
				overflow: hidden;

				img {
					transform: scale(1.1);
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
					border-radius: 5px;
					transition: all 0.4s ease-in-out;
				}
			}

			.trm-op-title {
				width: 70%;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -moz-box;
				-moz-box-orient: vertical;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				line-clamp: 2;
				box-orient: vertical;
				transition: all 0.4s ease-in-out;
			}

			&:hover {
				.trm-op-cover {
					img {
						transform: scale(1);
					}
				}

				.trm-op-title {
					color: var(--primary, #afb42b);
				}
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

		.trm-card-data {
			padding: 0;
			margin: 0;
			display: flex;

			li {
				list-style-type: none;
				padding-right: 20px;
				position: relative;
				opacity: 0.6;

				&:after {
					content: "•";
					position: absolute;
					top: 0;
					right: 6px;
					opacity: 0.5;
				}

				&:last-child {
					&:after {
						display: none;
					}
				}
			}
		}

		&:last-child {
			margin-bottom: 0;
		}
	}
}
</style>
