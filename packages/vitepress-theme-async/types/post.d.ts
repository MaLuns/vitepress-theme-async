// 文章卡片信息
interface PostFrontmatter {
	title?: string
	date?: string
	categories?: string
	tags?: string | string[]
	cover?: string | string[]
	sticky?: number
}