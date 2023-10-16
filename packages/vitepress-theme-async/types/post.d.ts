// 文章卡片信息
interface PostFrontmatter {
	title?: string;
	date?: string;
	categories?: string;
	tags?: string | string[];
	cover?: {
		default: string;
		type: 'img' | 'date' | 'random';
	};
	sticky?: number;
}
