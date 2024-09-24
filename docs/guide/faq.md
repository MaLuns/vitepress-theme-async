# FAQ

::: tip

- <Badge text="dev" vertical="middle"/> 代表只和开发有关。默认示例站点使用的 dev 分支，所以可能会出现还未发版功能。

:::

有任何关于本主题的缺陷报告与功能建议，可以发起 [Issues](https://github.com/MaLuns/vitepress-theme-async/issues)。

如果您有其他相关的想法与问题，可前往 [Discussions](https://github.com/MaLuns/vitepress-theme-async/discussions)。

## 配置项不生效？

您可以参考查看 [AsyncThemeConfig ｜ vitepress-theme-async](hhttps://github.com/MaLuns/vitepress-theme-async/blob/main/packages/vitepress-theme-async/types/theme.d.ts) 文件及相关注释，确保您配置正确性。

- 初始安装后不生效？

检查配置文件路径、文件名是否正确，然后检查配置文档是否正确。

- 版本升级后配置不生效？

检查安装主题版本，然后查看更新日志里是否发生变更，参考文档配置说明，确保配置正确。

## 目录结构是怎么的？

### 单仓库

如果仅仅是单个博客站点，目录结构应该是下面样子的

::: code-group

```[目录结构]
.
├─ .vitepress
├─ posts
│  ├─ test.md
│  ├─ demo.md
│  └─ ...
├─ about.md
├─ index.md
├─ ...
```

```json [package.json]
{
	"scripts": {
		"dev": "vitepress dev ./",
		"build": "vitepress build ./",
		"preview": "vitepress preview ./"
	},
}
```

:::

使用脚手架生成程序默认为这种格式

```cmd
npm create async-theme@latest my-first-blog
```

### 多仓库

如果是 monorepo 结构，目录结构应该是下面样子的

::: code-group

```[目录结构]
.
├─ blog
│	├─ .vitepress
│	├─ posts
│	│  ├─ test.md
│	│  ├─ demo.md
│	│  └─ ...
│	├─ about.md
│	├─ index.md
│	├─ ...
├─ other
│		├─ ...
```

```json [package.json]
{
	"scripts": {
		"dev": "vitepress dev blog",
		"build": "vitepress build blog",
		"preview": "vitepress preview blog"
	},
}
```

:::

## hexo-theme-async 如何迁移？

### 文件和配置迁移

- 首先可以修改配置 `postDir` 改为 `_posts`

```ts
export default defineConfig({
	themeConfig: {
		postDir: '_posts', //[!code ++]
	},
});
```

- 然后将 hexo 里 `source` 里文件都复制到你的 vitpress 目录下

```
.
├─ .vitepress
├─ _posts
│  ├─ test.md
│  ├─ demo.md
│  └─ ...
├─ about
│  ├─ index.md
├─ img
│  ├─ xxx.png
├─ ...
```

- 将 \_data 里有自定义样式、语言包迁移到 vitepress 下后，去除 \_data、\_drafts 文件夹

将 `source/_data/style/index.less` 文件放到 `.vitepress/theme/` 目录下，然后在 `.vitepress\theme\index.ts` 引入样式文件

将 `source/_data/languages.yml` 转成 json 后放到 `vitepress-theme-async` 配置里， [参考 个性化语言包](https://vitepress-theme-async.imalun.com/guide/config#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80)

- 在源目录下新建 public 文件，将静态文件如 图片、脚本、字体文件等等放到里面

```
.
├─ .vitepress
├─ _posts
│  ├─ test.md
│  ├─ demo.md
│  └─ ...
├─ about
│  ├─ index.md
├─ img // [!code --]
│  ├─ xxx.png  // [!code --]
├─ public // [!code ++]
│  ├─ img // [!code ++]
│  	 ├─ xxx.png  // [!code ++]
├─ ...
```

- 找到配置文件 \_config.async.yaml 然后转成 json 格式后，将其放置 themeConfig 里

将所有的 key 格式从 xxx_xx 改为 xxxXx 格式后，就可以根据 ts 错误提示对字段进行修改

如果是没有字段进行补充，如果是提示多余字段，可以在文档搜索下确认没有情况下删除

```ts
export default defineConfig({
  themeConfig: {
    postDir: '_posts',
    user: { // [!code ++]
      name: "ThemeAsync", // [!code ++]
      first_name: "Theme", // [!code ++]
      last_name: "Async", // [!code ++]
      email: null, // [!code ++]
      domain: "站点域名", // [!code ++]
      avatar: "/img/avatar.jpg", // [!code ++]
      describe: "网站简介。", // [!code ++]
      rule_text: null // [!code ++]
    } // [!code ++]
    ... // 更多配置 // [!code ++]
  },
});
```

### 文件内容

- 如果原来文章里使用了 hexo tag，需要对其进行修改

- 文章里使用了 script、style 等语句块的需要对其 vitepress 里 [\<script> 和 \<style>](https://vitepress.dev/zh/guide/using-vue#script-and-style)
  规则进行调整

### 评论迁移

主题目前没有内置其他评论插件，需要参考插件在 vitepress 使用方式

[twikoo](https://github.com/twikoojs/twikoo/blob/main/docs/.vitepress/theme/Twikoo.vue) 在 vitepress 使用示例
