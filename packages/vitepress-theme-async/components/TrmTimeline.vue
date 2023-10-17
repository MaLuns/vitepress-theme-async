<script setup lang="ts">
import { formatDate } from "../utils/client";
defineProps<{
	list: Theme.PostData[];
}>();
</script>
<template>
	<div class="trm-timeline">
		<div v-for="post in list" class="trm-timeline-item trm-scroll-animation" :key="post.url">
			<div class="trm-timeline-mark-light"></div>
			<div class="trm-timeline-mark"></div>
			<div class="trm-a trm-timeline-content">
				<div class="trm-card-header">
					<div class="trm-left-side">
						<h6>
							<a :href="post.url" class="trm-anima-link">
								{{ post.title }}
							</a>
						</h6>
						<div class="trm-text-sm trm-accent-color trm-mt-15">
							<ul class="trm-card-data trm-label">
								<li class="trm-accent-color">
									{{ formatDate(post.date, "YY-MM-DD") }}
								</li>
								<li class="trm-accent-color">
									{{ formatDate(post.date, "HH:mm") }}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div v-if="post.excerpt" class="trm-publication trm-mt-15" v-html="post.excerpt"></div>
			</div>
		</div>
	</div>
</template>
