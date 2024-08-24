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

## 目录结构如何选择？

### 单仓库

如果仅仅是单个博客站点，可以将 `srcDir` 设置为根目录

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

当然你也可以选择多个包的 monorepo 结构

::: code-group

```[目录结构]
.
├─ .vitepress
├─ blog
│		├─ posts
│		│  ├─ test.md
│		│  ├─ demo.md
│		│  └─ ...
│		├─ about.md
│		├─ index.md
│		├─ ...
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
