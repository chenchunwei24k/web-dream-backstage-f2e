import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = setupLayouts([
  {
    path: "/",
    view: HomeView,
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/about",
    view: () => import("../views/AboutView.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
]);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
