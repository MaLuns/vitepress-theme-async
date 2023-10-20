import { Theme, DefaultTheme } from 'vitepress';

declare const theme: Theme;

// async-theme-config -----------------------------------------------------------------------

export declare interface AsyncThemeConfig {
	/* author */
	author?: string;

	/* */
	timeZone?: number;

	/*  */
	postDir?: string;

	/* built in page path config */
	page?: AsyncTheme.BuiltPageConfig;

	/* Home page setting */
	index_generator?: Omit<AsyncTheme.PaginationConfig, 'date_fmt'>;

	/* */
	archive_generator?: AsyncTheme.PaginationConfig;

	/* */
	post_pagination?: AsyncTheme.PostPaginationConfig;

	/* Layout top bars */
	top_bars?: AsyncTheme.TobBarsConfig;

	/* User info */
	user?: AsyncTheme.UserConfig;

	/* Configure the icon information of the site */
	favicon?: AsyncTheme.FaviconConfig;

	/* Banner config */
	banner?: AsyncTheme.BannerConfig;

	/* Sidebar config */
	sidebar?: AsyncTheme.SidebarConfig;

	/* Footer config */
	footer?: AsyncTheme.FooterConfig;

	/* The icon used by the theme */
	icons?: AsyncTheme.IconsConfig;

	/* Customize the cover image */
	cover?: AsyncTheme.ConverConfig;

	/* */
	rightside?: AsyncTheme.FixedBtnConfig;

	/* About page Config */
	about?: AsyncTheme.AboutPageConfig;

	/* Links */
	links?: AsyncTheme.LinksConfig;

	/* Reward */
	reward?: AsyncTheme.RewardConfig;

	/* Creative Commons 4.0 International License.
	https://creativecommons.org/licenses/
	Available values of license: by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero
	You can set a language value if you prefer a translated version of CC license.
	CC licenses are available in 39 languages, where you can find the specific and correct abbreviation you need.
	Valid values of language: deed.zh, deed.en, deed.ja, etc. */
	creative_commons?: AsyncTheme.CreativeCommonsConfig;

	outline?: DefaultTheme.Outline;
	outlineTitle?: string;
}

export * from './shim.d.ts';
export * from './theme.d.ts';
export default theme;
