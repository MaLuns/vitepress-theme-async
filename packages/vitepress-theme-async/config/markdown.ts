import { MarkdownOptions, UserConfig } from 'vitepress';

type MarkdownIt = Parameters<NonNullable<MarkdownOptions['config']>>[0];

export const mdCustomAttrPugin = (md: MarkdownIt, type: string, mdOptions: Record<string, any>) => {
	const defaultRenderer = md.renderer.rules[type];

	if (defaultRenderer) {
		md.renderer.rules[type] = function (tokens, idx, options, env, self) {
			const token = tokens[idx];
			if (mdOptions) {
				for (const i in mdOptions) {
					typeof mdOptions[i] === 'function' ? mdOptions[i](token) : token.attrSet(i, mdOptions[i]);
				}
			}
			return defaultRenderer(tokens, idx, options, env, self);
		};
	}
};

export default (config: UserConfig<AsyncThemeConfig>) => {
	const mdConfig = config.markdown?.config;
	config.markdown!.config = md => {
		mdCustomAttrPugin(md, 'image', {
			'data-tag': 'post-image',
			loading: 'lazy',
			onload: 'this.onload=null;this.style.opacity=1;',
		});
		mdConfig?.(md);
	};
};
