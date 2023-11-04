// import ThemeAsync from 'vitepress-theme-async';
// export default {
// 	...ThemeAsync,
// };

import { defineTheme } from 'vitepress-theme-async';
import layout from './layout.vue';

export default defineTheme({
	Layout: layout,
	enhanceApp(_ctx) {
		//
	},
});
