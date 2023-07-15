import { createRouter, createWebHistory } from "vue-router";
import { mobileRoutes, pcRoutes } from "./routes";
import { useIsMobile } from "@/composables";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: useIsMobile.value ? mobileRoutes : pcRoutes,
});

export default router;
