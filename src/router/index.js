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
    path: "/accounts",
    name: "Accounts",
    component: () => import("../views/AccountsView.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/accounts/:accountId",
    name: "AccountDetail",
    component: () => import("../views/AccountDetailView.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/semesters",
    name: "UserData",
    component: () => import("../views/SemestersView.vue"),
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'Accounts' }
  }
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
