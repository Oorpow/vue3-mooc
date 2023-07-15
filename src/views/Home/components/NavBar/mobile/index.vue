<template>
	<div class="bg-white sticky top-0 left-0 z-10">
		<ul
			class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
			ref="ulRef"
		>
			<!-- 滑块 -->
			<li
				:style="sliderStyle"
				class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
			></li>
			<!-- 汉堡按钮 -->
			<li
				class="fixed top-0 right-0 h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
			>
				<Icon icon="mdi-light:menu" class="text-xl" />
			</li>
			<li
				class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
				:class="{
					'text-zinc-100': currentSliderIndex === i,
				}"
				:ref="sliderItemRefs"
				v-for="(item, i) in navList"
				:key="item.id"
				@click="handleSliderClick(i)"
			>
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" generic="T extends { id: number, name: string }">
import { onBeforeUpdate, ref, watch } from "vue";
import { useScroll } from "@vueuse/core";
import { Icon } from "@iconify/vue";

defineProps<{
	navList: T[];
}>();

const currentSliderIndex = ref(0);

const sliderStyle = ref({
	width: 50 + "px",
	transform: "translateX(0px)",
});

const handleSliderClick = (index: number) => {
	currentSliderIndex.value = index;
};

const itemRefs: any[] = [];
/** 获取每个li项并进行存储，用于计算滑块滚动 */
const sliderItemRefs = (el: any) => {
	if (el) {
		itemRefs.push(el);
	}
};

onBeforeUpdate(() => {
	itemRefs.length = 0;
});

const ulRef = ref<HTMLElement | null>(null);
const { x: ulScrollLeft } = useScroll(ulRef);

/** 监听li子项下标的变化，如果发生改变，则操作滑块进行滚动 */
watch(currentSliderIndex, (newVal) => {
	const sliderItemRect = itemRefs[newVal].getBoundingClientRect();

	// 滑块滚动距离 = ul元素横向滚动的距离 + 所点击子项的left - 子项padding
	sliderStyle.value = {
		transform: `translateX(${ulScrollLeft.value + sliderItemRect.left - 10}px)`,
		width: sliderItemRect.width + "px",
	};
});
</script>
