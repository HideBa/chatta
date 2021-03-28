import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Sign from "../views/Sign.vue";
import Talk from "../views/Talk.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign",
    name: "Sign",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Sign,
    // () =>
    //   import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
  },
  {
    path: "/talks",
    name: "Talk",
    component: Talk,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
