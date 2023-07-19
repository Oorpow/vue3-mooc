<template>
	<div class="sticky top-0 left-0 w-full z-10">
		<ul
			class="flex flex-wrap w-[820px] mx-auto overflow-hidden justify-center relative duration-200"
			:class="[isCollapse ? 'h-[230px]' : 'h-[60px]']"
		>
			<div
				class="absolute right-0 rounded-full p-[6px] duration-200 cursor-pointer hover:bg-zinc-300"
				:class="[isCollapse ? 'bottom-[2px]' : 'bottom-[12px]']"
			>
				<Icon
					icon="mdi-arrow-collapse-up"
					class="text-lg text-gray-400"
					@click="toggleCollapse"
				/>
			</div>
			<li
				v-for="item in 23"
				:key="item"
				class="flex items-center h-[60px] shrink-0 hover:bg-zinc-400/40 mx-1 px-1 cursor-pointer rounded-sm duration-200"
			>
				<span class="text-lg">工业设计</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";

const isCollapse = ref(true);

/**
 * 收缩navbar
 */
const toggleCollapse = () => {
	console.log("click");

	isCollapse.value = !isCollapse.value;
};
</script>

<style scoped></style>
