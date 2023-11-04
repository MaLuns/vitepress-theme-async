import { DefaultTheme } from 'vitepress';

// async-theme-config -----------------------------------------------------------------------
export declare interface AsyncThemeConfig {
	/** 页面切换动画 | page transition animations */
	pageLoading?: boolean;

	/** 主题切换动画 | theme transition animations */
	themeLoading?: boolean;

	/** 自定义文章样式 */
	customMdStyle?: boolean;

	/** 将主题组件注册到全局 | register the global component */
	globalComponents?: boolean | Array<string>;

	/** 作者 | author */
	author?: string;

	/** 搜索 | search */
	search?: { provider: 'local'; options?: DefaultTheme.LocalSearchOptions };

	/** 时区 | timeZone*/
	timeZone?: number;

	/** 文章目录 | post folder */
	postDir?: string;

	/** 内置页地址配置 | built in page path config */
	page?: AsyncTheme.BuiltPageConfig;

	/** 首页分页 | Index page generator */
	indexGenerator?: Omit<AsyncTheme.PaginationConfig, 'date_fmt'>;

	/** 归档页 | Archive generator */
	archiveGenerator?: AsyncTheme.PaginationConfig;

	/** 上下页 | Post pagination */
	postPagination?: AsyncTheme.PostPaginationConfig;

	/** 导航栏 | Layout top bars */
	topBars?: AsyncTheme.TobBarsConfig;

	/** 用户信息 | User info */
	user?: AsyncTheme.UserConfig;

	/** 站点图标 | Configure the icon information of the site */
	favicon?: AsyncTheme.FaviconConfig;

	/** 横幅 | Banner config */
	banner?: AsyncTheme.BannerConfig;

	/** 侧栏 | Sidebar config */
	sidebar?: AsyncTheme.SidebarConfig;

	/** 页脚 | Footer config */
	footer?: AsyncTheme.FooterConfig;

	/** 自定义封面 | Customize the cover image */
	cover?: AsyncTheme.ConverConfig;

	/** 固定按钮 | Fixed button */
	rightside?: AsyncTheme.FixedBtnConfig;

	/** 关于页 | About page Config */
	about?: AsyncTheme.AboutPageConfig;

	/** 友情链接 | Links */
	links?: AsyncTheme.LinksConfig;

	/** 打赏 | Reward */
	reward?: AsyncTheme.RewardConfig;

	/** Creative Commons 4.0 International License.
	https://creativecommons.org/licenses/
	Available values of license: by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero
	You can set a language value if you prefer a translated version of CC license.
	CC licenses are available in 39 languages, where you can find the specific and correct abbreviation you need.
	Valid values of language: deed.zh, deed.en, deed.ja, etc. */
	creativeCommons?: AsyncTheme.CreativeCommonsConfig;

	/** 目录 | outline */
	outline?: DefaultTheme.Outline;
	outlineTitle?: string;

	/** 过期提示 | notice outdate */
	noticeOutdate?: AsyncTheme.NoticeOutdateConfig;
}
// -----------------------------------------------------------------------

import './theme.d.ts';
import Theme, { defineTheme } from '../index';

export default Theme;
export { defineTheme };
