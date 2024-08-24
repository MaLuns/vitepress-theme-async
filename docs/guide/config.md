# 主题配置

## 文章目录

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

### 路由重写

`postDir` 为 `posts` 情况下，博客目录结构和生成后路径如下:

::: code-group

```[目录结构]
.
├─ posts
│  ├─ test.md
│  └─ demo.md
```

```[生成路径]
posts/test.md  -->  /posts/test.html  -->  https://xxx.xx/posts/test.html
posts/demo.md  -->  /posts/demo.html  -->  https://xxx.xx/posts/demo.html
```

:::

如果想路径上不需要带 `posts` 可以设置 `rewritePost` 为 `true`

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		rewritePost: true // [!code ++]
	},
});
```

```[生成路径]
posts/test.md  -->  /test.html  -->  https://xxx.xx/test.html
posts/demo.md  -->  /demo.html  -->  https://xxx.xx/demo.html
```

:::

如果还有其他路由需要重写，可以参考 vitepress 的 [路由重写](https://vitepress.dev/zh/guide/routing#route-rewrites)

## 主题语言

主题内置文本语言切换，支持 `zh-Hans` 和 `en`，修改 `vitepress` 配置中 `lang` 即可切换。

```ts
export default defineConfig({
	lang: "en",// [!code ++]
});
```

### 自定义语言

可以通过 `languages` 字段配置，覆盖默认文字。

当然也可以定义一种新的语言。

::: code-group

```ts [config.ts]
export default defineConfig({
	lang: "en",
	themeConfig: {
		languages: {
			en: {// [!code ++]
				title: 'Site Information',// [!code ++]
			}// [!code ++]
		}
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#Language
:::

## 主题模式

参考 vitepress 配置。

## 网站图标

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

## 用户信息

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

## 顶部导航

导航栏右侧菜单配置，通过 `topBars` 字段配置。

左侧 logo 在网站图标中进行配置。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		topBars: [ // [!code ++]
			{ title: 'Home', url: '/' }, // [!code ++]
			{ // [!code ++]
				title: 'Demo', // [!code ++]
				children: [ // [!code ++]
					{ title: '归档', url: '/archives' }, // [!code ++]
				], // [!code ++]
			} // [!code ++]
		] // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#NavItemWithLink
:::

## 侧栏信息

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

## 横幅信息

每个页面横幅都可以自定义不同背景图、标语等，当您需要视频背景的时候，您的视频格式需要为 MP4、WebM 、Ogg 等格式。

配置中的 `banner` 设置为全局的，如果想在不同页面设置不同 `banner`，可以在 `.md` 文件 `Frontmatter` 上设置。

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

## 页脚信息

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

## 文章详情页

这里是一些关于文章相关配置合集。

### 打赏

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

### 版权信息

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

### 上下篇

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

### 文章封面

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

### 过期提醒

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

## 其他配置

### 固定按钮

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

### 分页规则

首页和归档分页可单独配置，分为 `indexGenerator` 和 `archiveGenerator`。

默认情况下都是按每页 10 篇，日期倒叙进行分页。

#### 首页分页

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		indexGenerator: { // [!code ++]
			perPage: 8, // [!code ++]
			// ...  // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#IndexGeneratorConfig
:::

#### 归档分页

归档分配置后，同时也会对`分类页`和`标签页`生效。

除了设置分页外，还可以对归档时间轴卡片样式和归档日期格式进行配置。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		archiveGenerator: { // [!code ++]
			style: 'less', // [!code ++]
			// ...  // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#ArchiveGeneratorConfig
:::

### 分类卡片

首页中显示的分类卡片。

默认情况下，会显示分类里文章最多的两个，您可以通过修改配置来替换默认行为。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		categorieCard: { // [!code ++]
			list: ["分类1", "分类2"], // [!code ++]
			// ...  // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#CategorieCardConfig
:::

### RSS

内置 RSS 生成插件，使用 Feed 生成，默认关闭。

开启后，会更具 `fileName` (默认为 feed.rss) 生成不同类型格式。

- .xml => atom1
- .json => json1
- .rss => rss2

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		rss: { // [!code ++]
			enable: true, // [!code ++]
			// ...  // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#RSSConfig
:::

### 搜索设置

目前仅支持本地搜索，配置与 vitepress 默认主题保持一致，参考 vitepress 配置。

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#SearchConfig

## 内置插槽

插槽位置主要分布在 :

- 顶部导航栏 (TrmTopBar)
- 横幅 (TrmBanner)
- 侧栏 (TrmSidebar)
- 内容区域 (TrmPageContent)，内容区域除了公用插槽外，文章页、关于页、友链页会存在特有的插槽。
- 固定按钮块 (TrmFixedBtn)

具体插槽 [请看这里](https://github.com/MaLuns/vitepress-theme-async/blob/main/packages/vitepress-theme-async/layouts/Layout.vue)

## 全局组件

主题中将页面中部分模块拆分单独的组件，位于 `vitepress-theme-async/components/global` 目录中。可通过 `globalComponents` 字段配置是否需要将组件注册为全局组件使用，设置为 `true` 默认会将所有组件注册为全局组件，也可一传递组件名称 `['TrmDividerTitle']` 选择性的注册。

```ts
globalComponents?: boolean | Array<string>;
```

## 自定义图标

主题内置图标是通过组件方式使用的，参考 vitepress 覆盖组件使用方式。

主题内置图标位置 `vitepress-theme-async/components/icons`

## 自定义样式

参考 vitepress 自定义主题。

主题内置 css 变量参考 `vitepress-theme-async/styles/_variables/index.less` 文件

::: details vitepress-theme-async/styles/\_variables/index.less
<<< @/../packages/vitepress-theme-async/styles/\_variables/index.less#NoticeOutdateConfig
:::

## 自定义组件

参考 vitepress 覆盖组件使用方式。
