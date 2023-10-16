<script setup lang="ts">
import TrmSidebarUser from "./TrmSidebarUser.vue";
import TrmSidebarSocial from "./TrmSidebarSocial.vue";
import TrmSidebarInfo from "./TrmSidebarInfo.vue";
import TrmSidebarEmail from "./TrmSidebarEmail.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { getScrollTop } from "../utils/index";

const isFixed = ref(false);
const sidebarRef = ref<HTMLDivElement>();
const scrollFun = () => {
	const top = getScrollTop();
	isFixed.value = top >= 70;
};

const setSidebarWidth = function () {
	if (sidebarRef.value) {
		sidebarRef.value.style.width = window.innerWidth > 992 ? `${sidebarRef.value.parentElement!.clientWidth - 40}px` : "auto";
	}
};

onMounted(() => {
	window.addEventListener("resize", setSidebarWidth);
	window.addEventListener("scroll", scrollFun);
	scrollFun();
	setSidebarWidth();
});

onUnmounted(() => {
	window.removeEventListener("resize", setSidebarWidth);
	window.removeEventListener("scroll", scrollFun);
});
</script>
<template>
	<div ref="sidebarRef" class="trm-main-card-frame trm-sidebar" :class="[isFixed ? 'fixed' : '']">
		<div class="trm-main-card">
			<TrmSidebarUser />
			<TrmSidebarSocial />
			<TrmSidebarInfo />
			<TrmSidebarEmail />
		</div>
	</div>
</template>
