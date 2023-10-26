# 主题配置

## 语言 Language

主题内置文本语言切换，等待支持。

## 主题模式 ThemeMode

参考 vitepress 配置。

## 搜索 Search

参考 vitepress 配置，目前仅支持本地搜索

## 网站图标 Favicon

用于 logo、icon 安装图标配置。

```ts
interface FaviconConfig {
	/**
	 * logo
	 */
	logo?: string;
	/**
	 *  dark 下使用
	 */
	dark_logo?: string;
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

用户基本信息，用于博主名称、头像、友链交换规则等等。

```ts
interface UserConfig {
	/**
	 * 站点昵称
	 */
	name?: string;
	first_name?: string;
	last_name?: string;
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
	dark_avatar?: string;
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

导航栏右侧菜单配置，左侧 logo 在网站图标中进行配置

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

包含 社交图标、打字动画、侧栏信息配置

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
	copyright_year?: string;
	/**
	 * 运行时长
	 */
	live_time?: {
		enable?: boolean;
		/**
		 * 前缀
		 */
		prefix?: string;
		/**
		 * 运行计算开始时间
		 */
		start_time?: string;
	};
}
```

### 驱动

自豪地显示当前使用的博客框架 Vitepress 与主题 Async 的名字及版本。

如：`由 Vitepress 驱动 v5.4.2 | 主题 - Async v1.1.7`

让更多人知道 Vitepress 与主题 Vitepress-Theme-Async，这有利于开源社区进一步发展。

### 备案

国内用户可以提供备案号，开启备案显示。

备案信息默认链接为：<https://beian.miit.gov.cn/>

### 运行时间

默认关闭。示例: `本博客已萌萌哒地运行 442 天`

## 固定按钮 FixedBtn

右下角按钮区域部分按钮配置

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

## 文章 Article

这里是一些关于文章相关配置合集。

### 打赏 Reward

开启后，将在每篇文章 `post` 末尾显示打赏按钮。

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

### 版权信息

设置您的文章的分享版权

> [关于许可协议](https://creativecommons.org/licenses/)
> 默认使用 署名-非商业性使用-相同方式共享 4.0，即 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)。

```ts
interface CreativeCommonsConfig {
	/**
	 * 设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
	 */
	license?: string;
	/**
	 * 设置语言 (deed.zh | deed.en | deed.ja ｜ ...)
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

```ts
interface PaginationConfig {
	/**
	 * 分页大小
	 */
	per_page?: number;
	/**
	 * 排序方式
	 */
	order_by?: string;
	/**
	 * 归档时日期格式
	 */
	date_fmt?: string;
}
```

### 文章封面

```ts
interface ConverConfig {
	default: string;
	type: "img" | "date" | "random";
}
```

## 友情链接 Links

在 layout 为 `links` 时，根据配置渲染列表

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

## 关于页

在 layout 为 `about` 时，根据配置生成页面

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

## 归档 Archives

在 layout 为 `archives` 视为归档页

为确保其他页跳转归档页正常，需要配置 `归档页` 对应地址

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

在 layout 为 `tags` 视为标签页

## 分类 Categories

在 layout 为 `categories` 视为分类页

## 插槽 Slot

待整理

## 自定义样式 Style

参考 vitepress 自定义主题。

主题内置 css 变量参考 `packages\vitepress-theme-async\styles\_variables\index.less` 文件

## 自定义组件 Components

参考 vitepress 覆盖组件使用方式。
