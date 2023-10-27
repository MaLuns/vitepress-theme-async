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
		children?: never;
	}

	interface NavItemWithChildren {
		/**
		 * 标题
		 */
		title?: string;
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

	interface MenuItem {
		title: string;
		link: string;
		level: number;
		children?: MenuItem[];
	}
}

declare namespace AsyncTheme {
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
		dark_logo?: string;
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

	/**
	 * 用户配置 || User config
	 */
	interface UserConfig {
		/**
		 * 站点昵称
		 */
		name?: string;
		first_name?: string;
		last_name?: string;
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
		dark_avatar?: string;
		/**
		 * 站点简介
		 */
		describe?: string;
		/**
		 * 友情链接规则
		 */
		ruleText?: string;
	}

	/**
	 * 顶部导航栏 || Layout top bars
	 */
	declare type TobBarsConfig = Array<AsyncTheme.NavItemWithLink | AsyncTheme.NavItemWithChildren>;

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
		copyright_year?: string;
		/**
		 * 运行时长
		 */
		live_time?: {
			enable?: boolean;
			/**
			 * 前缀
			 */
			prefix?: string;
			/**
			 * 运行计算开始时间
			 */
			start_time?: string;
		};
	}

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

	/**
	 * 友情链接列表 || Links config
	 */
	declare type LinksConfig = Links[];

	/**
	 * 文章封面图 || Post cover image
	 */
	interface ConverConfig {
		default: string;
		type: 'img' | 'date' | 'random';
	}

	/**
	 * 页面分页配置 || [index | archives | categorys | tags] page sort paging config
	 */
	interface PaginationConfig {
		/**
		 * 分页大小
		 */
		per_page?: number;
		/**
		 * 排序方式
		 */
		order_by?: string;
		/**
		 * 归档时日期格式
		 */
		date_fmt?: string;
	}

	/**
	 * 内置页面跳转地址 || built in page path config
	 */
	interface BuiltPageConfig {
		/**
		 * 归档页地址 || archive page url
		 */
		archives?: string;
		/**
		 * 分类页地址 || category page url
		 */
		categorys?: string;
		/**
		 * 标签页地址 || tag page url
		 */
		tags?: string;
	}

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

	/**
	 * 文章版权信息 || Creative commons config
	 */
	interface CreativeCommonsConfig {
		/**
		 * 设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
		 */
		license?: string;
		/**
		 * 设置语言 (deed.zh | deed.en | deed.ja ｜ ...)
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
}

declare module 'vitepress-theme-async/config' {
	import { AsyncThemeConfig } from 'vitepress-theme-async';
	import { UserConfig } from 'vitepress';

	export const defineConfig: (config: UserConfig<AsyncThemeConfig>) => UserConfig<AsyncThemeConfig>;
	export const defaultConfig: AsyncThemeConfig;
}
