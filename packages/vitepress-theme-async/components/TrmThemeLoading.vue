<script setup lang="ts">
import TrmIconMoon from "./icons/TrmIconMoon.vue";
import TrmIconSun from "./icons/TrmIconSun.vue";
</script>
<template>
	<div class="trm-mode-swich-animation-frame">
		<div class="trm-mode-swich-animation">
			<i class="i-sun">
				<TrmIconSun />
			</i>
			<div class="trm-horizon"></div>
			<i class="i-moon">
				<TrmIconMoon />
			</i>
		</div>
	</div>
</template>
<style lang="less">
.trm-mode-swich-animation-frame {
	position: fixed;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	pointer-events: none;
	transition: all 0.4s ease-in-out;

	.trm-mode-swich-animation {
		margin-bottom: 40px;
		width: 80px;
		height: 55px;
		position: relative;
		overflow: hidden;
		text-align: center;

		&:before {
			content: "";
			height: 1px;
			width: 120%;
			border-bottom: dotted 5px var(--theme-color, #00283a);
			position: absolute;
			z-index: 9;
			bottom: 0;
			left: -10%;
		}

		.i-sun {
			position: absolute;
			z-index: 0;
			top: 0;
			font-size: 32px;
			margin-left: -15px;
			opacity: 1;
			color: var(--theme-color, #00283a);
			transition: all 0.6s ease-in-out;
		}

		.i-moon {
			position: absolute;
			z-index: 0;
			top: 0;
			font-size: 32px;
			margin-left: -15px;
			color: var(--theme-color, #00283a);
			opacity: 0;
			transform: translateY(70px) rotate(0);
			transition: all 0.6s ease-in-out;
		}

		&.trm-active {
			.i-sun {
				transform: translateY(70px) rotate(360deg);
				opacity: 0;
			}

			.i-moon {
				transform: translateY(0) rotate(360deg);
				opacity: 1;
			}
		}
	}
}
</style>
