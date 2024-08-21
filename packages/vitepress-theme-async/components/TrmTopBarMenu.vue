<script setup lang="ts">
import { useData, withBase } from "vitepress";
import { isActive } from "../utils/shared";

const { theme, page } = useData<AsyncThemeConfig>();
</script>

<template>
	<div class="trm-menu">
		<nav>
			<ul>
				<li
					v-for="(element, index) in theme.topBars"
					:key="index"
					:class="{
						'current-menu-item': isActive(page.relativePath, element.activeMatch || element.url, !!element.activeMatch),
					}"
				>
					<a :href="element.url ? withBase(element.url) : 'javascript:void(0)'" :target="element?.target" :rel="element?.rel">
						{{ $t(<"none">element.title) }}
					</a>
					<ul v-if="element.children?.length">
						<li v-for="(item, idx) in element.children" :key="idx" :class="{ 'current-item': isActive(page.relativePath, item.activeMatch || item.url, !!item.activeMatch) }">
							<a :href="withBase(item.url)" :target="item.target" :rel="item.rel">
								{{ $t(<"none">item.title) }}
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>
<style lang="less">
.trm-menu {
	margin-right: 10px;

	nav {
		ul {
			display: flex;
			margin: 0;
			padding: 0;

			li {
				height: var(--top-bar-height);
				position: relative;
				list-style-type: none;
				display: flex;
				justify-content: center;
				align-items: center;

				&:after {
					content: "";
					position: absolute;
					bottom: 0;
					border-radius: 10px;
					height: 4px;
					width: 0;
					background-color: var(--primary, #afb42b);
					transition: all 0.4s ease-in-out;
				}

				a {
					white-space: nowrap;
					height: 100%;
					width: 100%;
					padding: 0 20px;
					line-height: var(--top-bar-height);
					color: var(--theme-color, #00283a);
					text-transform: uppercase;
					font-size: 12px;
					letter-spacing: 2px;
					font-weight: 700;
					transition: all 0.4s ease-in-out;

					&:hover {
						color: var(--primary, #afb42b);
					}
				}

				ul {
					padding: 10px;
					pointer-events: none;
					background-color: var(--theme-bg-color, #fcfcfe);
					opacity: 0;
					transform: translateY(20px);
					height: auto;
					top: var(--top-bar-height);
					// left: -10px;
					border-radius: 0 0 10px 10px;
					box-shadow: var(--box-shadow2, 0 2px 4px -2px rgba(0, 0, 0, 0.15));
					position: absolute;
					z-index: 9;
					display: flex;
					flex-direction: column;
					transition: all 0.4s ease-in-out;

					li {
						height: 50px;
						margin: 0;
						justify-content: flex-start;

						a {
							line-height: 50px;
						}

						&:after,
						&:before {
							display: none;
						}

						&.current-item a {
							color: var(--primary, #afb42b);
						}
					}
				}

				&:hover {
					ul {
						pointer-events: all;
						opacity: 1;
						transform: translateY(0);
					}
				}

				&.current-item:after,
				&.current-menu-item:after {
					width: 100%;
				}
			}
		}
	}
}

@media (max-width: 1200px) {
	.trm-menu {
		text-align: center;
		margin: 0;
		width: 100%;

		nav {
			width: 100%;

			ul {
				margin: 20px 0;
				flex-direction: column;

				li {
					width: 100%;
					height: auto;
					display: block;

					&:after {
						display: none;
					}

					a {
						height: 50px;
						line-height: 50px;
					}

					&.current-menu-item {
						a {
							color: var(--primary, #afb42b);
						}

						ul li a {
							color: var(--theme-color, #00283a);
						}
					}

					ul {
						border-radius: 0;
						margin: 0;
						background-color: var(--theme-bg2-color, #f4f5f7);
						top: 0;
						left: 0;
						width: 100%;
						padding: 0;
						position: relative;
						overflow: hidden;
						opacity: 1;
						transform: none;
						margin: 0;
						pointer-events: all;
						max-height: 0;
						box-shadow: var(--box-shadow2, inset 0 0 4px -1px rgba(0, 0, 0, 0.15));
					}

					&:hover {
						ul {
							max-height: 300px;
						}
					}
				}
			}
		}
	}
}
</style>
