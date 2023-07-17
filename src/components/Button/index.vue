<template>
	<button
		class="flex items-center justify-center text-sm duration-150 rounded-lg"
		:class="[
			typeKey,
			sizeKey,
			{
				'active:scale-105': animate,
			},
		]"
		@click.stop="onButtonClick"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
	type?: "primary" | "default" | "info";
	size?: "default" | "small" | "large";
	animate?: boolean;
	loading?: boolean;
};

type TypeEnum = {
	primary: string;
	default: string;
	info: string;
};

type SizeEnum = {
	default: {
		button: string;
		icon?: string;
	};
	small: SizeEnum["default"];
	large: SizeEnum["default"];
};

const typeEnum: TypeEnum = {
	primary: "text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-800",
	default: "text-white bg-main hover:bg-hover-main active:bg-main",
	info: "text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200",
};

const sizeEnum: SizeEnum = {
	small: {
		button: "w-5 h-3 text-base",
	},
	default: {
		button: "w-6 h-4 text-base",
	},
	large: {
		button: "w-7 h-5 text-base",
	},
};

const props = withDefaults(defineProps<Props>(), {
	size: "default",
	type: "default",
	animate: false,
	loading: false,
});

const emits = defineEmits(["click"]);

const typeKey = computed(() => typeEnum[props.type]);
const sizeKey = computed(() => sizeEnum[props.size].button);

/**
 * 向外暴露点击事件
 */
const onButtonClick = () => {
	if (props.loading) return;
	emits("click");
};
</script>

<style scoped></style>
