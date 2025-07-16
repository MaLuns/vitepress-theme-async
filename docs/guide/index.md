# 使用指南

本主题为 Vitepress blog 主题，请确保您已了解 Vitepress 的基本使用方式。更多信息请参见 [Vitepress 官网](https://vitepress.dev/)。

有任何关于本主题的缺陷报告与功能建议，可以发起 [Issues](https://github.com/MaLuns/vitepress-theme-async/issues)。

如果您有其他相关的想法与问题，可前往 [Discussions](https://github.com/MaLuns/vitepress-theme-async/discussions)。

::: danger 提醒

本插件为 blog 主题，不一定适合当作文档主题使用。主题为 Hexo-Theme-Async 的移植版本，功能配置上会有一定的差异，合理选择您想要版本。

- 配置问题

**本文档已经覆盖了，本主题使用的 99% 配置**。遇到问题时，**请优先翻阅文档**，参考文档里的说明。如果使用中发现文档中有解释存在歧义地方，可以通过上面多种渠道进行反馈，也可以提交 PR 进行完善。
:::

## 快速开始 Get started

## 安装主题 Install

### 初始化新博客

如果您的是新建博客，可以通过如下命令快速安装。根据您的包管理器，选择对应命令进行初始化

::: code-group

```bash [npm]
npm create async-theme@latest my-first-blog
```

```bash [yarn]
yarn create async-theme my-first-blog
```

```bash [pnpm]
pnpm create async-theme@latest my-first-blog
```

```bash [bun]
bunx create-async-theme@latest my-first-blog --bun
```

:::

### 在已有客安装

如果您需要将已有项目中使用主题，可以通过如下几种方式安装

#### 安装 Npm 包方式

进入您的博客根目录，添加 `vitepress-theme-async`

```bash
npm i vitepress-theme-async@latest
```

#### 将主题包复制到本地

将 `package/vitepress-theme-async` 目录下代码复制到 `.vitepress/theme` 目录中即可。

::: danger
不推荐直接使用这种方式安装，会导致 bug 版本定位和后续升级比较麻烦。您可以优先通过插槽或者覆盖主题组件来个性话您的博客，如果以上方式无法满足您的需求时，且不在需要升级时可选择通过这种方式安装。
:::

## 启用主题 Use

- 使用 Npm 安装方式

在如下文件下添加对应代码

::: code-group

```ts [.vitepress/config.ts]
import { defineConfig } from "vitepress-theme-async/config";

export default defineConfig({
	themeConfig: {
		// 在此添加配置
	},
});
```

```ts [.vitepress/theme/index.ts]
import ThemeAsync from "vitepress-theme-async";

export default ThemeAsync;
```

:::

- 复制到本地方式

如果您是将文件复制到本地，修改如下:

::: code-group

```ts [.vitepress/config.ts]
import { defineConfig } from "vitepress-theme-async/config";  // [!code --]
import { defineConfig } from "./theme/config";  // [!code ++]

export default defineConfig({
	themeConfig: {
		// 在此添加配置
	},
});
```

```ts [.vitepress/theme/index.ts]
import ThemeAsync from "vitepress-theme-async"; // [!code --]
import ThemeAsync from "./main";  // [!code ++]

export default ThemeAsync;
```

:::

## 配置主题 Config

配置主题 [请看这里](./config)

## TS 类型提示

在 tsconfig 文件里添加 `vitepress-theme-async` 到 types 字段里。

``` ts
{
  "compilerOptions": {
    //...
    "types": ["vitepress-theme-async"]
  },
}
```

v0.0.28+ 版本，也可以修改 tsconfig 配置的 moduleResolution 字段，切换到支持识别 package.json 的 exports 字段的模式。


## MCP Server

将下面 JSON 配置添加到 IDE 对应的 MCP 配置文件里，就可以让 AI 帮助修改配置文件里

你只要告诉 AI 你想要通过 修改主题配置信息，示例：

- “主题 vitepress-theme-async 有哪些配置信息”
- “帮我修改 banner 配置, 将背景图换成 xxxx ”
- “帮我修改 关于我 页面配置”
- “.......”

``` json
{
  "mcpServers": {
    "async配置": {
      "command": "npx",
      "args": [
        "-y",
        "vitepress-theme-async-mcp-server@latest",
      ]
    }
  }
}
```