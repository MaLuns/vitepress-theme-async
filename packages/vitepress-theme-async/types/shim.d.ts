declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$t: (key: DeepKeys<AsyncTheme.Language> | 'none', ...pars: string[]) => string | DeepKeys<AsyncTheme.Language>;
	}
}

export {};
