import type { UserConfig } from 'vitepress';

/**
 * 处理 less 全局变量
 */
export default (config: UserConfig<AsyncThemeConfig>) => {
	if (config.vite?.css?.preprocessorOptions?.less.globalVars) {
		const { primary, primaryWeak } = config.themeConfig?.themeColor ?? {};
		const [primaryLight, primaryDark] = Array.isArray(primary) ? primary : [primary, primary];
		const [primaryWeakLight, primaryWeakDark] = Array.isArray(primaryWeak) ? primaryWeak : [primaryWeak, primaryWeak];

		config.vite.css.preprocessorOptions.less.globalVars.isReadmode = Boolean(config.themeConfig?.rightside?.readmode);
		config.vite.css.preprocessorOptions.less.globalVars.isAside = Boolean(config.themeConfig?.rightside?.aside);
		config.vite.css.preprocessorOptions.less.globalVars.isReward = Boolean(config.themeConfig?.reward?.enable);
		config.vite.css.preprocessorOptions.less.globalVars.isSearch = Boolean(config.themeConfig?.search?.provider === 'local');
		config.vite.css.preprocessorOptions.less.globalVars.isCustomMdStyle = Boolean(config.themeConfig?.customMdStyle);
		config.vite.css.preprocessorOptions.less.globalVars.isFancybox = Boolean(config.themeConfig?.plugin?.plugins?.fancybox?.js);
		config.vite.css.preprocessorOptions.less.globalVars.primaryLight = primaryLight ?? '#afb42b';
		config.vite.css.preprocessorOptions.less.globalVars.primaryWeakLight = primaryWeakLight ?? '#c0ca33';
		config.vite.css.preprocessorOptions.less.globalVars.primaryDark = primaryDark ?? '#afb42b';
		config.vite.css.preprocessorOptions.less.globalVars.primaryWeakDark = primaryWeakDark ?? '#c0ca33';
	}
};
