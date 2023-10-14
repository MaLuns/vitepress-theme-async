declare module '*.vue' {
	import { ComponentOptions } from 'vue'

	const comp: ComponentOptions
	export default comp
}

declare module 'vitepress-theme-async/config' {
	export default any
}

declare  interface Window {
	changeGiscusTheme: () => void;
}