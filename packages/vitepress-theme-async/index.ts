import type { Theme } from 'vitepress';

import './styles/index.less';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import { withConfigProvider } from './blog';
import { getLangText } from './composables';
// export * from './config/index.js'

const theme = <Theme>{
	Layout: withConfigProvider(Layout),
	NotFound,
	enhanceApp({ app }) {
		app.config.globalProperties.$t = getLangText;
	},
};

export const defineTheme = (userTheme: Theme): Theme => {
	return <Theme>{
		...theme,
		...userTheme,
		async enhanceApp(ctx) {
			userTheme.enhanceApp?.(ctx);
			theme.enhanceApp?.(ctx);
		},
	};
};

export default theme;
