<script setup lang="ts">
import { useData } from "vitepress";
import { onMounted, ref } from "vue";

const { theme, frontmatter, page } = useData<AsyncThemeConfig>();
const license = theme.value.creativeCommons?.license || "by-nc-sa";
const ccVersion = theme.value.creativeCommons?.license == "zero" ? "1.0" : "4.0";
const ccPrefix = theme.value.creativeCommons?.license == "zero" ? "publicdomain" : "licenses";
const ccURL = "https://creativecommons.org/" + ccPrefix + "/" + license + "/" + ccVersion + "/" + theme.value.creativeCommons?.language || "deed.zh-hans";
const link = `<a href="${ccURL}" target="_blank" rel="noopener" title="CC ${license.toUpperCase() + " " + ccVersion}">CC ${license.toUpperCase() + " " + ccVersion}</a>`;

const olink = ref<string>('')
onMounted(() => {
	olink.value = page.value.frontmatter.originalLink ?? window.location.href
})
</script>
<template>
	<ul v-if="theme.creativeCommons?.post" class="trm-post-copyright">
		<li class="trm-post-copyright-author">
			<strong>{{ $t("post.copyright.author") }}{{ $t("symbol.colon") }}</strong>
			<span>{{ frontmatter.author || theme.author }}</span>
		</li>
		<li class="trm-post-copyright-link">
			<strong>{{ $t("post.copyright.link") }}{{ $t("symbol.colon") }}</strong>
			<a id="original-link" :href="olink" :title="page.title">
				{{ olink }}
			</a>
		</li>
		<li class="trm-post-copyright-license">
			<strong>{{ $t("post.copyright.licenseTitle") }}{{ $t("symbol.colon") }}</strong>
			<span v-html="$t('post.copyright.licenseContent', link)"></span>
		</li>
	</ul>
</template>
<style lang="less">
.trm-post-copyright {
	list-style: none;
	font-size: 0.9rem;
	padding: 0.5rem 1rem;
	border-left: 4px solid var(--primary, #afb42b);
	background-color: var(--body-color-5, #7b7b7d);
	list-style: none;
	word-break: break-all;
	position: relative;
	overflow: hidden;
	line-height: 2;

	li {
		list-style: none;
	}

	a {
		color: var(--primary, #afb42b);
	}
}
</style>
