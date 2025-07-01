#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(resolve(__dirname, "theme.d.ts"), {
    encoding: "utf-8",
});

class AsyncConfigServer {
    server;
    constructor() {
        this.server = new Server(
            {
                name: "vitepress-theme-async-server",
                version: "1.0.0",
            },
            {
                capabilities: {
                    tools: {},
                },
            }
        );
        this.setupToolHandlers();
    }
    setupToolHandlers() {
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            return {
                tools: [
                    {
                        name: "async_config_doc",
                        description:
                            "vitepress-theme-async 主题配置的描述文件，当用户询问主题配置时，可以调用此工具获取参考配置信息，采用的是 .d.ts 详细描述了主题配置格式",
                        inputSchema: {
                            type: "object",
                            properties: {},
                        },
                    },
                ],
            };
        });
        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const { name } = request.params;
            switch (name) {
                case "async_config_doc":
                    return {
                        content: [
                            {
                                type: "text",
                                text: text,
                            },
                        ],
                    };
                default:
                    throw new Error(`未知工具: ${name}`);
            }
        });
    }
    async run() {
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        console.error("Vitepress Theme Async MCP Server 已启动");
    }
}

const server = new AsyncConfigServer();
server.run().catch((error) => {
    console.error("服务器启动失败:", error);
    process.exit(1);
});
