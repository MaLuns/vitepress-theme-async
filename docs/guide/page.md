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
- `pageClass`：将额外的类名称添加到特定页面。
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
	page: {
			archives: '/archives',// [!code ++]
			categories: '/categories',// [!code ++]
			tags: '/tags',// [!code ++]
		}
	},
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

links 也支持通过 api 加载数据，返回数据格式需要与定义类型保持一致。

```ts [config.ts]
import links from './links' // [!code --]

export default defineConfig({
	themeConfig: {
		links: links, // [!code --]
		links: 'https://api.xx.xx' // [!code ++]
	},
});
```

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

### 相册页

`TrmPortfolio` 相册组件，`TrmPortfolio` 为主题内置 [全局组件](https://vitepress-theme-async.imalun.com/guide/config#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6)，默认未开启。

```md
---
title: 相册库
layout: custom  // [!code ++]
single_column: true
---

<div class="row">
	<div class="col-lg-4">
		<TrmPortfolio src="/gallery/wallpaper" cover="https://img1.wallspic.com/previews/5/0/1/6/6/166105/166105-pang_ke-zi_se_de-zi_luo_lan_se-fen_hong_se-pin_hong_se-500x.jpg" title="壁纸" desc="收藏的一些壁纸"/>  // [!code ++]
	</div>
	<div class="col-lg-4">
		<TrmPortfolio src="/gallery/wallpaper" cover="https://img1.wallspic.com/previews/8/8/8/0/7/170888/170888-de_fang_zi-chuang_kou-zhu_zhai_qu-mu-wu_ding-500x.jpg" title="壁纸" desc="收藏的一些壁纸"/>
	</div>
	<div class="col-lg-4">
		<TrmPortfolio src="/gallery/wallpaper" cover="https://img3.wallspic.com/previews/7/4/8/8/6/168847/168847-man_de_nu_hai-ka_tong-ren_men_zai_zi_ran_jie-kuai_le_de-yang_guang-500x.jpg" title="壁纸" desc="收藏的一些壁纸"/>
	</div>
</div>

```

### 相册详情页

`TrmGallery` 相册详情组件，可以通过 `srcs` 传入图片列表。`TrmGallery` 为主题内置 [全局组件](https://vitepress-theme-async.imalun.com/guide/config#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6)，默认未开启。

```md
---
title: 壁纸
layout: custom
single_column: true
---

<script setup>
const list = [
	'https://img2.wallspic.com/previews/7/6/8/1/7/171867/171867-wu_kong-chao_ji_sai_ya_ren-sai_ya_ren-zamasu-long_zhu-500x.jpg',
	'https://img3.wallspic.com/previews/2/0/1/8/6/168102/168102-yi_shu-ka_tong-mian_bu_biao_qing-kuai_le_de-ji_qie-500x.jpg',
	'https://img2.wallspic.com/previews/2/6/4/3/7/173462/173462-qi_fen-zi_se_de-zi_ran_jing_guan-yu_hui-de_ping_xian-500x.jpg',
	'https://img2.wallspic.com/previews/3/3/9/1/3/131933/131933-mo_xing-xiao_jie-huang_se_de-nu_hai-fa_xing-500x.jpg',
	'https://img1.wallspic.com/previews/8/3/4/6/2/126438/126438-wei_lai_zhu_yi-shu_ma_yi_shu-jie_duan-zi_ben_shi-yi_shu-500x.jpg',
	'https://img2.wallspic.com/previews/0/1/5/0/7/170510/170510-guang-azure-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-500x.jpg',
	'https://img2.wallspic.com/previews/3/6/9/6/5/156963/156963-yi_shu-qi_fen-yu_hui-shou_shi-ren_men_zai_zi_ran_jie-500x.jpg',
	'https://img1.wallspic.com/previews/0/9/3/5/6/165390/165390-qi_fen-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-tian_wen_xue_dui_xiang-500x.jpg',
	'https://img3.wallspic.com/previews/2/8/6/1/7/171682/171682-yi_kuai-xing_zhi-ye_ti-yi_shu-shui_xia-500x.jpg',
	'https://img1.wallspic.com/previews/7/1/9/9/89917/89917-bo_xi_ta_nuo-an_zhuang_de_feng_jing-cheng_shi-suo_lun_tuo-shan_zhan-500x.jpg',
	'https://img1.wallspic.com/previews/6/2/3/5/6/165326/165326-pang_ke2077-pang_ke-qi_fen-xing_zhi-zi_se_de-500x.jpg',
	'https://img2.wallspic.com/previews/8/9/4/5/6/165498/165498-ka_tong-tao-pin_hong_se-zhang_zhang_de_tou_fa-ji_qie-500x.jpg',
	'https://img3.wallspic.com/previews/5/7/4/2/7/172475/172475-yi_shu-tao-tou_fa-ka_tong-500x.jpg',
	'https://img2.wallspic.com/previews/5/0/9/0/70905/70905-hai_yang-ma_er_dai_fu-tian_kong-du_jia_cun-huan_jiao-500x.jpg',
	'https://img3.wallspic.com/previews/4/3/4/8/6/168434/168434-xing_zhi-zi_ran_jing_guan-dan_huang-shui_dao-zhi_bei-500x.jpg',
	'https://img2.wallspic.com/previews/6/5/4/5/6/165456/165456-giy_fu_gang-e_mo_sha_shoukimetsu_no_yaiba-shan_zi_de_yi_shu-zi_se_de-dian_lan_se_de-500x.jpg',
	'https://img1.wallspic.com/previews/5/4/0/4/7/174045/174045-jian_ying-qi_fen-ren_men_zai_zi_ran_jie-tian_wen_xue_dui_xiang-yi_shu-500x.jpg',
	'https://img1.wallspic.com/previews/9/3/1/6/5/156139/156139-feng_jing_hua-yi_shu-shu_ma_yi_shu-qi_fen-sheng_tai_qu-500x.jpg',
	'https://img2.wallspic.com/previews/7/6/4/5/7/175467/175467-wo_de_xue_shu_jie_de_ying_xiong-tao-yi_shu-ka_tong-azure-500x.jpg',
	'https://img1.wallspic.com/previews/3/7/0/0/7/170073/170073-liang_ge_ling-ka_tong-shou_shi-chuang_zao_xing_de_yi_shu-hong_se_de-500x.jpg',
	'https://img1.wallspic.com/previews/1/8/3/6/6/166381/166381-shi_zi-xin_ba-bai_se_shi_zi-hu_xu-mao_ke-500x.jpg',
	'https://img3.wallspic.com/previews/4/2/2/3/7/173224/173224-ri_luo-shui_zi_yuan-qi_fen-yu_hui-zi_se_de-500x.jpg',
	'https://img1.wallspic.com/previews/7/5/7/9/6/169757/169757-ji_bo_li_de_bo_wu_guan-zi_ran_jing_guan-yi_shu-ji_yun-500x.jpg',
	'https://img1.wallspic.com/previews/5/2/0/6/7/176025/176025-qi_fen-tian_wen_xue_dui_xiang-yi_shu-dian_lan_se_de-yuan_quan-500x.jpg',
	'https://img3.wallspic.com/previews/6/5/8/1/4/141856/141856-hen_ku_de-hui_hua-yu_yan_jing_tou-zhai_nan-tu_xing_she_ji-500x.jpg',
	'https://img1.wallspic.com/previews/2/1/6/5/6/165612/165612-kimetsu_no_yaiba-e_mo_sha_shoukimetsu_no_yaiba-tao-tou_fa-wai_tao-500x.jpg',
	'https://img3.wallspic.com/previews/5/1/0/2/4/142015/142015-feng_ge-ka_ka_xi_qi_mu-huo_ying_ren_zhe-tu_xing_she_ji-shi_jue_yi_shu-500x.jpg',
	'https://img1.wallspic.com/previews/8/8/7/8/5/158788/158788-e_mo_sha_shoukimetsu_no_yaiba-shnen_man_hua-tao-ka_tong-azure-500x.jpg',
]
</script>

<div class="trm-card">
	<TrmGallery :srcs="list" />  // [!code ++]
</div>
```
