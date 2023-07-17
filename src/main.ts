import { createApp } from "vue";
import { createPinia } from "pinia";

import "tailwindcss/tailwind.css";

import App from "./App.vue";
import router from "./router";
import globalComponentObj from "@/components/index";
import { useRem } from "./composables";

const app = createApp(App);

useRem();
app.use(globalComponentObj);
app.use(createPinia());
app.use(router);

app.mount("#app");
