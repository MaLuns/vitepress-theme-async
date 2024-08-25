/**
 * @type {import('../types/theme')}
 * @typedef {import('vitepress').UserConfig<AsyncThemeConfig>} Config
 */

/**
 * 处理 less 全局变量
 * @param {Config} config
 */
export default config => {
	config.vite.css.preprocessorOptions.less.globalVars.isReadmode = Boolean(config.themeConfig?.rightside?.readmode);
	config.vite.css.preprocessorOptions.less.globalVars.isAside = Boolean(config.themeConfig?.rightside?.aside);
	config.vite.css.preprocessorOptions.less.globalVars.isReward = Boolean(config.themeConfig?.reward?.enable);
	config.vite.css.preprocessorOptions.less.globalVars.isSearch = Boolean(config.themeConfig?.search?.provider === 'local');
	config.vite.css.preprocessorOptions.less.globalVars.isCustomMdStyle = Boolean(config.themeConfig?.customMdStyle);
	config.vite.css.preprocessorOptions.less.globalVars.isFancybox = Boolean(config.themeConfig.plugin?.plugins?.fancybox?.js);
};
