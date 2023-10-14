import { AsyncThemeConfig } from "types/index.js";
import { useData } from "vitepress";

import bannerImg from '../assets/banner.png'

// import failureImg from '../assets/img/failure.ico'


// 获取主题配置
export const useTheme = () => {
	const { theme } = useData<AsyncThemeConfig>();
	return theme
}

// 获取页面配置是否位单栏
export const useSingleColumn = () => {
	const { frontmatter } = useData<AsyncThemeConfig>();
	return Boolean(frontmatter.value.single_column)
}

// 获取页面 banner 配置
export const useBanner = () => {
	const { theme, frontmatter } = useData<AsyncThemeConfig>();
	return <AsyncThemeConfig["banner"]>{
		bgurl: bannerImg,
		...(theme.value.banner || {}),
		...(frontmatter.value.banner || {}),
	};
}