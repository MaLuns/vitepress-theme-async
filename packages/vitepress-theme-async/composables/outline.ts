import { throttleAndDebounce } from '../utils/shared';
import { DefaultTheme } from 'vitepress';
import { Ref, onMounted, onUnmounted } from 'vue';
import { useHasOutline } from './index';

const PAGE_OFFSET = 100;

export function resolveTitle(theme: AsyncThemeConfig) {
	return (typeof theme.outline === 'object' && !Array.isArray(theme.outline) && theme.outline.label) || 'On this page';
}

const serializeHeader = (h: Element) => {
	let ret = '';
	for (const node of h.childNodes) {
		if (node.nodeType === 1) {
			if ((<HTMLElement>node).classList.contains('VPBadge') || (<HTMLElement>node).classList.contains('header-anchor')) {
				continue;
			}
			ret += node.textContent;
		} else if (node.nodeType === 3) {
			ret += node.textContent;
		}
	}
	return ret.trim();
};

export const resolveHeaders = (headers: AsyncTheme.MenuItem[], range?: DefaultTheme.Outline) => {
	const levelsRange = (typeof range === 'object' && !Array.isArray(range) ? range.level : range) || 2;
	const [high, low] = typeof levelsRange === 'number' ? [levelsRange, levelsRange] : levelsRange === 'deep' ? [2, 6] : levelsRange;
	headers = headers.filter(h => h.level >= high && h.level <= low);
	const ret: AsyncTheme.MenuItem[] = [];
	outer: for (let i = 0; i < headers.length; i++) {
		const cur = headers[i];
		if (i === 0) {
			ret.push(cur);
		} else {
			for (let j = i - 1; j >= 0; j--) {
				const prev = headers[j];
				if (prev.level < cur.level) {
					(prev.children || (prev.children = [])).push(cur);
					continue outer;
				}
			}
			ret.push(cur);
		}
	}
	return ret;
};

export const getHeader = (range?: DefaultTheme.Outline | false) => {
	if (range === false) return [];
	const headers = [...Array.from(document.querySelectorAll('.trm-publication :where(h1,h2,h3,h4,h5,h6)'))]
		.filter(el => el.id && el.hasChildNodes())
		.map(el => {
			const level = Number(el.tagName[1]);
			return {
				title: serializeHeader(el),
				link: '#' + el.id,
				level,
			};
		});
	return resolveHeaders(headers, range);
};

// 设置目录锚点
export const useActiveAnchor = (container: Ref<HTMLElement>, marker: Ref<HTMLElement>) => {
	const hasOutline = useHasOutline();
	let prevActiveLink: HTMLElement | null = null;

	const setActiveLink = () => {
		if (!hasOutline.value || !container.value) {
			return;
		}

		const links = (<HTMLAnchorElement[]>[]).slice.call(container.value.querySelectorAll('.outline-link'));
		const anchors = (<HTMLAnchorElement[]>[]).slice.call(document.querySelectorAll('.trm-publication .header-anchor')).filter(anchor => {
			return links.some(link => {
				return link.hash === anchor.hash && anchor.offsetParent !== null;
			});
		});
		const scrollY = window.scrollY;
		const innerHeight = window.innerHeight;
		const offsetHeight = document.body.offsetHeight;
		const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1 && parseInt(scrollY.toFixed(0)) > 0;

		// page bottom - highlight last one
		if (anchors.length && isBottom) {
			activateLink(anchors[anchors.length - 1].hash);
			return;
		}
		for (let i = 0; i < anchors.length; i++) {
			const anchor = anchors[i];
			const nextAnchor = anchors[i + 1];
			const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor);
			if (isActive) {
				activateLink(hash);
				return;
			}
		}
	};

	const activateLink = (hash: string | null) => {
		if (prevActiveLink) {
			prevActiveLink.classList.remove('active');
		}
		if (hash == null) {
			prevActiveLink = null;
		} else {
			prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
		}
		const activeLink = prevActiveLink;
		if (activeLink) {
			activeLink.classList.add('active');
			marker.value.style.top = activeLink.offsetTop + 8 + 'px';
			marker.value.style.opacity = '1';
		} else {
			marker.value.style.top = '33px';
			marker.value.style.opacity = '0';
		}
	};

	const onScroll = throttleAndDebounce(setActiveLink, 100);

	onMounted(() => {
		requestAnimationFrame(setActiveLink);
		window.addEventListener('scroll', onScroll);

		onUnmounted(() => {
			window.removeEventListener('scroll', onScroll);
		});
	});
};

const getAnchorTop = (anchor: HTMLAnchorElement) => {
	return anchor.parentElement!.getBoundingClientRect().top + window.scrollY - PAGE_OFFSET;
};

const isAnchorActive = (index: number, anchor: HTMLAnchorElement, nextAnchor: HTMLAnchorElement): [boolean, string | null] => {
	const scrollTop = window.scrollY;
	if (index === 0 && scrollTop === 0) {
		return [true, null];
	}
	if (scrollTop < getAnchorTop(anchor)) {
		return [false, null];
	}
	if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
		return [true, anchor.hash];
	}
	return [false, null];
};
