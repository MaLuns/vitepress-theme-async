<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, computed } from "vue";
import { useData } from "vitepress";
import { useIsPost } from "../composables/index";
import { getScrollTop, backTop, themeLoading, switchReadMode, switchSingleColumn, setThemeColor, setPrimaryColors } from "../utils/client";
import { throttleAndDebounce, colors } from "../utils/shared";

import TrmPopover from "./TrmPopover.vue";
import TrmPostOutline from "./TrmPostOutline.vue";
import TrmSearchBtn from "./TrmSearchBtn.vue";
import TrmColorPicker from "./global/TrmColorPicker.vue";
import TrmIconMoon from "./icons/TrmIconMoon.vue";
import TrmIconSun from "./icons/TrmIconSun.vue";
import TrmIconRead from "./icons/TrmIconRead.vue";
import TrmIconArrows from "./icons/TrmIconArrows.vue";
import TrmIconBackTop from "./icons/TrmIconBackTop.vue";
import TrmIconTheme from "./icons/TrmIconTheme.vue";

const offset = ref(false);
const ratio = ref(0);
const isRead = ref(false);
const isPost = useIsPost();
const { theme, frontmatter, isDark, site } = useData<AsyncThemeConfig>();

const scrollFun = () => {
	const scrollTop = getScrollTop();
	const { scrollHeight, clientHeight } = document.documentElement;
	offset.value = scrollTop >= 420;
	ratio.value = parseInt(((scrollTop / (scrollHeight - clientHeight)) * 100).toString());
};

onMounted(() => {
	scrollFun();
	window.addEventListener("scroll", scrollFun);
	nextTick(setThemeColor);
	onUnmounted(() => {
		window.removeEventListener("scroll", scrollFun);
	});
});

const onSwitchReadMode = throttleAndDebounce(() => {
	switchReadMode();
	isRead.value = !isRead.value
}, 500);

const onSwitchThemeMode = () => {
	if (theme.value.themeLoading) {
		themeLoading().then(() => {
			document.querySelector(".trm-mode-swich-animation")?.classList.toggle("trm-active");
			// isDark.value = !isDark.value
			// fix: 打包后 isDark 赋值影响原过渡动画，dev 模式正常，暂时改为延迟更新
			setTimeout(() => {
				isDark.value = !isDark.value;
				nextTick(setThemeColor);
			}, 600);
		});
	} else {
		isDark.value = !isDark.value;
		nextTick(setThemeColor);
	}
};

const onUpdateColor = (color: string) => {
	const oklchColor = colors.oklch(color);
	const primary = colors.formatRgb(oklchColor);
	if (primary) {
		oklchColor!.l! += 0.3;
		setPrimaryColors(primary, colors.formatRgb(oklchColor)!);
		nextTick(setThemeColor);
	}
};

const themePrimary = computed(() => {
	return Array.isArray(theme.value.themeColor?.primary) ? theme.value.themeColor?.primary[isDark.value ? 1 : 0] : theme.value.themeColor?.primary;
});
</script>

<template>
	<div class="trm-fixed-container" :class="offset ? 'offset' : ''">
		<slot name="fixed-btn-before" />
		<TrmPostOutline />
		<TrmSearchBtn />
		<div v-if="isPost && theme.rightside?.readmode" class="trm-fixed-btn" :data-title="$t(isRead ? 'rightside.readMode.exit' : 'rightside.readMode.open')" @click="onSwitchReadMode()">
			<TrmIconRead />
		</div>
		<TrmPopover v-if="theme.themeColor?.enable" class="trm-fixed-btn" :data-title="$t('title.themeColor')" placement="right-start">
			<template #content>
				<TrmColorPicker :color="themePrimary" :title="$t('title.themeColor')" @update:color="onUpdateColor" />
			</template>
			<TrmIconTheme />
		</TrmPopover>
		<div
			v-if="
			site.appearance &&
			site.appearance !== 'force-dark' &&
			site.appearance !== 'force-auto'"
			class="trm-fixed-btn"
			:data-title="$t(isDark ? 'rightside.theme.light' : 'rightside.theme.dark')"
			@click="onSwitchThemeMode"
		>
			<TrmIconSun class="trm-dark-icon" />
			<TrmIconMoon class="trm-light-icon" />
		</div>
		<div
			v-if="theme.rightside?.aside && !(frontmatter.single_column || frontmatter.singleColumn)"
			class="trm-fixed-btn hidden-md"
			:data-title="$t('rightside.aside.open')"
			@click="switchSingleColumn()"
		>
			<TrmIconArrows />
		</div>
		<slot name="fixed-btn-after" />
		<div class="trm-fixed-btn trm-back-top" :style="`background-size:100% ${ratio}%;`" :data-title="$t('rightside.backToTop')" @click="backTop()">
			<TrmIconBackTop />
		</div>
	</div>
</template>
