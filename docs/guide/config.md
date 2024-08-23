# 主题配置

## 文章目录 Posts

默认情况下，主题默认会在您指定的根目录下取去寻找 `posts` 目录，并将目录下的所有 `.md` 文件视为文章进行加载。可修改 `postDir` 自定义文章目录

```ts
export default defineConfig({
	themeConfig: {
		postDir: 'posts', //[!code ++]
	},
});
```

::: warning 注意

vitepress 中存在根目录和源目录，默认情况下两者是相等的，如果您对 `srcDir` 进行了修改，则也同时需要对 `postDir` 进行修改。

了解根目录和源目录的区别 [请看这里](https://vitepress.dev/guide/routing#root-and-source-directory)

:::

## 语言 Language

主题内置文本语言切换，支持 `zh-Hans` 和 `en`，修改 `vitepress` 配置中 `lang` 即可切换。

```ts
export default defineConfig({
	lang: "en",// [!code ++]
});
```

可以通过 `languages` 字段配置，覆盖默认文字。

::: code-group

```ts [config.ts]
export default defineConfig({
	lang: "en",
	themeConfig: {
		en: {// [!code ++]
			title: 'Site Information',// [!code ++]
		}// [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#Language
:::

## 主题模式 ThemeMode

参考 vitepress 配置。

## 搜索 Search

参考 vitepress 配置，目前仅支持本地搜索

## 网站图标 Favicon

用于 logo、icon、安装图标配置，通过 `favicon` 字段配置。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		favicon: { // [!code ++]
			logo: '/favicon.svg', // [!code ++]
			icon16: '/favicon.svg', // [!code ++]
			icon32: '/favicon.svg' // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#FaviconConfig
:::

## 用户信息 User

用户基本信息，用于博主名称、头像、友链交换规则等等，通过 `user` 字段配置。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		user: { // [!code ++]
			//... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#UserConfig
:::

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

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		sidebar: { // [!code ++]
			typedText: ['Web Developer', 'UI Designer'], // [!code ++]
			// ...  // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#SidebarConfig
:::

## 横幅 Banner

每个页面横幅都可以自定义不同背景图、标语等，当您需要视频背景的时候，您的视频格式需要为 MP4、WebM 、Ogg 等格式。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		banner: { // [!code ++]
			type: 'img', // [!code ++]
			bgurl: 'xxx/xx.png', // [!code ++]
			bannerTitle: 'Hello word', // [!code ++]
			bannerText: '', // [!code ++]
			// ...  // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#BannerConfig
:::

## 页脚 Footer

页脚所有配置预览：

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		footer: { // [!code ++]
			// ...  // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#FooterConfig
:::

### 驱动

自豪地显示当前使用的博客框架 Vitepress 与主题 Async 的名字及版本。

如：`由 Vitepress 驱动 v1.0.0-rc.24 | 主题 - Async v0.0.5`

让更多人知道 Vitepress 与主题 Vitepress-Theme-Async，这有利于开源社区进一步发展。

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		footer: {
			powered: {// [!code ++]
				enable: true// [!code ++]
			}// [!code ++]
			// ...
		}
	}
});
```

### 备案

国内用户可以提供备案号，开启备案显示。

备案信息默认链接为：<https://beian.miit.gov.cn/>

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		footer: {
			beian: {// [!code ++]
				enable: true// [!code ++]
				icp: 'ICP xxxxxx'// [!code ++]
			}// [!code ++]
			// ...
		}
	}
});
```

### 运行时间

默认关闭。示例: `本博客已萌萌哒地运行 442 天`

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		footer: {
			liveTime: {// [!code ++]
				enable: true// [!code ++]
				startTime: '2023/10/01' // [!code ++]
			}// [!code ++]
			// ...
		}
	}
});
```

## 固定按钮 FixedBtn

右下角按钮区域部分按钮配置，通过 `rightside` 字段配置

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		rightside: { // [!code ++]
			... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#FixedBtnConfig
:::

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

### 打赏 Reward

通过 `reward` 字段配置，开启后，将在每篇文章 `post` 末尾显示打赏按钮。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		reward: { // [!code ++]
			... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#RewardConfig
:::

### 版权信息 Licenses

设置您的文章的分享版权

> [关于许可协议](https://creativecommons.org/licenses/)
> 默认使用 署名-非商业性使用-相同方式共享 4.0，即 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)。

通过 `creativeCommons` 字段配置

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		creativeCommons: { // [!code ++]
			... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#CreativeCommonsConfig
:::

### 上下篇 Pagination

文章详情页中上下篇配置，通过 `postPagination` 字段配置

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		postPagination: { // [!code ++]
			... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#PostPaginationConfig
:::

### 文章封面 Conver

通过配置 `cover` 字段，来选择默认文章封面样式

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		cover: { // [!code ++]
			... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#ConverConfig
:::

### 过期提醒 NoticeOutdate

通过配置 `noticeOutdate` 字段使用，`enable` 为 `true` 时，会根据文章发布时间计算已经过去多少天，如果超出 `limitDay` 配置天数，则会显示过期提醒标识

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		noticeOutdate: { // [!code ++]
			... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#NoticeOutdateConfig
:::

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
