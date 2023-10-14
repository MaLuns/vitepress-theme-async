<script setup lang="ts">
import TrmTopBar from "../components/TrmTopBar/index.vue";
import TrmBanner from "../components/TrmBanner/index.vue";
import TrmSidebar from "../components/TrmSidebar/index.vue";
import TrmFooter from "../components/TrmFooter.vue";
import TrmSwitchTheme from "../components/TrmSwitchTheme.vue";
import TrmFixedBtn from "../components/TrmFixedBtn.vue";

import { useSingleColumn } from "../composables/index.js";

const singleColumn = useSingleColumn();
</script>

<template>
	<TrmSwitchTheme />
	<div class="trm-app-frame">
		<div id="trm-dynamic-content" class="trm-swup-animation">
			<div id="trm-scroll-container" class="trm-scroll-container">
				<TrmTopBar />
				<div class="trm-content-start">
					<!-- banner -->
					<TrmBanner />
					<!-- banner end -->
					<div class="container">
						<div class="row">
							<div v-if="!singleColumn" class="trm-page-sidebar col-lg-4 hidden-sm">
								<TrmSidebar />
							</div>
							<div class="trm-page-content" :class="!singleColumn ? 'col-lg-8' : 'col-lg-12'">
								<div id="trm-content" class="trm-content">
									<Content />
									<div class="trm-divider footer-divider"></div>
									<TrmFooter />
								</div>
							</div>
						</div>
					</div>

					<TrmFixedBtn />
				</div>
			</div>
		</div>
	</div>
</template>
