declare const __ALGOLIA__: boolean;
declare const __VP_LOCAL_SEARCH__: boolean;

declare type AnyObject = Record<string, any>;

/** 配置且在主题中使用 */
declare namespace AsyncTheme {
	type MittEvents = {
		/** 页码更新 */
		'page:update': any;
	};

	type OrderByArg = string | Record<string | number, 1 | -1>;

	// md 中 layout 类型
	type PageType = 'archives' | 'categories' | 'tags' | 'index';

	//#region PostData
	/** 文章基础信息 */
	interface PostData {
		/**
		 * 文件地址
		 */
		filePath: string;
		/**
		 * url
		 */
		url: string;
		/**
		 * 摘要
		 */
		excerpt: string;
		/**
		 * 标题
		 */
		title: string;
		/**
		 * 文章日期
		 */
		date: number;
		/**
		 * 最后修改日期
		 */
		lastUpdated: number;
		/**
		 *
		 */
		layout?: string;
		/**
		 * 作者
		 */
		author?: string;
		/**
		 * 排序值
		 */
		sticky?: number;
		/**
		 * 分类
		 */
		categories?: string[];
		/**
		 * 标签
		 */
		tags?: string[];
		/**
		 * 封面
		 */
		cover?: {
			default: string | string[];
			type: 'img' | 'date' | 'random';
		};
	}
	//#endregion PostData

	//#region NavItemWithLink
	/** 导航栏链接 */
	interface NavItemWithLink {
		/**
		 * 标题
		 */
		title: string;
		/**
		 * 链接
		 */
		url: string;
		/**
		 * 激活匹配规则
		 * `activeMatch` is expected to be a regex string. We can't use actual
		 * RegExp object here because it isn't serializable
		 */
		activeMatch?: string;
		/**
		 * 打开方式
		 */
		target?: string;
		/**
		 * HTML rel
		 */
		rel?: string;
		/**
		 * 子级
		 */
		children?: never;
	}

	interface NavItemWithChildren {
		/**
		 * 标题
		 */
		title: string;
		/**
		 * 链接
		 */
		url?: string;
		/**
		 * 激活匹配规则
		 * `activeMatch` is expected to be a regex string. We can't use actual
		 * RegExp object here because it isn't serializable
		 */
		activeMatch?: string;
		/**
		 * 打开方式
		 */
		target?: string;
		/**
		 * HTML rel
		 */
		rel?: string;
		/**
		 * 子级
		 */
		children: NavItemWithLink[];
	}
	//#endregion NavItemWithLink

	//#region Links
	/** 友情链接 */
	interface Links {
		/**
		 * 昵称
		 */
		name: string;
		/**
		 * 链接
		 */
		url: string;
		/**
		 * 头像
		 */
		image: string;
		/**
		 * 描述
		 */
		desc?: string;
	}
	//#endregion Links

	//#region MenuItem
	/** 文章目录 */
	interface MenuItem {
		title: string;
		link: string;
		level: number;
		children?: MenuItem[];
	}
	//#endregion MenuItem

	//#region Language
	/** 语言文件 */
	interface Language {
		site: {
			title: string;
			webmaster: string;
			domain: string;
			avatar: string;
			describe: string;
			ruleText: string;
			contactMe: string;
		};

		// 页面模块小标题
		title: {
			links: string;
			newPublish: string;
			comment: string;
			author: string;
			blog: string;
			privacy: string;
			more: string;
			allArchives: string;
			yearArchives: string;
			otherArticles: string;
			unclassified: string;
			themeColor: string;
		};

		// 菜单
		menu: {
			home: string;
			categorys: string;
			archives: string;
			tags: string;
			links: string;
			about: string;
		};

		// 标题栏
		favicon: {
			showText: string;
			hideText: string;
		};

		// 文章内容
		post: {
			sticky: string;
			rewardComment: string;
			noticeOutdateMessage: string;
			copyright: {
				author: string;
				link: string;
				licenseTitle: string;
				licenseContent: string;
			};
		};

		// 按钮块
		rightside: {
			search: string;
			backToTop: string;
			toc: string;
			theme: {
				dark: string;
				light: string;
			};
			aside: {
				open: string;
				exit: string;
			};
			readMode: {
				open: string;
				exit: string;
			};
		};

		// 页脚
		footer: {
			powered: string;
			theme: string;
			tips: string;
			day: string;
			hour: string;
			minute: string;
			seconds: string;
		};

		// 符号
		symbol: {
			comma: string;
			period: string;
			colon: string;
		};

		// 404
		notFound: {
			title: string;
			text: string;
			name: string;
		};
	}
	//#endregion Language
}

/** 仅配置相关 */
declare namespace AsyncTheme {
	//#region FaviconConfig
	/**
	 * 网站图标配置 || Configure the icon information of the blog
	 */
	interface FaviconConfig {
		/**
		 * logo
		 */
		logo?: string;
		/**
		 *  dark 下使用
		 */
		darkLogo?: string;
		/**
		 * 网站图标
		 */
		icon16?: string;
		/**
		 * 网站图标
		 */
		icon32?: string;
		/**
		 * iOS 添加到主屏幕使用图标
		 */
		appleTouchIcon?: string;
		/**
		 * 网站清单配置
		 */
		webmanifest?: string;
		/**
		 * 是否监听选项卡可见事件
		 */
		visibilitychange?: boolean;
		/**
		 * 选项卡不可见时显示角标
		 */
		hidden?: string;
		/**
		 * 选项卡不可见 显示文案
		 */
		showText?: string;
		/**
		 * 选项卡由不可见切换为可见时显示文案
		 */
		hideText?: string;
	}
	//#endregion FaviconConfig

	//#region UserConfig
	/**
	 * 用户配置 || User config
	 */
	interface UserConfig {
		/**
		 * 站点昵称
		 */
		name?: string;
		/**
		 * 名 - 用于顶部左侧 logo 边文字组成
		 */
		firstName?: string;
		/**
		 * 姓  - 用于顶部左侧 logo 边文字组成
		 */
		lastName?: string;
		/**
		 * 邮箱
		 */
		email?: string;
		/**
		 * 域名
		 */
		domain?: string;
		/**
		 * 头像
		 */
		avatar?: string;
		/**
		 * dark 下使用
		 */
		darkAvatar?: string;
		/**
		 * 站点简介
		 */
		describe?: string;
		/**
		 * 友情链接规则
		 */
		ruleText?: string;
	}
	//#endregion UserConfig

	//#region TobBarsConfig
	/**
	 * 顶部导航栏 || Layout top bars
	 */
	type TobBarsConfig = Array<AsyncTheme.NavItemWithLink | AsyncTheme.NavItemWithChildren>;
	//#endregion TobBarsConfig

	//#region BannerConfig
	/**
	 * 横幅配置 || Layout banner config
	 */
	interface BannerConfig {
		/**
		 * 横幅类型
		 */
		type?: 'img' | 'video';
		/**
		 * 横幅资源路径地址
		 */
		bgurl?: string;
		/**
		 * 横幅标题
		 */
		bannerTitle?: string;
		/**
		 * 横幅描述
		 */
		bannerText?: string;
		/**
		 * 同 CSS object-position
		 */
		position?: string;
		/**
		 * 同 CSS object-fit
		 */
		fit?: string;
	}
	//#endregion BannerConfig

	//#region SidebarConfig
	/**
	 * 侧栏配置 || Layout sidebar config
	 */
	interface SidebarConfig {
		/**
		 * 打字动画固定前缀
		 */
		typedTextPrefix?: string;
		/**
		 * 打字动画切换文案
		 */
		typedText?: string[];
		/**
		 * 个人信息
		 */
		info?: {
			key: string;
			val: string;
		}[];
		/**
		 * 社交地址图标链接
		 */
		social?: {
			/**
			 * 名称
			 */
			name: string;
			/**
			 * svg  eg: icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`
			 */
			icon: string;
			/**
			 * 链接
			 */
			url: string;
		}[];
	}
	//#endregion SidebarConfig

	//#region FooterConfig
	/**
	 * 页脚配置 || Layout footer config
	 */
	interface FooterConfig {
		/**
		 * 是否显示 vitepress 和 主题
		 * theme link (Powered by vitepress).
		 */
		powered?: {
			enable: boolean;
		};
		/**
		 * 备案信息
		 * Beian icp information for Chinese users. In China, every legal website should have a beian icp in website footer.
		 * https://beian.miit.gov.cn/
		 */
		beian?: {
			enable: boolean;
			icp?: string;
		};
		/**
		 * 版权开始年号
		 */
		copyrightYear?: string;
		/**
		 * 运行时长
		 */
		liveTime?: {
			enable?: boolean;
			/**
			 * 前缀
			 */
			prefix?: string;
			/**
			 * 运行计算开始时间
			 */
			startTime?: string;
		};
	}
	//#endregion FooterConfig

	//#region AboutPageConfig
	/**
	 * 关于页 || About page config
	 */
	interface AboutPageConfig {
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 个人简单描述
		 */
		introduction?: string;
		/**
		 * 博客信息
		 */
		blog?: string;
		/**
		 * 隐私权说明
		 */
		privacy?: string;
	}
	//#endregion AboutPageConfig

	//#region LinksConfig
	/**
	 * 友情链接列表 || Links config
	 */
	type LinksConfig = Links[];
	//#endregion LinksConfig

	//#region ConverConfig
	/**
	 * 文章封面图 || Post cover image
	 */
	interface ConverConfig {
		default?: string;
		type?: 'img' | 'date' | 'random';
	}
	//#endregion ConverConfig

	//#region IndexGeneratorConfig
	/**
	 * 页面分页配置 || [index | archives | categorys | tags] page sort paging config
	 */
	interface IndexGeneratorConfig {
		/**
		 * 分页大小
		 */
		perPage?: number;
		/**
		 * 排序方式
		 */
		orderBy?: string;
		/**
		 * 分页是否生成静态文件
		 */
		static?: boolean;
	}
	//#endregion IndexGeneratorConfig

	//#region BuiltPageConfig
	/**
	 * 内置页面跳转地址 || built in page path config
	 */
	type BuiltPageConfig = {
		/**
		 * 分类页地址 默认为 /categories
		 * @deprecated 使用 categories
		 */
		categorys?: string;
	} & {
		/**
		 * 归档页 分类页 标签页地址 eg: /archives /categories /tags
		 */
		[k in PageType]?: string;
	};
	//#endregion BuiltPageConfig

	//#region FixedBtnConfig
	/**
	 * 固定按钮显示配置 || Fixed button config on the right
	 */
	interface FixedBtnConfig {
		/**
		 * 阅读模式按钮
		 */
		readmode?: boolean;
		/**
		 * 单双栏切换按钮
		 */
		aside?: boolean;
	}
	//#endregion FixedBtnConfig

	//#region PostPaginationConfig
	/**
	 * 文章上下页 || the upper and lower pages of the article
	 */
	interface PostPaginationConfig {
		/**
		 * 文章底部是否显示上下篇
		 */
		enable?: boolean;
		/**
		 * 上下篇卡片样式
		 */
		type?: 'large' | 'small';
	}
	//#endregion PostPaginationConfig

	//#region RewardConfig
	/**
	 * 打赏配置 || Reward config
	 */
	interface RewardConfig {
		/**
		 * 是否显示打赏按钮
		 */
		enable?: boolean;
		/**
		 * 打赏按钮下的描述
		 */
		comment?: string;
		/**
		 * 打赏链接（当开启打赏链接时，将自动跳转您的外部链接而不是展开二维码）
		 */
		url?: string;
		/**
		 * 打赏二维码
		 */
		methods?: {
			/**
			 * 二维码地址
			 */
			path: string;
			/**
			 * 二维码描述
			 */
			name: string;
			/**
			 * 点击二维码跳转链接
			 */
			link?: string;
		}[];
	}
	//#endregion RewardConfig

	//#region CreativeCommonsConfig
	/**
	 * 文章版权信息 || Creative commons config
	 */
	interface CreativeCommonsConfig {
		/**
		 * 设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
		 */
		license?: string;
		/**
		 * 设置语言 (deed.zh-hans | deed.en | deed.ja ｜ ...)
		 */
		language?: string;
		/**
		 * 在每篇文章末尾显示
		 */
		post?: boolean;
		/**
		 * 是否在复制文章时，在剪贴板中追加版权信息（默认关闭）
		 */
		clipboard?: boolean;
	}
	//#endregion CreativeCommonsConfig

	//#region NoticeOutdateConfig
	/**
	 * 过期提取 || notice outdate
	 */
	interface NoticeOutdateConfig {
		/**
		 * 是否启用
		 */
		enable?: boolean;
		/**
		 * 样式
		 */
		style?: 'simple' | 'flat';
		/**
		 * 距离今天多少天时显示
		 */
		limitDay?: number;
		/**
		 * 显示在文章中位置
		 */
		position?: 'top' | 'bottom';
	}
	//#endregion NoticeOutdateConfig

	//#region RSSConfig
	/**
	 * RSS 生成
	 */
	interface RSSConfig {
		/**
		 * 是否启用
		 */
		enable?: boolean;
		/**
		 * 你的站点地址 eg: https://www.imalun.com
		 */
		baseUrl: string;
		/**
		 * 限制输出文件包含的文章数量
		 * @description (0 不限制；> 1 会按照日期排序对输出内容进行调整)
		 */
		limit?: number;
		/**
		 * 生成文件名
		 */
		fileName?: string;
		/**
		 * Feed 配置项
		 */
		feedOptions?: import('feed').FeedOptions;
	}
	//#endregion RSSConfig

	//#region CategorieCardConfig
	/**
	 * 首页中显示的分类卡片
	 */
	interface CategorieCardConfig {
		/**
		 * 是否启用
		 */
		enable?: boolean;
		/**
		 * 需要显示分类数量，默认为 2 个
		 */
		len?: number;
		/**
		 * 固定显示分类
		 */
		list?: string[];
	}
	//#endregion CategorieCardConfig

	//#region SearchConfig
	/**
	 * 搜索配置
	 */
	interface SearchConfig {
		provider: 'local';
		options?: import('vitepress').DefaultTheme.LocalSearchOptions;
	}
	//#endregion SearchConfig

	//#region ArchiveGeneratorConfig
	/**
	 * 归档页生成和配置
	 */
	interface ArchiveGeneratorConfig extends AsyncTheme.IndexGeneratorConfig {
		/**
		 * 归档页时间轴卡片样式 */
		style?: 'less' | 'more';
		/**
		 * 归档时日期格式
		 */
		dateFmt?: string;
	}
	//#endregion ArchiveGeneratorConfig

	//#region NotFoundConfig
	/**
	 * 404 文案配置
	 */
	interface NotFoundConfig {
		/**
		 * 标题文案
		 */
		title?: string;
		/**
		 * 提示文案
		 */
		text?: string;
		/**
		 * 点击按钮跳转地址
		 */
		path?: string;
		/**
		 * 按钮显示文案
		 */
		name?: string;
	}
	//#endregion NotFoundConfig

	//#region PluginConfig
	/**
	 * 插件配置
	 */
	interface PluginConfig {
		/**
		 * 插件 CDN 源
		 */
		thirdPartyProvider: string;
		/**
		 * 插件列表
		 */
		plugins?: {
			/** 图片预览插件 */
			fancybox?: {
				css?: string;
				js?: string;
			};
			/** 图片排版插件 */
			flickrJustifiedGallery?: string;
		};
	}
	//#endregion PluginConfig

	//#region ErrorImgConfig
	/**
	 * 破图时默认图片
	 */
	interface ErrorImgConfig {
		/**
		 * 友链头像破图时显示默认图片
		 */
		flink?: string;
		/**
		 * 文章破图时显示默认图片
		 */
		postPage?: string;
	}
	//#endregion ErrorImgConfig

	//#region ThemeColorConfig
	/**
	 * 主题色配置
	 */
	interface ThemeColorConfig {
		/**
		 * 开启自定义主题色
		 */
		enable?: boolean;
		/**
		 * 主色调
		 */
		primary?: string | [string, string];
		/**
		 * 主色调弱
		 */
		primaryWeak?: string | [string, string];
		/**
		 * body 字体色
		 */
		bodyColor?: string | [string, string];
		/**
		 * body 背景色
		 */
		bodyBgColor?: string | [string, string];
		/**
		 * 主题字体色，
		 */
		themeColor?: string | [string, string];
		/**
		 * 主题背景色，用于各种卡片背景色
		 */
		themeBgColor?: string | [string, string];
		/**
		 * 主题背景色-2，用于底部背景区域
		 */
		themeBg2Color?: string | [string, string];
	}
	//#endregion ThemeColorConfig
}

// async-theme-config -----------------------------------------------------------------------
declare interface AsyncThemeConfig {
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
	search?: AsyncTheme.SearchConfig;

	/** 时区 | timeZone*/
	timeZone?: number;

	/** 文章目录 | post folder */
	postDir?: string;

	/** 内置页地址配置 | built in page path config */
	page?: AsyncTheme.BuiltPageConfig;

	/** 首页生成 | Index page generator */
	indexGenerator?: AsyncTheme.IndexGeneratorConfig;

	/** 归档页生成 | Archive generator */
	archiveGenerator?: AsyncTheme.ArchiveGeneratorConfig;

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
	links?: AsyncTheme.LinksConfig | string;

	/** 打赏 | Reward */
	reward?: AsyncTheme.RewardConfig;

	/** Creative Commons 4.0 International License.
	https://creativecommons.org/licenses/
	Available values of license: by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero
	You can set a language value if you prefer a translated version of CC license.
	CC licenses are available in 39 languages, where you can find the specific and correct abbreviation you need.
	Valid values of language: deed.zh-hans, deed.en, deed.ja, etc. */
	creativeCommons?: AsyncTheme.CreativeCommonsConfig;

	/** 目录 | outline */
	outline?: import('vitepress').DefaultTheme.Outline;

	/** 过期提示 | notice outdate */
	noticeOutdate?: AsyncTheme.NoticeOutdateConfig;

	/** rss */
	rss?: AsyncTheme.RSSConfig;

	/** 语言 | i18n */
	languages?: Record<string, DeepPartial<AsyncTheme.Language>>;

	/** 路径去除文章文件夹 eg: /posts/demo.md => demo.md => demo.html  */
	rewritePost?: boolean;

	/** 首页分类卡片 | categorie card */
	categorieCard?: AsyncTheme.CategorieCardConfig;

	/** 404 | Not Found */
	notFound?: AsyncTheme.NotFoundConfig;

	/** 三方 CDN 插件 */
	plugin?: AsyncTheme.PluginConfig;

	/** 破图时默认图片 | Replace Broken Images  */
	errorImg?: AsyncTheme.ErrorImgConfig;

	/** 主题配置 | Theme config */
	themeColor?: AsyncTheme.ThemeColorConfig;
}
// -----------------------------------------------------------------------

declare module 'vitepress-theme-async/config' {
	import { UserConfig } from 'vitepress';

	export function defineConfig(config: UserConfig<AsyncThemeConfig>): UserConfig<AsyncThemeConfig>;
	export const defaultConfig: UserConfig<AsyncThemeConfig>;
}

declare module '@localSearchIndex' {
	const data: Record<string, () => Promise<{ default: string }>>;
	export default data;
}

declare type DeepKeys<T> = T extends object
	? {
			[K in keyof T]-?: K extends string ? (T[K] extends object ? `${K}.${DeepKeys<T[K]>}` : `${K}`) : never;
	  }[keyof T]
	: never;

declare type DiffDateSuffix = {
	month: string;
	day: string;
	hour: string;
	min: string;
	just: string;
};

declare type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;

declare interface Window {
	fjGallery?: any;
	Fancybox?: any;
}
