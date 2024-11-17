import type { Theme } from 'vitepress';
import { Component } from 'vue';

import './styles/index.less';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import { withConfigProvider, getLangText } from './blog';
import { isEmpty } from './utils/shared';

// export * from './config/index.js'

const theme = <Theme>{
	Layout: withConfigProvider(Layout),
	NotFound,
	enhanceApp({ app, siteData }) {
		app.config.globalProperties.$t = getLangText;

		const globalComponents = siteData.value.themeConfig.globalComponents;
		if (globalComponents) {
			let e = true;
			let modulesFiles = import.meta.glob('./components/global/*.vue', { import: 'default', eager: true });
			// 开发模式下路径未转换问题,暂时通过,手动处理 https://github.com/vuejs/vitepress/issues/4342
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../../../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../../../../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../../../../../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../../../../../../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../../../../../../../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));
			e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob('../../../../../../../../node_modules/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }));

			const flag = Array.isArray(globalComponents);
			for (const path in modulesFiles) {
				const componentName = path.split('/').reverse()[0].replace(/.vue$/, '');
				if (!flag || (flag && globalComponents.includes(componentName))) {
					app.component(componentName, modulesFiles[path] as Component);
				}
			}
		}
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
