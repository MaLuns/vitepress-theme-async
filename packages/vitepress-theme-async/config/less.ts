import type { UserConfig } from 'vitepress';

export const defaultColor: AsyncTheme.ThemeColorConfig = {
	primary: '#afb42b',
	primaryWeak: '#c0ca33',
	bodyColor: ['#5d5d5e', '#d1d9e9b3'],
	bodyBgColor: ['#00151f', '#00151f'],
	themeColor: ['#00283a', '#dedee0'],
	themeBgColor: ['#fcfcfe', '#00283a'],
	themeBg2Color: ['#f4f5f7', '#02162b'],
};

/**
 * 处理 less 全局变量
 */
export default (config: UserConfig<AsyncThemeConfig>) => {
	if (config.vite?.css?.preprocessorOptions?.less.globalVars) {
		const processThemeColor = (color: string | [string, string] | undefined, defaultValue: string | [string, string]): [string, string] => {
			const defColors = Array.isArray(defaultValue) ? defaultValue : [defaultValue, defaultValue];
			if (Array.isArray(color)) {
				if (color.length === 2) return color;
				else return [color[2], color[3]];
			} else {
				return [color ?? defColors[0], color ?? defColors[1]];
			}
		};

		const setThemeGlobalVars = (colorConfig: AsyncTheme.ThemeColorConfig) => {
			Object.entries(colorConfig).forEach(([key, value]) => {
				if (key === 'enable') return;
				const [light, dark] = processThemeColor(value, defaultColor[key as keyof AsyncTheme.ThemeColorConfig] as string);
				config.vite!.css!.preprocessorOptions!.less.globalVars[`${key}Light`] = light;
				config.vite!.css!.preprocessorOptions!.less.globalVars[`${key}Dark`] = dark;
			});
		};

		config.vite.css.preprocessorOptions.less.globalVars.isReadmode = Boolean(config.themeConfig?.rightside?.readmode);
		config.vite.css.preprocessorOptions.less.globalVars.isAside = Boolean(config.themeConfig?.rightside?.aside);
		config.vite.css.preprocessorOptions.less.globalVars.isReward = Boolean(config.themeConfig?.reward?.enable);
		config.vite.css.preprocessorOptions.less.globalVars.isSearch = Boolean(config.themeConfig?.search?.provider === 'local');
		config.vite.css.preprocessorOptions.less.globalVars.isCustomMdStyle = Boolean(config.themeConfig?.customMdStyle);
		config.vite.css.preprocessorOptions.less.globalVars.isFancybox = Boolean(config.themeConfig?.plugin?.plugins?.fancybox?.js);
		setThemeGlobalVars(config.themeConfig?.themeColor ?? {});
	}
};
