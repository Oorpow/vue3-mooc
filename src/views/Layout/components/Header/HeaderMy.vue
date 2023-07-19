<template>
	<div>
		<MyPopover>
			<template #showup>
				<div>
					<img
						src="https://img.yzcdn.cn/vant/cat.jpeg"
						alt="avatar"
						class="w-[45px] h-[45px] object-cover rounded-sm"
					/>
				</div>
			</template>
			<template #content>
				<div
					class="flex items-center py-[10px] p-1 cursor-pointer hover:bg-zinc-200"
					v-for="item in settingArr"
					:key="item.id"
				>
					<Icon :icon="item.icon" class="text-lg" />
					<span class="text-sm ml-1">{{ item.name }}</span>
				</div>
			</template>
		</MyPopover>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const settingArr = ref([
	{
		id: 1,
		name: "个人资料",
		icon: "mdi-account",
		path: '/profile'
	},
	{
		id: 2,
		name: "升级VIP",
		icon: "mdi-account-arrow-up",
		path: '/member'
	},
	{
		id: 3,
		name: "退出登录",
		icon: "mdi-logout-variant",
		path: '/login'
	},
]);
</script>

<style scoped></style>
