<template>
	<div>
		<MyPopover>
			<template #showup>
				<Icon icon="mdi-white-balance-sunny" class="text-xl cursor-pointer" />
			</template>
			<template #content>
				<div class="flex items-center py-[10px] p-1 cursor-pointer hover:bg-zinc-200" v-for="item in themeArr" :key="item.id">
					<Icon :icon="item.icon" class="text-lg" />
					<span class="text-sm ml-1">{{ item.name }}</span>
				</div>
			</template>
		</MyPopover>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const themeArr = ref([
	{
		id: 1,
		name: '极简白',
		icon: 'mdi-white-balance-sunny'
	},
	{
		id: 2,
		name: '极夜黑',
		icon: 'mdi-weather-night'
	},
	{
		id: 3,
		name: '跟随系统',
		icon: 'mdi-cookie-settings-outline'
	}
]);
</script>

<style scoped></style>
