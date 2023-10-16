<script setup lang="ts">
import TrmTopBarLogo from "./TrmTopBarLogo.vue";
import TrmTopBarMenu from "./TrmTopBarMenu.vue";
// import TrmTopBarTheme from "./Theme.vue";
// import TrmTopBarSearch from "./Search.vue";
</script>

<template>
	<header class="trm-top-bar">
		<div class="container">
			<div class="trm-left-side">
				<TrmTopBarLogo />
			</div>
			<div class="trm-right-side">
				<TrmTopBarMenu />
				<!-- <TrmTopBarTheme /> -->
				<!-- <TrmTopBarSearch /> -->
			</div>
			<div class="trm-menu-btn">
				<span></span>
			</div>
		</div>
	</header>
</template>
