declare type AnyObject = Record<string, any>;
declare namespace Theme {
	declare type OrderByArg = string | Record<string | number, 1 | -1>;

	interface PostData {
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
		lastUpdateDate: number;
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
}
