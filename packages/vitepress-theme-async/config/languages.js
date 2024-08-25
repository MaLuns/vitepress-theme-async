/**
 * @type {import('../types/theme')}
 * @typedef {AsyncTheme.Language} Language
 */

/**
 * 语言文件
 * @type {Record<string,Language>}
 */
const lang = {
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
		notFound: {
			title: '404 未找到页面',
			text: '您正在查找的页面不存在。您是怎么到这里来的是个谜,但是您可以点击下面的按钮返回主页。',
			name: '首页',
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
		notFound: {
			title: '404 Not Found',
			text: 'The requested page does not exist. The method of arrival is unknown, but you can click the button below to navigate back to the homepage.',
			name: 'Home',
		},
	},
};

export default lang;
