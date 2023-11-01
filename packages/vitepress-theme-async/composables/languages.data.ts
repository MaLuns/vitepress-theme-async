import path from 'node:path';
import fs from 'node:fs';
import type { LoaderModule, SiteConfig } from 'vitepress';
import { AsyncThemeConfig } from 'types';
import { normalizePath } from 'vite';
import languages from '../languages';
import { mergeObj } from '../utils/shared';

type Lang = { [k: string]: AsyncTheme.Language };

declare const data: Lang;

export { data };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: SiteConfig<AsyncThemeConfig> = (globalThis as any).VITEPRESS_CONFIG;
const cache = /* @__PURE__ */ new Map();

export default <LoaderModule>{
	watch: [`languages/*.json`].map(p => normalizePath(path.join(config.root, p))),
	async load(files) {
		const raw: Lang = {
			...languages,
		};

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
			let language = JSON.parse(fileContent);

			if (languages[fileName]) {
				language = mergeObj(languages[fileName], language);
			}

			raw[fileName] = language;
			cache.set(fileName, { data: language, timestamp });
		}
		return raw;
	},
};
