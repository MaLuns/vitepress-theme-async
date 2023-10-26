<script setup lang="ts">
import { AsyncThemeConfig } from "types/index";
import { useData } from "vitepress";
import { ref, onMounted } from "vue";
import { formatDate } from "../utils/client";

const { theme } = useData<AsyncThemeConfig>();
const day = ref<number>(0);

const showDateTime = (date: string) => {
	const BirthDay = new Date(date);
	const today = new Date();
	const timeold = today.getTime() - BirthDay.getTime();
	const msPerDay = 24 * 60 * 60 * 1000;
	const count = Math.floor(timeold / msPerDay);
	day.value = count;
};

onMounted(() => {
	theme.value.footer?.live_time?.start_time && showDateTime(theme.value.footer?.live_time?.start_time);
});
</script>

<template>
	<footer class="trm-footer trm-scroll-animation">
		<slot name="footer-content-before" />
		<div v-if="theme?.footer?.beian?.enable" class="trm-footer-item">
			<a rel="noopener" href="https://beian.miit.gov.cn/" target="_blank">
				{{ theme.footer.beian.icp }}
			</a>
		</div>
		<div v-if="theme?.footer?.copyright_year" class="trm-footer-item">
			<span>© {{ theme.footer.copyright_year }} - {{ formatDate(new Date(), "YYYY") }}</span>
			<span class="footer-separator" data-separator=" · "></span>
			<span class="trm-accent-color">{{ theme.user?.name }}</span>
		</div>
		<div v-if="theme?.footer?.powered?.enable" class="trm-footer-item">
			<span>
				由
				<a href="https://vitepress.dev" target="_blank" rel="noopener">Vitepress</a>
				驱动
			</span>
			<span class="footer-separator" data-separator=" | "></span>
			<span>
				主题 -
				<a rel="noopener" href="https://github.com/MaLuns/vitepress-theme-async" target="_blank">Async</a>
				v0.0.1
			</span>
		</div>
		<div v-if="theme?.footer?.live_time?.enable" class="trm-footer-item">
			<span id="since" class="trm-accent-color">博客已萌萌哒运行 {{ day }} 天</span>
		</div>
		<slot name="footer-content-after" />
	</footer>
</template>
