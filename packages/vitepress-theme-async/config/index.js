/* eslint-disable no-undef */

/**
 * @type {() => Promise<import('vitepress').UserConfig<import('../types').AsyncThemeConfig>>}
 */
export default async () => {
	return {
		themeConfig: {
			postDir: 'posts',
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
				// logo: '/img/favicon.svg',
				// icon16: '/img/favicon.svg',
				// icon32: '/img/favicon.svg',
				appleTouchIcon: null,
				webmanifest: null,
				visibilitychange: false,
				// hidden: '/img/failure.ico',
				showText: 'favicon.showText',
				hideText: 'favicon.hideText',
			},
			banner: {
				type: 'img',
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
		},
	};
};
