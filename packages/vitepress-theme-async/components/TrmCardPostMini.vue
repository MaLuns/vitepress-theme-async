<script setup lang="ts">
import { formatDate } from "../utils/client";
import TrmSwichImgs from "./TrmSwichImgs.vue";
import defImage from "../assets/block.jpg";

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
