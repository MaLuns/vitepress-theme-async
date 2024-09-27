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

~~vitepress 中存在根目录和源目录，默认情况下两者是相等的，如果您对 `srcDir` 进行了修改，则也同时需要对 `postDir` 进行修改。~~ v0.0.12 后版本数据加载自动获取 srcDir 目录进行同步

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
//等效于
export default defineConfig({
	rewrites: {
		'posts/(.*)': '(.*)' // [!code ++]
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

### 社交图标

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		sidebar: {
			social: [  // [!code ++]
				{  // [!code ++]
					name: 'vue',  // [!code ++]
					url: 'https://cn.vuejs.org/',  // [!code ++]
					icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`,  // [!code ++]
				},  // [!code ++]
			],  // [!code ++]
		}
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#SidebarConfig
:::

### 打字动画

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		sidebar: {
			typedText: ['Web Developer', 'UI Designer'], // [!code ++]
			social: [
				{
					name: 'vue',
					url: 'https://cn.vuejs.org/',
					icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`,
				},
			],
		}
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#SidebarConfig
:::

### 侧栏信息

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		sidebar: {
			typedText: ['Web Developer', 'UI Designer'],
			social: [
				{
					name: 'vue',
					url: 'https://cn.vuejs.org/',
					icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`,
				},
			],
			info: [ // [!code ++]
				{ // [!code ++]
					key: '地址', // [!code ++]
					val: '中国' // [!code ++]
				} // [!code ++]
			] // [!code ++]
		}
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

## 文章详情

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

### 破图配置

您可以添加图片加载失败时显示默认图片，通过配置 `errorImg` 字段使用。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		errorImg: { // [!code ++]
			... // [!code ++]
		} // [!code ++]
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#ErrorImgConfig
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
		indexGenerator: {
			perPage: 8, // [!code ++]
		}
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#IndexGeneratorConfig
:::

默认情况下，生成的分页是伪分页，通过 URL 参数前端实现的分页，并不会按照分页生成对应 .html 文件。

如果需要按分页生成静态文件需要开启 `static` 配置，然后将 `index.md` 改名为 `[index].md`，并添加 `[index].paths.ts` 文件，调用主题 `dynamicPages` 方法动态添加分页路由。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		indexGenerator: {
			static: true, // [!code ++]
		}
	}
});
```

```txt [博客目录]
.
├─ .vitepress
├─ posts
│  └─ ...
├─ index.md // [!code --]
├─ [index].md // [!code ++]
├─ [index].paths.ts // [!code ++]
├─ ...
```

```ts [[index].paths.ts]
import { dynamicPages } from 'vitepress-theme-async/plugin/page';
import config from './.vitepress/config';

export default {
	async paths() {
		return dynamicPages(config, 'index');
	},
};

```

```txt [对比]
# 静态模式访问路径
https://xxx				// 首页
https://xxx/page/2		// 第二页
https://xxx/page/3		// 第三页

# 普通模式访问路径
https://xxx				// 首页
https://xxx?page=2		// 第二页
https://xxx?page=3		// 第三页
```

:::

#### 归档分页

归档分配置后，同时也会对`分类页`和`标签页`生效。

除了设置分页外，还可以对归档时间轴卡片样式和归档日期格式进行配置。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		archiveGenerator: {
			style: 'less', // [!code ++]
		}
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#ArchiveGeneratorConfig
:::

归档分类页与首页一样，默认情况下，生成的分页是伪分页，通过 URL 参数前端实现的分页，并不会按照分页生成对应 .html 文件。

如果需要按分页生成静态文件需要开启 static 配置，然后将 `archives|categories|tags.md` 改名为 `[archives|categories|tags].md`，并添加 `[archives|categories|tags].paths.ts` 文件，调用主题 dynamicPages 方法动态添加分页路由。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		archiveGenerator: {
			static: true, // [!code ++]
		}
	}
});
```

```txt [博客目录]
.
├─ .vitepress
├─ posts
│  └─ ...
├─ archives.md // [!code --]
├─ [archives].md // [!code ++]
├─ [archives].paths.ts // [!code ++]
├─ categories.md // [!code --]
├─ [categories].md // [!code ++]
├─ [categories].paths.ts // [!code ++]
├─ tags.md // [!code --]
├─ [tags].md // [!code ++]
├─ [tags].paths.ts // [!code ++]
├─ ...
```

:::

如果开启了分页生成静态文件，文件的路由会根据 `page` 配置生成路由，以 `tags` 为例

| 配置路径    | 第一页路径       | 其他页路径        | 子级第一页      | 子级其他页路径         |
| :---------- | :--------------- | :---------------- | :-------------- | :--------------------- |
| /           | /index.html      | /page/2.html      | /子级.html      | /子级/page/2.html      |
| /index      | /index.html      | /page/2.html      | /子级.html      | /子级/page/2.html      |
| /tags       | /tags.html       | /tags/page/2.html | /tags/子级.html | /tags/子级/page/2.html |
| /tags/      | /tags/index.html | /tags/page/2.html | /tags/子级.html | /tags/子级/page/2.html |
| /tags/index | /tags/index.html | /tags/page/2.html | /tags/子级.html | /tags/子级/page/2.html |

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

### RSS 配置

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

### 搜索配置

目前仅支持本地搜索，配置与 vitepress 默认主题保持一致，参考 vitepress 配置。

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#SearchConfig

### 插件配置

主题内置插件配置，默认通过 CDN 方式加载。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		plugin: {
			// 修改默认 CDN 源
			thirdPartyProvider: 'https://npm.elemecdn.com', // [!code ++]
		}
	}
});
```

<<< @/../packages/vitepress-theme-async/types/theme.d.ts#PluginConfig
:::

如果不需要使用某个插件，可设置对应插件配置为空，主题则会跳过插件加载

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		plugin: {
			flickrJustifiedGallery: null, // [!code ++]
			fancybox: {
				js: null // [!code ++]
			}
		}
	}
});
```

## 内置插槽

插槽位置主要分布在 :

- 顶部导航栏 <ul><li v-for="item in slotNames.topbar">{{item}}</li></ul>
- 横幅 <ul><li v-for="item in slotNames.banner">{{item}}</li></ul>
- 侧栏 <ul><li v-for="item in slotNames.sidebar">{{item}}</li></ul>
- 内容区域 ，内容区域除了公用插槽外，文章页、关于页、友链页会存在特有的插槽。 <ul><li v-for="item in slotNames.page">{{item}}</li></ul>
  - 文章页 <ul><li v-for="item in slotNames.post">{{item}}</li></ul>
  - 关于页 <ul><li v-for="item in slotNames.about">{{item}}</li></ul>
  - 友链页 <ul><li v-for="item in slotNames.links">{{item}}</li></ul>
- 固定按钮块 <ul><li v-for="item in slotNames.fixed">{{item}}</li></ul>
- 页尾 <ul><li v-for="item in slotNames.footer">{{item}}</li></ul>

想看更具体插槽信息 [请看这里](https://github.com/MaLuns/vitepress-theme-async/blob/main/packages/vitepress-theme-async/layouts/Layout.vue)

## 全局组件

主题中将页面中部分模块拆分单独的组件，以便于在文章中使用，位于 `vitepress-theme-async/components/global` 目录中。默认情况下不会注册到全局组件中，需要通过 `globalComponents` 字段配置是否需要将组件注册为全局组件使用，设置为 `true` 默认会将所有组件注册为全局组件，也可一传递组件名称 `['TrmDividerTitle']` 选择性的注册。

::: code-group

```ts [config.ts]
export default defineConfig({
	themeConfig: {
		globalComponents: true // [!code ++]
	}
});
```

```ts [theme.d.ts]
globalComponents?: boolean | Array<string>;
```

:::

<li v-for="i in globalComponents">{{ i }}</li>

## 自定义图标

主题内置图标是通过组件方式使用的，参考 vitepress 覆盖组件使用方式。[重写内部组件](https://vitepress.dev/zh/guide/extending-default-theme#overriding-internal-components)

主题内置图标位置 `vitepress-theme-async/components/icons`

<ClientOnly>
	<div style="display:flex;gap:16px;flex-wrap:wrap;">
		<li v-for="i in iconComponents" style="border-radius: 6px;width: 80px; height: 80px;list-style: none;padding: 22px;margin: 0;background:var(--vp-sidebar-bg-color);">
			<Component :is="i" style="width:36px;height:36px;fill:currentColor;"/>
		</li>
	</div>
</ClientOnly>

## 自定义样式

参考 vitepress 自定义主题。

主题内置 css 变量参考 `vitepress-theme-async/styles/_variables/index.less` 文件

<!--  prettier-ignore-start -->
::: details vitepress-theme-async/styles/_variables/index.less
<<< @/../packages/vitepress-theme-async/styles/_variables/index.less
:::
<!--  prettier-ignore-end  -->

## 自定义组件

参考 vitepress 覆盖组件使用方式。 [重写内部组件](https://vitepress.dev/zh/guide/extending-default-theme#overriding-internal-components)

<script setup>
import layoutRaw from '../../packages/vitepress-theme-async/layouts/Layout.vue?raw'

const modulesFiles = import.meta.glob('../../packages/vitepress-theme-async/components/global/*.vue', { eager: true })
const globalComponents =(Object.keys(modulesFiles).map(item=>item.split('/').reverse()[0]))

const iconModules = import.meta.glob('../../packages/vitepress-theme-async/components/icons/*.vue', { import: 'default', eager: true })
const iconComponents =(Object.values(iconModules))
const slotNames = layoutRaw.match(/name="(.*)"/g)
		.map(item=> item.replace(/name="(.*)"/g,'$1'))
		.reduce((pre,cur)=>{
			const key = cur.split('-')[0]
			pre[key] = pre[key] || []
			pre[key].push(cur)
			return pre
		},{})
</script>
