<script setup>
	import DemoTrmPortfolio from '../.vitepress/components/demo/DemoTrmPortfolio.vue'
	import DemoTrmCardLink from '../.vitepress/components/demo/DemoTrmCardLink.vue'
	import DemoTrmCardCategorie from '../.vitepress/components/demo/DemoTrmCardCategorie.vue'
	import DemoTrmCardPost from '../.vitepress/components/demo/DemoTrmCardPost.vue'
	import DemoTrmCardPostMini from '../.vitepress/components/demo/DemoTrmCardPostMini.vue'
	import DemoTrmDividerTitle from '../.vitepress/components/demo/DemoTrmDividerTitle.vue'
	import DemoTrmTimeline from '../.vitepress/components/demo/DemoTrmTimeline.vue'
	import DemoTrmGallery from '../.vitepress/components/demo/DemoTrmGallery.vue'
</script>

# 全局组件

默认情况下`不会注册`到全局组件中，需要通过 `globalComponents` 字段配置是否需要将组件注册为全局组件使用，设置为 `true` 默认会将所有组件注册为全局组件，也可一传递组件名称 `['TrmDividerTitle']` 选择性的注册。

## 示例

主题内置全局组件使用示例。

<DemoBlock title="友链卡片" desc="用于友链列表卡片展示。">
	<template #code>
		<DemoTrmCardLink style="--card-bottom-card:0;"/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmCardLink.vue
</DemoBlock>

<DemoBlock title="分类卡片" desc="用于展示分类信息和总数量。">
	<template #code>
		<DemoTrmCardCategorie style="--card-bottom-card:0;"/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmCardCategorie.vue
</DemoBlock>

<DemoBlock title="文章卡片" desc="首页文章分页卡片信息展示。">
	<template #code>
		<DemoTrmCardPost style="--card-bottom-card:0;"/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmCardPost.vue
</DemoBlock>

<DemoBlock title="文章卡片 Mini" desc="文章详情里山下篇卡片信息展示。">
	<template #code>
		<DemoTrmCardPostMini style="--card-bottom-card:0;"/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmCardPostMini.vue
</DemoBlock>

<DemoBlock title="分割线" desc="文章详情里山下篇卡片信息展示。">
	<template #code>
		<DemoTrmDividerTitle/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmDividerTitle.vue
</DemoBlock>

<DemoBlock title="时间轴" desc="文章详情里山下篇卡片信息展示。">
	<template #code>
		<DemoTrmTimeline/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmTimeline.vue
</DemoBlock>

<DemoBlock title="相册组件" desc="用于相册页显示图片合集。">
	<template #code>
		<DemoTrmPortfolio style="--card-bottom-card:0;"/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmPortfolio.vue
</DemoBlock>

<DemoBlock title="相册详情" desc="默认使用 fjGallery 插件进行排版。">
	<template #code>
		<DemoTrmGallery style="--card-bottom-card:0;"/>
	</template>

<<< @/../docs/.vitepress/components/demo/DemoTrmGallery.vue
</DemoBlock>
