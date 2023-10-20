import { mergeConfig as mergeViteConfig } from 'vite';

/**
 * @type {import('vitepress').UserConfig<import('../types').AsyncThemeConfig>}
 */
export const defaultConfig = {
	themeConfig: {
		author: 'async',
		postDir: 'posts',
		index_generator: {
			per_page: 10,
			order_by: '-date',
		},
		archive_generator: {
			per_page: 10,
			order_by: '-date',
			date_fmt: 'YYYY-MM',
		},
		page: {
			archives: '/archives',
			categories: '/categories',
			tags: '/tags',
		},
		user: {
			name: 'ThemeAsync',
			first_name: 'Theme',
			last_name: 'Async',
			email: null,
			domain: '站点域名',
			// avatar: '/img/avatar.jpg',
			describe: '网站简介。',
			ruleText: '暂不接受个人博客以外的友链申请，确保您的网站内容积极向上，文章至少30篇，原创70%以上，部署HTTPS。',
		},
		favicon: {
			visibilitychange: true,
			showText: '(/≧▽≦/)咦！又好了！',
			hideText: '(●—●)喔哟，崩溃啦！',
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
			info: [
				{
					key: 'sidebar.residence',
					val: 'Mars',
				},
			],
			social: [
				{
					name: 'Github',
					icon: 'fab fa-github',
					url: 'https://github.com',
				},
			],
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
			live_time: {
				enable: false,
				prefix: 'footer.tips',
				start_time: '04/10/2022 17:00:00',
			},
			custom_text: null,
		},
		icons: {
			type: 'font',
			sun: 'far fa-sun',
			moon: 'far fa-moon',
			play: 'fas fa-play',
			email: 'far fa-envelope',
			next: 'fas fa-arrow-right',
			calendar: 'far fa-calendar-alt',
			clock: 'far fa-clock',
			user: 'far fa-user',
			back_top: 'fas fa-arrow-up',
			close: 'fas fa-times',
			search: 'fas fa-search',
			reward: 'fas fa-hand-holding-usd',
			user_tag: 'fas fa-user-alt',
			toc_tag: 'fas fa-th-list',
			read: 'fas fa-book-reader',
			arrows: 'fas fa-arrows-alt-h',
			double_arrows: 'fas fa-angle-double-down',
			copy: 'fas fa-copy',
		},
		cover: {
			type: 'img',
		},
		about: {
			title: '如果一切都是镜花水月，那就让这万物走向终结。如果一切皆是命中注定，那就让这世界消失殆尽。',
			introduction:
				'大家好，我是 <strong>Async</strong>，很高兴您能在浩瀚如烟的互联网世界里发现这个博客，更感谢您能够饶有兴致地浏览这个页面。建立这个 Blog 是出于兴趣爱好，我将在此分会分享一些学习笔记，可能还会分享少许图片、视频以及其他有趣东西的链接。',
			blog: `<ul class="trm-list">
				<li>程序：Hexo </li>
				<li>主题：Hexo-theme-async </li>
			</ul>`,
			privacy:
				'本网站不会追踪访客行为，且不要求访客提供任何敏感信息（比如真实姓名、身份证号码、手机号等），因而也不存在任何隐私泄漏问题。访客参与评论，必须遵守法律法规和基本道德规范，文明礼貌。严禁发布任何有关淫秽、反动、暴力、博彩、恐吓、低俗的内容或违法信息，在尊重言论自由的同时请保持和平与理性。请勿对他人采取不友好的评论或其它过激行为。',
		},
		post_pagination: {
			enable: true,
			type: 'small',
		},
		creative_commons: {
			license: 'by-nc-sa',
			language: 'deed.zh',
			post: true,
			clipboard: false,
		},
		outline: {
			level: [2, 3],
			label: '目录列表',
		},
	},
};

/**
 * @type {(config: import('vitepress').UserConfig<import('../types').AsyncThemeConfig>) => import('vitepress').UserConfig<import('../types').AsyncThemeConfig>}
 */
export const defineConfig = config => {
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
