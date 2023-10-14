import { DefaultTheme, Theme } from 'vitepress'
import type { DefineComponent } from 'vue'

declare const theme: Theme

// nav -----------------------------------------------------------------------

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface NavItemWithLink {
	text: string
	link: string
	items?: never

	/**
	 * `activeMatch` is expected to be a regex string. We can't use actual
	 * RegExp object here because it isn't serializable
	 */
	activeMatch?: string
	target?: string
	rel?: string
}

export interface NavItemWithChildren {
	text?: string
	link?: string
	items: NavItemWithLink[]
	/**
	 * `activeMatch` is expected to be a regex string. We can't use actual
	 * RegExp object here because it isn't serializable
	 */
	activeMatch?: string
}

// async-theme-config -----------------------------------------------------------------------

export declare interface AsyncThemeConfig extends DefaultTheme.Config {
	nav?: NavItem[]

	// User info
	user?: {
		name?: string;
		first_name?: string;
		last_name?: string;
		email?: any;
		domain?: string;
		avatar?: string;
		dark_avatar?: string;
		describe?: string;
		ruleText?: string;
	}

	// Configure the icon information of the site
	favicon?: {
		logo?: string;
		dark_logo?: string
		icon16?: string;
		icon32?: string;
		appleTouchIcon?: string;
		webmanifest?: string;
		visibilitychange?: boolean;
		hidden?: string; // Displays an icon when not visible
		showText?: string;
		hideText?: string;
	}

	// Banner settings
	banner?: {
		type?: 'img' | 'video'
		bgurl?: string
		bannerText?: string
		position?: string
		fit?: string
	}

	// Sidebar settings
	sidebar?: {
		typedTextPrefix?: string
		typedText?: string[]
		info?: {
			key: string
			val: string
		}[]
		social?: {
			name: string
			icon: string
			url: string
		}[]
	}

	// Footer settings
	footer?: {
		// theme link (Powered by vitepress).
		powered?: {
			enable: boolean
		}
		/**
		* Beian icp information for Chinese users. In China, every legal website should have a beian icp in website footer.
		* https://beian.miit.gov.cn/
		*/
		beian?: {
			enable: boolean
			icp?: string
		}
		// Copyright date
		copyrightYear?: string
		live_time?: {
			enable?: boolean
			prefix?: string
			start_time?: string
		}
		custom_text?: string
	}

	// The icon used by the theme
	icons?: {
		type: 'font' | 'symbol'
		// Theme switch icon
		sun: string
		moon: string
		// email icon
		email: string
		// Return to the top icon
		back_top: string
		toc_tag: string
		// Secure the button in the lower right corner
		read: string
		arrows: string

		// // Category entry icon
		// next: string
		// // Date of article details
		// calendar: string
		// // Article details time
		// clock: string
		// // Author of article details
		// user: string

		// // close icon
		// close: string
		// // search icon
		// search: string
		// // reward icon
		// reward: string
		// // User information and article directory switch
		// user_tag: string


		// Code highlight fold icon
		// double_arrows: string
		// // Code copy icon
		// copy: string
	}
}

export * from './shim.d.ts'

export default theme