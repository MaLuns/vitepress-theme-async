# 页面配置

本主题默认支持并使用以下页面类型。

## Frontmatter

在 `md` 文件中除了 vitepress 默认可使用字段以外，主题新增了一些可使用配置。

- `date`：文章时间
- `sticky`：首页排序值，值越大越靠前。
- `banner`：文章页横幅背景，参考全局横幅配置。
- `cover`：文章封面图，可为字符串或数组或对象，如果数组长度为 2 则会根据主题自动切换。
- `singleColumn`：单栏显示详情页，为 true 时生效。
- `author`：文章作者，未配置时取全局配置。
- `categories`：文章分类，仅支持单个。
- `tags`：文章标签，支持多个。

```yaml
---
sticky: 0
banner:
  type: img
  bgurl: https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg
  bannerText: Hi my new friend!
cover: https://www.logosc.cn/uploads/resources/2018/11/29/1543459457_thumb.jpg
author: 张三
singleColumn: true
categories: 分类一
tags: [标签一, 标签二]
---
```

### 摘要

在文章中添加 `<!--more-->` 标签，在此之前的内容将会视为摘要部分。

```yaml
---
title: Hello Theme Async
date: 2022-09-21 15:08:29
cover: [https://vitepress-theme-async.imalun.com/imgs/demo.png]
sticky: 1
categories: 分类二
---

Welcome to [vitepress-theme-async](https://vitepress-theme-async.imalun.com/).

<!--more-->  // [!code ++]
```

## 归档页 Archives

在 `layout` 为 `archives` 视为归档页。

```md [archives.md]
---
title: 归档
layout: archives // [!code ++]
date: 2019-11-20 10:16:09
---
```

为确保其他页跳转归档页(标签页,分类页)正常，需要配置 `归档页` 对应地址。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
	page: {// [!code ++]
			archives: '/archives',// [!code ++]
			categories: '/categories',// [!code ++]
			tags: '/tags',// [!code ++]
		}// [!code ++]
	},// [!code ++]
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#BuiltPageConfig
:::

## 标签页 Tags

在 `layout` 为 `tags` 视为标签页。

```md [tags.md]
---
title: 标签页
layout: tags // [!code ++]
date: 2019-11-20 10:16:09
---
```

## 分类页 Categories

在 `layout` 为 `categories` 视为分类页。

```md [categories.md]
---
title: 分类页
layout: categories // [!code ++]
date: 2019-11-20 10:16:09
---
```

## 友接页 Links

在 `layout` 为 `links` 时为友链页，页面会根据 `links` 配置渲染列表。

::: code-group

```md [link.md]
---
title: 友链
layout: links // [!code ++]
date: 2019-11-20 10:16:09
banner:
  bannerText: A link to a friend's website
  bannerTitle: 莫愁前路无知己，<br>天下谁人不识君。
---
```

```ts [links.ts]
export default [
	{
		name: "白云苍狗",
		url: "https://www.imalun.com/",
		image: "https://www.imalun.com/images/avatar.jpg",
		desc: "醒，亦在人间；梦，亦在人间"
	}
]
```

```ts [config.ts]
import links from './links' // [!code ++]

export default defineConfig({
	themeConfig: {
		links: links // [!code ++]
	},
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#Links

:::

## 关于页 About

在 `layout` 为 `about` 时，根据配置生成页面。

::: code-group

```md [about.md]
---
title: 关于我
layout: about // [!code ++]
date: 2019-11-20 10:16:09
---
```

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		about: {  // [!code ++]
			title: "如果一切都是镜花水月，那就让这万物走向终结。如果一切皆是命中注定，那就让这世界消失殆尽。",  // [!code ++]
			introduction: "大家好，我是 <strong>Async</strong>，很高兴您能在浩瀚如烟的互联网世界里发现这个博客，更感谢您能够饶有兴致地浏览这个页面。建立这个 Blog 是出于兴趣爱好，我将在此分会分享一些学习笔记，可能还会分享少许图片、视频以及其他有趣东西的链接。", // [!code ++]
			blog: `<ul class="trm-list"> <li>程序：Vitepress </li> <li>主题：vitepress-theme-async </li> </ul>`, // [!code ++]
			privacy: "本网站不会追踪访客行为，且不要求访客提供任何敏感信息（比如真实姓名、身份证号码、手机号等），因而也不存在任何隐私泄漏问题。访客参与评论，必须遵守法律法规和基本道德规范，文明礼貌。严禁发布任何有关淫秽、反动、暴力、博彩、恐吓、低俗的内容或违法信息，在尊重言论自由的同时请保持和平与理性。请勿对他人采取不友好的评论或其它过激行为。", // [!code ++]
		}, // [!code ++]
	},
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#AboutPageConfig
:::

## 404 Not Found

404 页面不需要额外配置即生效，可在配置中替换 404 文案和跳转信息。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		notFound: {
			text: '从前有座山，山里有座庙，庙里有个页面，现在找不到...', // [!code ++]
		},
	},
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#NotFoundConfig
:::

## 自定义页面 Customize Page

像上面 友链、关于等页面也属于自定义页面，主要区别是它们可以通过约定配置，就可以输出主题内置页面样式，当然如果您想要个性化这些页面，也可以通过自定也页面覆盖主题的默认行为。

在 `layout` 为 `custom` 时为自定页面，内容区域根据 `.md` 内容直接生成，但是会保留顶部、侧栏、横幅、页脚等位置信息。如果不想要侧栏信息可以设置 `singleColumn`。

```md [custom.md]
---
title: 自定义页面
layout: custom // [!code ++]
date: 2019-11-20 10:16:09
singleColumn: true  // [!code ++]
---
```
