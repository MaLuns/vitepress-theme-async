import Theme from 'vitepress/theme';
import './styles/index.less';
import languages from '../../../packages/vitepress-theme-async/config/languages';
import { dataPath, stringFormat } from '../../../packages/vitepress-theme-async/utils/shared';

const loadComponents = (modulesFiles, app) => {
	for (const path in modulesFiles) {
		const componentName = path.split('/').reverse()[0].replace(/.vue$/, '');
		app.component(componentName, modulesFiles[path]);
	}
};

export default {
	...Theme,
	enhanceApp(ctx) {
		ctx.app.config.globalProperties.$t = (k, ...pras) => {
			const langData = languages['zh-Hans'];
			let text = dataPath(langData, k) ?? k;
			if (pras.length) text = stringFormat(text, ...pras);
			return text;
		};

		loadComponents(import.meta.glob('../components/*.vue', { import: 'default', eager: true }), ctx.app);
		loadComponents(import.meta.glob('../../../packages/vitepress-theme-async/components/global/*.vue', { import: 'default', eager: true }), ctx.app);
		Theme.enhanceApp?.(ctx);
	},
};
