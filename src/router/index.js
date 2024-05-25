import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = setupLayouts([
  {
    path: "/",
    component: LoginView,
  },
  {
    path: "/about",
    component: () => import("../views/AboutView.vue"),
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
