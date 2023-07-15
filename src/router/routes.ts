import type { RouteRecordRaw } from "vue-router";

/** 静态路由 */
export const mobileRoutes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: () => import("@/views/Home/index.vue"),
	},
];

export const pcRoutes: RouteRecordRaw[] = []
