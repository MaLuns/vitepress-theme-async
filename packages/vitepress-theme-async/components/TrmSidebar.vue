<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import TrmSidebarUser from "./TrmSidebarUser.vue";
import TrmSidebarSocial from "./TrmSidebarSocial.vue";
import TrmSidebarInfo from "./TrmSidebarInfo.vue";
import TrmSidebarEmail from "./TrmSidebarEmail.vue";
import { getScrollTop } from "../utils/client";
import { useSingleColumn } from "../composables/index";

const isFixed = ref(false);
const sidebarRef = ref<HTMLDivElement>();
const singleColumn = useSingleColumn();
const scrollFun = () => {
	const top = getScrollTop();
	isFixed.value = top >= 70;
	if (isFixed.value) {
		setSidebarWidth();
	}
};

const setSidebarWidth = function () {
	if (sidebarRef.value) {
		sidebarRef.value.style.width = isFixed.value && window.innerWidth > 992 ? `${sidebarRef.value.parentElement!.clientWidth - 40}px` : "auto";
	}
};

onMounted(() => {
	const observer = new MutationObserver(() => setSidebarWidth());
	window.addEventListener("resize", setSidebarWidth);
	window.addEventListener("scroll", scrollFun);
	scrollFun();
	// fix: 阅读模式或单栏模式时 sidebar 宽度为 0, 监听 body class 变动, 移除后重设宽度
	sidebarRef.value && observer.observe(document.body, { attributeFilter: ["style", "class"] });

	onUnmounted(() => {
		window.removeEventListener("resize", setSidebarWidth);
		window.removeEventListener("scroll", scrollFun);
		observer.disconnect();
	});
});
</script>
<template>
	<slot name="sidebar-before" />
	<div v-if="!singleColumn" class="trm-page-sidebar col-lg-4 hidden-sm">
		<div ref="sidebarRef" class="trm-sidebar-card" :class="isFixed ? 'fixed' : ''">
			<div class="trm-sidebar-main">
				<slot name="sidebar-user-before" />
				<TrmSidebarUser />
				<slot name="sidebar-social-before" />
				<TrmSidebarSocial />
				<slot name="sidebar-info-before" />
				<TrmSidebarInfo />
				<slot name="sidebar-email-before" />
				<TrmSidebarEmail />
			</div>
		</div>
	</div>
	<slot name="sidebar-after" />
</template>
