declare type AnyObject = Record<string, any>;

declare namespace AsyncTheme {
	declare type OrderByArg = string | Record<string | number, 1 | -1>;

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
			default: string;
			type: 'img' | 'date' | 'random';
		};
	}

	interface NavItemWithLink {
		title: string;
		url: string;
		/**
		 * `activeMatch` is expected to be a regex string. We can't use actual
		 * RegExp object here because it isn't serializable
		 */
		activeMatch?: string;
		target?: string;
		rel?: string;
		children?: never;
	}

	interface NavItemWithChildren {
		title?: string;
		url?: string;
		/**
		 * `activeMatch` is expected to be a regex string. We can't use actual
		 * RegExp object here because it isn't serializable
		 */
		activeMatch?: string;
		target?: string;
		rel?: string;
		children: NavItemWithLink[];
	}

	interface Links {
		name: string;
		url: string;
		image: string;
		desc?: string;
	}

	interface MenuItem {
		title: string;
		link: string;
		level: number;
		children?: MenuItem[];
	}
}

declare namespace AsyncTheme {
	// Configure the icon information of the blog
	interface FaviconConfig {
		logo?: string;
		dark_logo?: string;
		icon16?: string;
		icon32?: string;
		appleTouchIcon?: string;
		webmanifest?: string;
		visibilitychange?: boolean;
		hidden?: string; // Displays an icon when not visible
		showText?: string;
		hideText?: string;
	}

	// User config
	interface UserConfig {
		name?: string;
		first_name?: string;
		last_name?: string;
		email?: string;
		domain?: string;
		avatar?: string;
		dark_avatar?: string;
		describe?: string;
		ruleText?: string;
	}

	// Layout top bars
	declare type TobBarsConfig = Array<AsyncTheme.NavItemWithLink | AsyncTheme.NavItemWithChildren>;

	// Layout banner config
	interface BannerConfig {
		type?: 'img' | 'video';
		bgurl?: string;
		bannerText?: string;
		position?: string;
		fit?: string;
	}

	// Layout sidebar config
	interface SidebarConfig {
		typedTextPrefix?: string;
		typedText?: string[];
		info?: {
			key: string;
			val: string;
		}[];
		social?: {
			name: string;
			icon: string;
			url: string;
		}[];
	}

	// Layout footer config
	interface FooterConfig {
		// theme link (Powered by vitepress).
		powered?: {
			enable: boolean;
		};
		/**
		 * Beian icp information for Chinese users. In China, every legal website should have a beian icp in website footer.
		 * https://beian.miit.gov.cn/
		 */
		beian?: {
			enable: boolean;
			icp?: string;
		};
		// copyright date
		copyright_year?: string;
		// run day
		live_time?: {
			enable?: boolean;
			prefix?: string;
			start_time?: string;
		};
		custom_text?: string;
	}

	// Theme use icon
	interface IconsConfig {
		type: 'font' | 'symbol';
		// Theme switch icon
		sun: string;
		moon: string;
		// email icon
		email: string;
		// Return to the top icon
		back_top: string;
		toc_tag: string;
		// Secure the button in the lower right corner
		read: string;
		arrows: string;
		// Category entry icon
		next: string;
		// Date of article details
		calendar: string;
		// Article details time
		clock: string;
		// Author of article details
		user: string;
		// reward icon
		reward: string;

		// // close icon
		// close: string
		// // search icon
		// search: string
		// // User information and article directory switch
		// user_tag: string

		// Code highlight fold icon
		// double_arrows: string
		// // Code copy icon
		// copy: string
	}

	// About page config
	interface AboutPageConfig {
		title?: string;
		introduction?: string;
		blog?: string;
		privacy?: string;
	}

	// Links config
	declare type LinksConfig = Links[];

	// Post cover image
	interface ConverConfig {
		default: string;
		type: 'img' | 'date' | 'random';
	}

	// [index | archives | categorys | tags] page sort paging config
	interface PaginationConfig {
		per_page?: number;
		order_by?: string;
		date_fmt?: string;
	}

	// built in page path config
	interface BuiltPageConfig {
		/** archive page url */
		archives?: string;
		/** category page url */
		categorys?: string;
		/** tag page url */
		tags?: string;
	}

	// Fixed button config on the right
	interface FixedBtnConfig {
		readmode?: boolean;
		aside?: boolean;
	}

	/* the upper and lower pages of the article */
	interface PostPaginationConfig {
		enable?: boolean;
		type?: 'large' | 'small';
	}

	/* Reward config */
	interface RewardConfig {
		enable?: boolean;
		comment?: string;
		url?: string;
		methods?: {
			link?: string;
			path: string;
			name: string;
		}[];
	}

	/* Creative commons config */
	interface CreativeCommonsConfig {
		license?: string;
		language?: string;
		post?: boolean;
		clipboard?: boolean;
	}
}
