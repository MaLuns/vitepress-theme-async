import path from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig([
	{
		entry: ['./config/index.ts'],
		outDir: path.resolve(__dirname, './config'),
		dts: false,
		external: ['vite', 'vitepress'],
		silent: true,
		splitting: false,
		format: ['esm'],
	},
	{
		entry: ['./plugin/page.ts'],
		outDir: path.resolve(__dirname, './plugin'),
		dts: true,
		external: ['vite', 'vitepress'],
		silent: true,
		splitting: false,
		format: 'esm',
	},
]);
