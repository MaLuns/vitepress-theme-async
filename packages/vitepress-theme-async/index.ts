import type { Theme } from 'vitepress'

import './styles/index.less'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'

export default <Theme>{
	Layout,
	NotFound
}

