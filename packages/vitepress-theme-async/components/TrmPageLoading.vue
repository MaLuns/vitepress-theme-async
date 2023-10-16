<script setup lang="ts">
import { useRouter } from "vitepress";

const router = useRouter();

let lastDate: number;
router.onBeforeRouteChange = () => {
	document.documentElement.classList.add("page-animating");
	lastDate = new Date().getTime();
};

router.onAfterRouteChanged = () => {
	const times = Math.max(600 - (new Date().getTime() - lastDate), 0);
	setTimeout(() => document.documentElement.classList.remove("page-animating"), times);
};
</script>
<template>
	<div class="trm-preloader">
		<div class="trm-holder">
			<div class="preloader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>
