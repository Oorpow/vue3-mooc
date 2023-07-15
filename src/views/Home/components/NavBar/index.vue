<template>
	<div>
		<MobileNavBar v-if="useIsMobile" :navList="navList" />
		<PcNavBar v-else />
	</div>
</template>

<script setup lang="ts">
import MobileNavBar from './mobile/index.vue'
import PcNavBar from './pc/index.vue'
import { ref } from 'vue';
import { useIsMobile } from '@/composables';

interface ArrT {
	id: number
	name: string
}

const navList = ref<ArrT[]>([
	{
		id: 1,
		name: '设计'
	},
	{
		id: 2,
		name: 'Web'
	},
	{
		id: 3,
		name: '前端'
	},
	{
		id: 4,
		name: '后端'
	},
	{
		id: 5,
		name: 'Java'
	},
	{
		id: 6,
		name: 'Vue'
	},
	{
		id: 7,
		name: 'React'
	},
	{
		id: 8,
		name: 'TypeScript'
	},
	{
		id: 9,
		name: 'TypeScript'
	},
	{
		id: 10,
		name: 'TypeScript'
	},
	{
		id: 11,
		name: 'TypeScript'
	},
	{
		id: 12,
		name: 'TypeScript'
	},
	{
		id: 13,
		name: '	其它'
	}
])
</script>

<style scoped>

</style>
