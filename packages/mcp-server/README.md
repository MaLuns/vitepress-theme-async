# Vitepress-theme-async MCP Server

使用 Vitepress-theme-async MCP Server，可以将主题配置说明信息当做数据源提供给 Cursor 等支持 AI 编程的 IDE 工具以便让 AI 能够直接根据你的需求修改配置。

通过 MCP 可以免去了你需要去查阅文档，或者去查看主题源码的麻烦，直接让 AI 帮你修改主题配置。

## 🎯 如何使用

安装配置好 MCP 后，AI 可以通过 MCP 读取主题配置说明信息。

你只要告诉 AI 你想要通过 修改主题配置信息，示例：

- “主题 vitepress-theme-async 有哪些配置信息”
- “帮我修改 banner 配置, 将背景图换成 xxxx ”
- “帮我修改 关于我 页面配置”
- “.......”

## 🚀 安装方法

### 前置条件

- 已安装 Node.js 环境（版本号 >= 18，推荐最新的 LTS 版本）
- 任意一个支持 MCP 的 IDE：
    - Cursor
    - VSCode + Cline 插件
    - ......

### 安装

将下面 JSON 配置添加到 IDE 对应的 MCP 配置文件里：

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

目前 MCP Server 仅提供 AI 配置文件详细说明，更细致化自定义功能还不支持。