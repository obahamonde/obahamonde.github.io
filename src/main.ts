import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import generatedRoutes from "~pages";
import "@unocss/reset/tailwind.css";
import "./styles/main.css";
import "uno.css";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(createPinia())
  .component("Icon", Icon)
  .mount("#app");
