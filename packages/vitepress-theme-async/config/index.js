import { mergeConfig as mergeViteConfig } from 'vite';

/**
 * @type {import('vitepress').UserConfig<AsyncThemeConfig>}
 */
export const defaultConfig = {
	lang: 'zh-Hans',
	vite: {
		css: {
			preprocessorOptions: {
				less: {
					globalVars: {
						isReadmode: true,
						isAside: true,
						isReward: true,
						isSearch: true,
						isNoticeOutdate: true,
						isCustomMdStyle: false,
					},
				},
			},
		},
	},
	themeConfig: {
		pageLoading: true,
		themeLoading: true,
		customMdStyle: false,
		author: 'async',
		postDir: 'posts',
		indexGenerator: {
			perPage: 10,
			orderBy: '-date',
		},
		archiveGenerator: {
			perPage: 10,
			orderBy: '-date',
			dateFmt: 'YYYY-MM',
		},
		page: {
			archives: '/archives',
			categories: '/categories',
			tags: '/tags',
		},
		user: {
			name: 'ThemeAsync',
			firstName: 'Theme',
			lastName: 'Async',
			email: null,
			domain: '站点域名',
			describe: '网站简介。',
			ruleText: '暂不接受个人博客以外的友链申请，确保您的网站内容积极向上，文章至少30篇，原创70%以上，部署HTTPS。',
		},
		favicon: {
			visibilitychange: true,
			showText: 'favicon.showText',
			hideText: 'favicon.hideText',
		},
		banner: {
			type: 'img',
			bannerTitle: '树深时见鹿，<br>溪午不闻钟。',
			bannerText: 'Hi my new friend!',
			position: 'top',
			fit: 'cover',
		},
		sidebar: {
			typedTextPrefix: 'I`m',
			typedText: null,
		},
		footer: {
			powered: {
				enable: true,
			},
			beian: {
				enable: false,
				icp: null,
			},
			copyrightYear: null,
			liveTime: {
				enable: false,
				prefix: 'footer.tips',
				startTime: '04/10/2022 17:00:00',
			},
		},
		cover: {
			type: 'img',
		},
		about: {
			title: '如果一切都是镜花水月，那就让这万物走向终结。如果一切皆是命中注定，那就让这世界消失殆尽。',
			introduction:
				'大家好，我是 <strong>Async</strong>，很高兴您能在浩瀚如烟的互联网世界里发现这个博客，更感谢您能够饶有兴致地浏览这个页面。建立这个 Blog 是出于兴趣爱好，我将在此分会分享一些学习笔记，可能还会分享少许图片、视频以及其他有趣东西的链接。',
			blog: `<ul class="trm-list">
				<li>程序：Vitepress </li>
				<li>主题：vitepress-theme-async </li>
			</ul>`,
			privacy:
				'本网站不会追踪访客行为，且不要求访客提供任何敏感信息（比如真实姓名、身份证号码、手机号等），因而也不存在任何隐私泄漏问题。访客参与评论，必须遵守法律法规和基本道德规范，文明礼貌。严禁发布任何有关淫秽、反动、暴力、博彩、恐吓、低俗的内容或违法信息，在尊重言论自由的同时请保持和平与理性。请勿对他人采取不友好的评论或其它过激行为。',
		},
		postPagination: {
			enable: true,
			type: 'small',
		},
		creativeCommons: {
			license: 'by-nc-sa',
			language: 'deed.zh-hans',
			post: true,
			clipboard: false,
		},
		outline: {
			level: [2, 3],
			label: '目录列表',
		},
		noticeOutdate: {
			style: 'simple',
			limitDay: 365,
			position: 'top',
		},
		rss: {
			enable: false,
			limit: 20,
		},
		languages: {
			'zh-Hans': {
				site: {
					title: '本站信息',
					webmaster: '网站名称',
					domain: '网站链接',
					avatar: '网站头像',
					describe: '网站简介',
					ruleText: '友链要求',
					contactMe: '联系我',
				},
				title: {
					links: '友情链接',
					newPublish: '最近发布',
					comment: '留言板',
					author: '作者',
					blog: '博客',
					privacy: '隐私权及评论',
					more: '查看分类',
					allArchives: '所有归档',
					yearArchives: '{0} 年的归档',
					otherArticles: '其他文章',
					unclassified: '未分类',
				},
				menu: {
					home: '首页',
					archives: '归档',
					categorys: '分类',
					tags: '标签',
					links: '友链',
					about: '关于',
				},
				favicon: {
					showText: '(/≧▽≦/)咦！又好了！',
					hideText: '(●—●)喔哟，崩溃啦！',
				},
				post: {
					sticky: '置顶',
					noticeOutdateMessage: '距离上次更新已经 {0} 天了, 文章内容可能已经过时。',
					rewardComment: '我很可爱，请给我钱',
					copyright: {
						author: '本文作者',
						link: '本文链接',
						licenseTitle: '版权声明',
						licenseContent: '本博客所有文章除特别声明外，均默认采用 {0} 许可协议。',
					},
				},
				rightside: {
					search: '搜索',
					backToTop: '返回顶部',
					toc: '文章目录',
					theme: {
						dark: '切换到暗黑模式',
						light: '切换到明亮模式',
					},
					aside: {
						open: '切换单栏模式',
						exit: '退出单栏模式',
					},
					readMode: {
						open: '进入阅读模式',
						exit: '退出阅读模式',
					},
				},
				footer: {
					powered: '由 {0} 驱动',
					theme: '主题',
					tips: '博客已萌萌哒运行 {0} 天',
					day: '天',
					hour: '时',
					minute: '分',
					seconds: '秒',
				},
				symbol: {
					comma: '，',
					period: '。',
					colon: '：',
				},
			},
			en: {
				site: {
					title: 'Site Information',
					webmaster: 'Webmaster',
					domain: 'Domain',
					avatar: 'Avatar',
					describe: 'Describe',
					ruleText: 'Friend chain requirements',
					contactMe: 'Contact Me',
				},
				title: {
					links: 'Friendly Link',
					newPublish: 'Newest Publications',
					comment: 'Message',
					author: 'Author',
					blog: 'Blog Application',
					privacy: 'Privacy and Comments',
					more: 'Read More',
					allArchives: 'All Archives',
					yearArchives: 'Archive for {0}',
					otherArticles: 'Other Articles',
					unclassified: 'Unclassified',
				},
				menu: {
					home: 'Home',
					archives: 'Archives',
					categorys: 'Categorys',
					tags: 'Tags',
					links: 'Links',
					about: 'About',
				},
				favicon: {
					showText: '(/≧▽≦/)Hey! Good again!',
					hideText: '(●—●)Oh, crash!',
				},
				post: {
					sticky: 'TOP',
					rewardComment: "I'm so cute. Please give me money.",
					noticeOutdateMessage: 'It has been {0} days since the last update, the content of the article may be outdated.',
					copyright: {
						author: 'Post author',
						link: 'Post link',
						licenseTitle: 'Copyright notice',
						licenseContent: 'All articles in this blog are licensed under {0} unless otherwise stated.',
					},
				},
				rightside: {
					search: 'Search',
					backToTop: 'Back To Top',
					toc: 'Article table of contents',
					theme: {
						dark: 'Switch to dark mode',
						light: 'Switch to light mode',
					},
					aside: {
						open: 'Enter single column mode',
						exit: 'Exit single column mode',
					},
					readMode: {
						open: 'Enter reading mode',
						exit: 'Exit reading mode',
					},
				},
				footer: {
					powered: 'Powered by {0}',
					theme: 'Theme',
					tips: 'The blog has been lovely to run {0} day',
					day: 'day',
					hour: 'hour',
					minute: 'minute',
					seconds: 'seconds',
				},
				symbol: {
					comma: ', ',
					period: '. ',
					colon: ': ',
				},
			},
		},
	},
};

/**
 * @type {(config: import('vitepress').UserConfig<AsyncThemeConfig>) => import('vitepress').UserConfig<AsyncThemeConfig>}
 */
export const defineConfig = config => {
	if (Array.isArray(config.themeConfig?.outline?.level)) {
		defaultConfig.themeConfig.outline.level = [];
	}

	config = mergeConfig(defaultConfig, config);
	config.head = config.head ?? [];

	if (config.themeConfig.favicon.icon16) {
		config.head.push([
			'link',
			{
				href: config.themeConfig.favicon.icon16,
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
			},
		]);
	}
	if (config.themeConfig.favicon.icon32) {
		config.head.push([
			'link',
			{
				href: config.themeConfig.favicon.icon32,
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
			},
		]);
	}
	if (config.themeConfig.favicon.appleTouchIcon) {
		config.head.push([
			'link',
			{
				href: config.themeConfig.favicon.appleTouchIcon,
				rel: 'apple-touch-icon',
				sizes: '180x180',
			},
		]);
	}
	if (config.themeConfig.favicon.webmanifest) {
		config.head.push([
			'link',
			{
				href: config.themeConfig.favicon.webmanifest,
				rel: 'manifest',
			},
		]);
	}

	// 处理 less 配置
	config.vite.css.preprocessorOptions.less.globalVars.isReadmode = Boolean(config.themeConfig?.rightside?.readmode);
	config.vite.css.preprocessorOptions.less.globalVars.isAside = Boolean(config.themeConfig?.rightside?.aside);
	config.vite.css.preprocessorOptions.less.globalVars.isReward = Boolean(config.themeConfig?.reward?.enable);
	config.vite.css.preprocessorOptions.less.globalVars.isSearch = Boolean(config.themeConfig?.search?.provider === 'local');
	config.vite.css.preprocessorOptions.less.globalVars.isCustomMdStyle = Boolean(config.themeConfig?.customMdStyle);

	if (config.themeConfig.rss.enable) {
		const selfBuildEnd = config.buildEnd;
		config.buildEnd = async siteConfig => {
			await selfBuildEnd?.(siteConfig);
			(await import('../plugin/rss.js'))?.genFeed(siteConfig);
		};
	}

	return config;
};

const mergeConfig = (a, b, isRoot = true) => {
	const merged = { ...a };
	for (const key in b) {
		const value = b[key];
		if (value == null) {
			continue;
		}
		const existing = merged[key];
		if (Array.isArray(existing) && Array.isArray(value)) {
			merged[key] = [...existing, ...value];
			continue;
		}
		if (isObject(existing) && isObject(value)) {
			if (isRoot && key === 'vite') {
				merged[key] = mergeViteConfig(existing, value);
			} else {
				merged[key] = mergeConfig(existing, value, false);
			}
			continue;
		}
		merged[key] = value;
	}
	return merged;
};

const isObject = value => Object.prototype.toString.call(value) === '[object Object]';
