
import { ContentData, createContentLoader } from 'vitepress'



declare const data: ContentData[]

export { data }

export default createContentLoader('posts/*.md', {
	// render: true,     // include rendered full page HTML?
	excerpt: (file) => {
		const reg = /<!--\s*more\s*-->/gs
		const rpt = reg.exec(file.content)
		if (rpt) {
			file.excerpt = file.content.substring(0, rpt.index)
		} else {
			file.excerpt = ""
		}
	},
})


