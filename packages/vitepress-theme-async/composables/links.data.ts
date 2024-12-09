import { SiteConfig } from 'vitepress';
import { isString } from '../utils/shared';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: SiteConfig<AsyncThemeConfig> = (globalThis as any).VITEPRESS_CONFIG;
const theme = config.site.themeConfig;

declare const data: AsyncTheme.Links[] | undefined;
export { data };

export default {
	async load() {
		if (isString(theme.links) && /^(http[s]{0,1}):\/\//g.test(theme.links)) {
			return (await fetch(theme.links)).json();
		} else {
			return Array.isArray(theme.links) ? theme.links : [];
		}
	},
};
