<script setup lang="ts">
import TrmTopBarLogo from "./TrmTopBarLogo.vue";
import TrmTopBarMenu from "./TrmTopBarMenu.vue";
import { useShowMenu } from "../blog";

const show = useShowMenu();

const onChangState = () => {
	if (show) {
		show.value = !show.value;
	}
};
</script>

<template>
	<header class="trm-top-bar">
		<div class="container">
			<div class="trm-left-side">
				<slot name="topbar-left-before" />
				<TrmTopBarLogo />
				<slot name="topbar-left-after" />
			</div>
			<div class="trm-right-side" :class="{ 'trm-active': show }">
				<slot name="topbar-right-before" />
				<TrmTopBarMenu />
				<slot name="topbar-right-after" />
			</div>
			<div class="trm-menu-btn" :class="{ 'trm-active': show }" @click="onChangState">
				<span></span>
			</div>
		</div>
	</header>
</template>
<style lang="less">
.trm-top-bar {
	position: fixed;
	left: 10px;
	right: 10px;
	z-index: 9;
	height: var(--top-bar-height);
	border-radius: var(--card-border-radius, 10px);
	box-shadow: var(--top-bar-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.15));
	background-color: var(--theme-bg-color, #fcfcfe);

	&:after {
		content: "";
		position: absolute;
		left: 30px;
		height: 8px;
		width: calc(100% - 60px);
		background-color: var(--theme-bg-color, #fcfcfe);
		border-radius: 0 0 5px 5px;
		opacity: 0.3;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.trm-left-side {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 33%;

			.trm-logo-frame {
				display: flex;
				align-items: center;
				height: var(--top-bar-height);

				.trm-logo-text {
					position: relative;
					font-weight: 900;
					font-size: 22px;
					color: var(--theme-color, #00283a);
					letter-spacing: 0;

					span {
						color: var(--primary, #afb42b);
					}
				}

				img {
					width: 32px;
					margin-right: 10px;
				}
			}
		}

		.trm-right-side {
			height: 100%;
			display: flex;
			align-items: center;
			width: 66%;
			justify-content: flex-end;
		}
	}

	@media (max-width: 1200px) {
		.trm-logo-text {
			display: none;
		}

		.container {
			.trm-left-side {
				justify-content: start;
			}

			.trm-right-side {
				border-radius: 0 0 10px 10px;
				padding: 0 0 40px;
				display: flex;
				flex-direction: column;
				background-color: var(--theme-bg-color, #fcfcfe);
				position: absolute;
				z-index: -1;
				top: var(--top-bar-height);
				left: 0;
				height: auto;
				width: 100%;
				opacity: 0;
				pointer-events: none;
				box-shadow: var(--top-bar-box-shadow, 0 2px 4px 0 rgba(0, 0, 0, 0.15));
				transform: translateY(20px);
				transition: all 0.4s ease-in-out;

				&.trm-active {
					opacity: 1;
					pointer-events: all;
					transform: translateY(0);
				}
			}
		}
	}

	@media (max-width: 992px) {
		border-radius: 0;
		width: 100%;
		left: 0;
		right: 0;
	}
}

.trm-menu-btn {
	transform: scale(1.3);
	margin-top: 2px;
	padding: 8px 7px;
	width: 30px;
	height: 30px;
	cursor: pointer;
	display: none;
	justify-content: center;
	text-align: center;

	span {
		position: relative;
		margin: 5px 0 0;

		&:before {
			position: absolute;
			top: -5px;
		}

		&:after {
			position: absolute;
			top: 5px;
		}
	}

	&.trm-active {
		span {
			transform: rotate(45deg);

			&:before {
				transform: translate(0px, 5px) rotate(-90deg);
			}

			&:after {
				transform: translate(0px, -5px) rotate(-90deg);
			}
		}
	}

	span,
	span:after,
	span:before {
		content: "";
		display: block;
		width: 15px;
		height: 0.15em;
		border-radius: 1px;
		background: var(--theme-color, #00283a);
		backface-visibility: hidden;
		transition: all 0.4s ease-in-out;
	}

	@media (max-width: 1200px) {
		display: flex;
	}
}
</style>
