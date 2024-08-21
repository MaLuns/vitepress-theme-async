# 主题配置

## 文章目录 Posts

默认情况下，主题默认会在您指定的根目录下取去寻找 `posts` 目录，并将目录下的所有 `.md` 文件视为文章进行加载。可修改 `postDir` 自定义文章目录

```ts
themeConfig: {
	postDir: 'posts',
}
```

::: warning 注意

vitepress 中存在根目录和源目录，默认情况下两者是相等的，如果您对 `srcDir` 进行了修改，则也同时需要对 `postDir` 进行修改。

了解根目录和源目录的区别 [请看这里](https://vitepress.dev/guide/routing#root-and-source-directory)

:::

## 语言 Language

主题内置文本语言切换，支持 `zh-Hans` 和 `en`，修改 `vitepress` 配置中 `lang` 即可切换。

```ts
export default defineConfig({
	lang: "en",
});
```

可以通过 `languages` 字段配置，覆盖默认文字。

```ts
/** 语言文件 */
interface Language {
	site: {
		title: string;
		webmaster: string;
		domain: string;
		avatar: string;
		describe: string;
		ruleText: string;
		contactMe: string;
	};

	// 页面模块小标题
	title: {
		links: string;
		newPublish: string;
		comment: string;
		author: string;
		blog: string;
		privacy: string;
		more: string;
		allArchives: string;
		yearArchives: string;
		otherArticles: string;
		unclassified: string;
	};

	// 菜单
	menu: {
		home: string;
		categorys: string;
		archives: string;
		tags: string;
		links: string;
		about: string;
	};

	favicon: {
		showText: string;
		hideText: string;
	};

	// 文章内容
	post: {
		sticky: string;
		rewardComment: string;
		noticeOutdateMessage: string;
		copyright: {
			author: string;
			link: string;
			licenseTitle: string;
			licenseContent: string;
		};
	};

	// 按钮块
	rightside: {
		search: string;
		backToTop: string;
		toc: string;
		theme: {
			dark: string;
			light: string;
		};
		aside: {
			open: string;
			exit: string;
		};
		readMode: {
			open: string;
			exit: string;
		};
	};

	// 页脚
	footer: {
		powered: string;
		theme: string;
		tips: string;
		day: string;
		hour: string;
		minute: string;
		seconds: string;
	};

	// 符号
	symbol: {
		comma: string;
		period: string;
		colon: string;
	};
}
```

## 主题模式 ThemeMode

参考 vitepress 配置。

## 搜索 Search

参考 vitepress 配置，目前仅支持本地搜索

## 网站图标 Favicon

用于 logo、icon、安装图标配置，通过 `favicon` 字段配置。

```ts
interface FaviconConfig {
	/**
	 * logo
	 */
	logo?: string;
	/**
	 *  dark 下使用
	 */
	darkLogo?: string;
	/**
	 * 网站图标
	 */
	icon16?: string;
	/**
	 * 网站图标
	 */
	icon32?: string;
	/**
	 * iOS 添加到主屏幕使用图标
	 */
	appleTouchIcon?: string;
	/**
	 * 网站清单配置
	 */
	webmanifest?: string;
	/**
	 * 是否监听选项卡可见事件
	 */
	visibilitychange?: boolean;
	/**
	 * 选项卡不可见时显示角标
	 */
	hidden?: string;
	/**
	 * 选项卡不可见 显示文案
	 */
	showText?: string;
	/**
	 * 选项卡由不可见切换为可见时显示文案
	 */
	hideText?: string;
}
```

## 用户信息 User

用户基本信息，用于博主名称、头像、友链交换规则等等，通过 `user` 字段配置。

```ts
interface UserConfig {
	/**
	 * 站点昵称
	 */
	name?: string;
	/**
	 * 名
	 */
	firstName?: string;
	/**
	 * 姓
	 */
	lastName?: string;
	/**
	 * 邮箱
	 */
	email?: string;
	/**
	 * 域名
	 */
	domain?: string;
	/**
	 * 头像
	 */
	avatar?: string;
	/**
	 * dark 下使用
	 */
	darkAvatar?: string;
	/**
	 * 站点简介
	 */
	describe?: string;
	/**
	 * 友情链接规则
	 */
	ruleText?: string;
}
```

## 顶部导航 TopBar

导航栏右侧菜单配置，通过 `topBars` 字段配置。

左侧 logo 在网站图标中进行配置。

```ts
type TobBarsConfig = Array<AsyncTheme.NavItemWithLink | AsyncTheme.NavItemWithChildren>;

interface NavItemWithLink {
	/**
	 * 标题
	 */
	title: string;
	/**
	 * 链接
	 */
	url: string;
	/**
	 * 激活匹配规则
	 */
	activeMatch?: string;
	/**
	 * 打开方式
	 */
	target?: string;
	/**
	 * HTML rel
	 */
	rel?: string;
}

interface NavItemWithChildren {
	/**
	 * 标题
	 */
	title?: string;
	/**
	 * 链接
	 */
	url?: string;
	/**
	 * 激活匹配规则
	 */
	activeMatch?: string;
	/**
	 * 打开方式
	 */
	target?: string;
	/**
	 * HTML rel
	 */
	rel?: string;
	/**
	 * 子级
	 */
	children: NavItemWithLink[];
}
```

## 侧栏 Sidebar

包含 社交图标、打字动画、侧栏信息配置，通过 `sidebar` 字段配置。

```ts
interface SidebarConfig {
	/**
	 * 打字动画固定前缀
	 */
	typedTextPrefix?: string;
	/**
	 * 打字动画切换文案
	 */
	typedText?: string[];
	/**
	 * 个人信息
	 */
	info?: {
		key: string;
		val: string;
	}[];
	/**
	 * 社交地址图标链接
	 */
	social?: {
		name: string;
		icon: string;
		url: string;
	}[];
}
```

## 横幅 Banner

每个页面横幅都可以自定义不同背景图、标语等，当您需要视频背景的时候，您的视频格式需要为 MP4、WebM 、Ogg 等格式。

```ts
interface BannerConfig {
	/**
	 * 横幅类型
	 */
	type?: "img" | "video";
	/**
	 * 横幅资源路径地址
	 */
	bgurl?: string;
	/**
	 * 横幅标题
	 */
	bannerTitle?: string;
	/**
	 * 横幅描述
	 */
	bannerText?: string;
	/**
	 * 同 CSS object-position
	 */
	position?: string;
	/**
	 * 同 CSS object-fit
	 */
	fit?: string;
}
```

## 页脚 Footer

页脚所有配置预览：

```ts
interface FooterConfig {
	/**
	 * 是否显示 vitepress 和 主题
	 * theme link (Powered by vitepress).
	 */
	powered?: {
		enable: boolean;
	};
	/**
	 * 备案信息
	 * Beian icp information for Chinese users. In China, every legal website should have a beian icp in website footer.
	 * https://beian.miit.gov.cn/
	 */
	beian?: {
		enable: boolean;
		icp?: string;
	};
	/**
	 * 版权开始年号
	 */
	copyrightYear?: string;
	/**
	 * 运行时长
	 */
	liveTime?: {
		enable?: boolean;
		/**
		 * 前缀
		 */
		prefix?: string;
		/**
		 * 运行计算开始时间
		 */
		startTime?: string;
	};
}
```

### 驱动

自豪地显示当前使用的博客框架 Vitepress 与主题 Async 的名字及版本。

如：`由 Vitepress 驱动 v1.0.0-rc.24 | 主题 - Async v0.0.5`

让更多人知道 Vitepress 与主题 Vitepress-Theme-Async，这有利于开源社区进一步发展。

### 备案

国内用户可以提供备案号，开启备案显示。

备案信息默认链接为：<https://beian.miit.gov.cn/>

### 运行时间

默认关闭。示例: `本博客已萌萌哒地运行 442 天`

## 固定按钮 FixedBtn

右下角按钮区域部分按钮配置，通过 `rightside` 字段配置

```ts
interface FixedBtnConfig {
	/**
	 * 阅读模式按钮
	 */
	readmode?: boolean;
	/**
	 * 单双栏切换按钮
	 */
	aside?: boolean;
}
```

## 分页 Pagination

首页和归档分页可单独配置，分为 `indexGenerator` 和 `archiveGenerator`。

```ts
interface PaginationConfig {
	/**
	 * 分页大小
	 */
	perPage?: number;
	/**
	 * 排序方式
	 */
	orderBy?: string;
	/**
	 * 归档时日期格式
	 */
	dateFmt?: string;
}
```

## 文章 Article

这里是一些关于文章相关配置合集。

### Frontmatter

在 `md` 文件中除了 vitepress 默认可使用字段以外，主题新增了一些可使用配置。

- `sticky`：首页排序值，值越大越靠前。
- `banner`：文章页横幅背景，参考全局横幅配置。
- `cover`：文章封面图，可为字符串或数组或对象，如果数组长度为 2 则会根据主题自动切换。
- `single_column`：单栏显示详情页，为 true 时生效。
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
single_column: true
categories: 分类一
tags: [标签一, 标签二]
---
```

### 摘要 Excerpt

在文章中添加 `<!--more-->` 标签，在此之前的内容将会视为摘要部分。

### 打赏 Reward

通过 `reward` 字段配置，开启后，将在每篇文章 `post` 末尾显示打赏按钮。

```ts
interface RewardConfig {
	/**
	 * 是否显示打赏按钮
	 */
	enable?: boolean;
	/**
	 * 打赏按钮下的描述
	 */
	comment?: string;
	/**
	 * 打赏链接（当开启打赏链接时，将自动跳转您的外部链接而不是展开二维码）
	 */
	url?: string;
	/**
	 * 打赏二维码
	 */
	methods?: {
		/**
		 * 二维码地址
		 */
		path: string;
		/**
		 * 二维码描述
		 */
		name: string;
		/**
		 * 点击二维码跳转链接
		 */
		link?: string;
	}[];
}
```

### 版权信息 Licenses

设置您的文章的分享版权

> [关于许可协议](https://creativecommons.org/licenses/)
> 默认使用 署名-非商业性使用-相同方式共享 4.0，即 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)。

通过 `creativeCommons` 字段配置

```ts
interface CreativeCommonsConfig {
	/**
	 * 设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
	 */
	license?: string;
	/**
	 * 设置语言 (deed.zh-hans | deed.en | deed.ja ｜ ...)
	 */
	language?: string;
	/**
	 * 在每篇文章末尾显示
	 */
	post?: boolean;
	/**
	 * 是否在复制文章时，在剪贴板中追加版权信息（默认关闭）
	 */
	clipboard?: boolean;
}
```

### 上下篇 Pagination

文章详情页中上下篇配置，通过 `postPagination` 字段配置

```ts
interface PostPaginationConfig {
	/**
	 * 文章底部是否显示上下篇
	 */
	enable?: boolean;
	/**
	 * 上下篇卡片样式
	 */
	type?: "large" | "small";
}
```

### 文章封面 Conver

通过配置 `cover` 字段，来选择默认文章封面样式

```ts
interface ConverConfig {
	default: string;
	type: "img" | "date" | "random";
}
```

### 过期提醒 NoticeOutdate

通过配置 `noticeOutdate` 字段使用，`enable` 为 `true` 时，会根据文章发布时间计算已经过去多少天，如果超出 `limitDay` 配置天数，则会显示过期提醒标识

```ts
interface NoticeOutdateConfig {
	/**
	 * 是否启用
	 */
	enable?: boolean;
	/**
	 * 样式
	 */
	style?: "simple" | "flat";
	/**
	 * 距离今天多少天时显示
	 */
	limitDay?: number;
	/**
	 * 现实在文章中位置
	 */
	position?: "top" | "bottom";
}
```

## 友接页 Links

在 layout 为 `links` 时为友链页，页面会根据 `links` 配置渲染列表。

```ts
type LinksConfig = Links[];

interface Links {
	/**
	 * 昵称
	 */
	name: string;
	/**
	 * 链接
	 */
	url: string;
	/**
	 * 头像
	 */
	image: string;
	/**
	 * 描述
	 */
	desc?: string;
}
```

## 关于页 About

在 layout 为 `about` 时，根据配置生成页面。

```ts
interface AboutPageConfig {
	/**
	 * 标题
	 */
	title?: string;
	/**
	 * 个人简单描述
	 */
	introduction?: string;
	/**
	 * 博客信息
	 */
	blog?: string;
	/**
	 * 隐私权说明
	 */
	privacy?: string;
}
```

## 归档页 Archives

在 layout 为 `archives` 视为归档页。

为确保其他页跳转归档页正常，需要配置 `归档页` 对应地址。

```ts
interface BuiltPageConfig {
	/**
	 * 归档页地址 || archive page url
	 */
	archives?: string;
	/**
	 * 分类页地址 || category page url
	 */
	categorys?: string;
	/**
	 * 标签页地址 || tag page url
	 */
	tags?: string;
}
```

## 标签页 TagPage

在 layout 为 `tags` 视为标签页。

## 分类页 Categories

在 layout 为 `categories` 视为分类页。

## 插槽 Slot

插槽位置主要分布在 :

- 顶部导航栏 (TrmTopBar)
- 横幅 (TrmBanner)
- 侧栏 (TrmSidebar)
- 内容区域 (TrmPageContent)，内容区域除了公用插槽外，文章页、关于页、友链页会存在特有的插槽。
- 固定按钮块 (TrmFixedBtn)

具体插槽 [请看这里](https://github.com/MaLuns/vitepress-theme-async/blob/main/packages/vitepress-theme-async/layouts/Layout.vue)

## 全局组件 Global Components

主题中将页面中部分模块拆分单独的组件，位于 `vitepress-theme-async/components/global` 目录中。可通过 `globalComponents` 字段配置是否需要将组件注册为全局组件使用，设置为 `true` 默认会将所有组件注册为全局组件，也可一传递组件名称 `['TrmDividerTitle']` 选择性的注册。

```ts
globalComponents?: boolean | Array<string>;
```

## 自定义图标 Icon

主题内置图标是通过组件方式使用的，参考 vitepress 覆盖组件使用方式。

主题内置图标位置 `vitepress-theme-async/components/icons`

## 自定义样式 Style

参考 vitepress 自定义主题。

主题内置 css 变量参考 `vitepress-theme-async/styles/_variables/index.less` 文件

## 自定义组件 Components

参考 vitepress 覆盖组件使用方式。
