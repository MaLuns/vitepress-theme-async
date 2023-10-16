declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module 'vitepress-theme-async/config' {
	export default any;
}

declare interface Window {
	changeGiscusTheme: () => void;
}
