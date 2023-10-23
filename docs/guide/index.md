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

#### 通过 Npm 方式

进入您的博客根目录，执行：

```bash
npm i vitepress-theme-async@latest
```

#### 复制到本地方式

将 `package/vitepress-theme-async` 目录下代码复制到 `.vitepress/theme` 目录中即可。

::: danger
不推荐直接使用这种方式安装，会导致 bug 版本定位和后续升级比较麻烦。如果您需要通过插槽或者覆盖主题组件来个性话您的博客，如果以上方式无法满足您的需求时，且不在需要升级时可选择通过这种方式安装。
:::

#### 通过 npm 安装预览版

进入您的博客根目录，执行：

```bash
npm i vitepress-theme-async@beta
```

::: warning
预览版本仅在主版本更新时使用，预览版还处于功能开发和 bug 修复阶段。如果您想提前尝试新功能，可以安装它，顺便能帮忙找找 Bug 🤣
:::

## 启用主题 Use

- 使用 Npm 安装方式

在 `.vitepress/config.ts` 增加如下代码

```ts
import { defineConfig } from "vitepress-theme-async/config";

export default defineConfig({
	themeConfig: {
		// 在此添加配置
	},
});
```

然后再 `.vitepress/theme/index.ts` 添加如下代码

```ts
import ThemeAsync from "vitepress-theme-async";

export default {
	...ThemeAsync,
};
```

- 复制到本地方式

如果您是将文件复制到本地，将 `.vitepress/config.ts` 改为:

```ts
import { defineConfig } from ".theme/config";

export default defineConfig({
	themeConfig: {
		// 在此添加配置
	},
});
```

## 配置主题 Config

配置主题 [请看这里](./config)
