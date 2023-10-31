import { AsyncThemeConfig } from 'types';
import type { LoaderModule, SiteConfig } from 'vitepress';
import { normalizePath } from 'vite';
import path from 'node:path';
import fs from 'node:fs';

type Lang = { [k: string]: AsyncTheme.Language };

declare const data: Lang;

export { data };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: SiteConfig<AsyncThemeConfig> = (globalThis as any).VITEPRESS_CONFIG;
const cache = /* @__PURE__ */ new Map();

export default <LoaderModule>{
	watch: [`languages/*.json`].map(p => normalizePath(path.join(config.root, p))),
	async load(files) {
		const raw: Lang = {};

		for (const file of files) {
			if (!file.endsWith('.json')) {
				continue;
			}

			const fileName = path.basename(file).replace(path.extname(file), '');
			const { mtimeMs: timestamp } = fs.statSync(file);

			const cached = cache.get(fileName);
			if (cached && timestamp === cached.timestamp) {
				raw[fileName] = cached.data;
				continue;
			}

			const fileContent = fs.readFileSync(file, 'utf-8');
			const language = JSON.parse(fileContent);

			raw[fileName] = language;
			cache.set(fileName, { data: language, timestamp });
		}
		return raw;
	},
};
