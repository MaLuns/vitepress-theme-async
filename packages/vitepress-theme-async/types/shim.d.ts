declare const __VP_LOCAL_SEARCH__: boolean;
declare const __ALGOLIA__: boolean;

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$t: (key: DeepKeys<AsyncTheme.Language>) => string | DeepKeys<AsyncTheme.Language>;
	}
}

declare module '@localSearchIndex' {
	const data: Record<string, () => Promise<{ default: string }>>;
	export default data;
}

export {};
