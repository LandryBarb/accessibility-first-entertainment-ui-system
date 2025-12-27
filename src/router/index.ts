import { createRouter, createWebHistory } from "vue-router";

import ButtonPage from "@/pages/system/ButtonPage.vue";
import MockContentDetailPage from "@/pages/mockup/ContentDetailPage.vue";

export const router = createRouter({
  history: createWebHistory(),
   routes: [
    {
      path: "/system/components/button",
      component: () => import("@/pages/system/ButtonPage.vue"),
      meta: { view: "system" },
    },
    {
      path: "/mockup/content/:id?",
      component: () => import("@/pages/mockup/ContentDetailPage.vue"),
      meta: { view: "mockup" },
    },
    {
      path: "/",
      redirect: "/system/components/button",
    },
  ],
});
