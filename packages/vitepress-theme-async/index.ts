import type { Theme } from 'vitepress';

import './styles/index.less';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';
import { withConfigProvider } from './blog';
// export * from './config/index.js'

export default <Theme>{
	Layout: withConfigProvider(Layout),
	NotFound,
};
