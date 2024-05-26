import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = setupLayouts([
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/page-data",
    name: "PageData",
    component: () => import("../views/PageDataView.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/user-data",
    name: "UserData",
    component: () => import("../views/UserDataView.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/SettingsView.vue"),
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
