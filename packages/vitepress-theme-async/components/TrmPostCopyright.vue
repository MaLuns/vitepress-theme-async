<script setup lang="ts">
import { AsyncThemeConfig } from "types/index";
import { useData } from "vitepress";

const { theme, frontmatter, page } = useData<AsyncThemeConfig>();
let license = theme.value.creative_commons?.license || "by-nc-sa";
let ccVersion = theme.value.creative_commons?.license == "zero" ? "1.0" : "4.0";
let ccPrefix = theme.value.creative_commons?.license == "zero" ? "publicdomain" : "licenses";
let ccURL = "https://creativecommons.org/" + ccPrefix + "/" + license + "/" + ccVersion + "/" + theme.value.creative_commons?.language || "deed.zh";
</script>
<template>
	<ul v-if="theme.creative_commons?.post" class="trm-post-copyright">
		<li class="trm-post-copyright-author">
			<strong>本文作者：</strong>
			{{ frontmatter.author || theme.author }}
		</li>
		<li class="trm-post-copyright-link">
			<strong>本文链接：</strong>
			<a id="original-link" :href="page.filePath" :title="page.title">
				{{ page.filePath }}
			</a>
		</li>
		<li class="trm-post-copyright-license">
			<strong>版权声明：</strong>
			本博客所有文章除特别声明外，均默认采用
			<a :href="ccURL" target="_blank" rel="noopener" :title="`CC ${license.toUpperCase() + ' ' + ccVersion}`">CC {{ license.toUpperCase() + " " + ccVersion }}</a>
			许可协议。
		</li>
	</ul>
</template>
