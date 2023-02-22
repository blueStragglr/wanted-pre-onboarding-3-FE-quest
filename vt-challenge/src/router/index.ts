declare module "*.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/pageA",
    name: "pageA",
    component: () => import("../views/PageAView.vue"),
  },
  {
    path: "/pageB",
    name: "pageB",
    component: () => import("../views/PageBView.vue"),
  },
  {
    path: "/pageC",
    name: "pageC",
    component: () => import("../views/PageCView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
