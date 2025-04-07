<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import TrmIconRefresh from '../icons/TrmIconRefresh.vue';
import { useDebounceFn } from '@vueuse/core';
import { colors } from '../../utils/shared';

const props = withDefaults(defineProps<{
    title: string
    color: string
}>(), {
    title: 'Theme Color',
    color: '#afb42b'
});

const data = ref({
    hue: 111,
    l: 0.75,
    c: 0.15
});

const emit = defineEmits<{
    (event: 'update:color', color: string): void
}>()

const currentHue = ref<number>(data.value.hue);
const currentColor = computed<string>(() => `oklch(${data.value.l} ${data.value.c} ${currentHue.value})`);

const updateColor = useDebounceFn(() => emit('update:color', currentColor.value), 100);

const resetColor = () => {
    currentHue.value = data.value.hue;
    updateColor()
};

watch(
    () => props.color,
    (value) => {
        const color = colors.rgb(value);
        const oklchColor = colors.oklch(color);

        currentHue.value = oklchColor?.h ?? data.value.hue;
        data.value.hue = oklchColor?.h ?? data.value.hue;
        data.value.l = oklchColor?.l ?? data.value.l;
        data.value.c = oklchColor?.c ?? data.value.c;
    },
    {
        immediate: true
    }
);
</script>

<template>
	<div class="trm-color-picker">
		<div class="picker-header">
			<div class="picker-title">
				<div class="title-bar"></div>
				<span>{{ props.title }}</span>
			</div>
			<div class="picker-value" @click="resetColor">
				<TrmIconRefresh />
			</div>
		</div>
		<div class="picker-container">
			<input type="range" class="color-slider" min="0" max="360" step="1" v-model="currentHue" @input="updateColor" />
		</div>
	</div>
</template>

<style scoped lang="less">
.trm-color-picker {
    background-color: var(--theme-bg-color, #fcfcfe);
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 240px;
}

.picker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    .picker-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
        font-size: 16px;
        font-family: unset;

        .title-bar {
            width: 4px;
            height: 16px;
            background: var(--primary);
            border-radius: 1px;
        }
    }

    .picker-value {
        text-align: center;
        background-color: var(--primary-30);
        padding: 4px 8px;
        width: 40px;
        border-radius: 4px;
        font-size: 14px;
        color: var(--primary);
        cursor: pointer;

        :global(.symbol-icon) {
            fill: var(--primary);
        }
    }
}

.picker-container {
    background: oklch(v-bind('data.l') v-bind('data.c') 0);
    padding: 0 4px;
    line-height: 0;
    border-radius: 4px;


    .color-slider {
        width: 100%;
        height: 20px;
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        appearance: none;
        background: linear-gradient(to right,
                oklch(v-bind('data.l') v-bind('data.c') 0),
                oklch(v-bind('data.l') v-bind('data.c') 30),
                oklch(v-bind('data.l') v-bind('data.c') 60),
                oklch(v-bind('data.l') v-bind('data.c') 90),
                oklch(v-bind('data.l') v-bind('data.c') 120),
                oklch(v-bind('data.l') v-bind('data.c') 150),
                oklch(v-bind('data.l') v-bind('data.c') 180),
                oklch(v-bind('data.l') v-bind('data.c') 210),
                oklch(v-bind('data.l') v-bind('data.c') 240),
                oklch(v-bind('data.l') v-bind('data.c') 270),
                oklch(v-bind('data.l') v-bind('data.c') 300),
                oklch(v-bind('data.l') v-bind('data.c') 330),
                oklch(v-bind('data.l') v-bind('data.c') 360));

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 10px;
            height: 14px;
            border-radius: 2px;
            border: 2px solid white;
            background: v-bind('currentColor');
            cursor: pointer;
        }

        &::-moz-range-thumb {
            width: 10px;
            height: 14px;
            border-radius: 2px;
            border: 2px solid white;
            background: v-bind('currentColor');
            cursor: pointer;
        }
    }
}
</style>
