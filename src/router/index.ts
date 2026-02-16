import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/system/components/button",
  },
  {
    path: "/system/components/button",
    name: "system-button",
    component: () => import("@/pages/system/ButtonPage.vue"),
    meta: { view: "system" },
  },
    {
    path: "/system/components/iconButton",
    name: "system-icon-button",
    component: () => import("@/pages/system/IconButtonPage.vue"),
    meta: { view: "system" },
  },
  {
    path: "/system/components/tabs",
    name: "system-tabs",
    component: () => import("@/pages/system/TabsPage.vue"),
    meta: { view: "system" },
  },
  {
    path: "/mockup/content/:id?",
    name: "mockup-content-detail",
    component: () => import("@/pages/mockup/ContentDetailPage.vue"),
    meta: { view: "mockup" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});