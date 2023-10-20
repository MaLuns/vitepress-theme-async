<script setup lang="ts">
import { useData, withBase } from "vitepress";
import { formatDate } from "../utils/client";
import { usePageUrl } from "../composables";
import TrmSwichImgs from "./TrmSwichImgs.vue";
import defImage from "../assets/block.jpg";

defineProps<{
	post: AsyncTheme.PostData;
}>();

const { page } = useData();
const pageUrl = usePageUrl();
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
		<div v-if="page.frontmatter.index && post.sticky && post.sticky > 0" class="trm-top">置顶</div>
		<div class="trm-card-descr">
			<div class="trm-label trm-category trm-mb-20">
				<a :href="post.categories?.length ? withBase(pageUrl.categorys + '/' + post.categories[0]) : '#.'">
					{{ post.categories?.length ? post.categories[0] : "未设置" }}
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
