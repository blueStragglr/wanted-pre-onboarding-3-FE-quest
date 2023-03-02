import { createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/2",
    component: () => import("../pages/Page2.vue"),
  },
  {
    path: "/3",
    component: () => import("../pages/Page3.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
