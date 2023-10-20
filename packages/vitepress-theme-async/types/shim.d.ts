declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module 'vitepress-theme-async/config' {
	import { AsyncThemeConfig } from 'vitepress-theme-async';
	import { UserConfig } from 'vitepress';

	export const defineConfig: (config: UserConfig<AsyncThemeConfig>) => UserConfig<AsyncThemeConfig>;
	export const defaultConfig: AsyncThemeConfig;
}
