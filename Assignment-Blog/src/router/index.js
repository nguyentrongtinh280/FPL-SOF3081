import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home2.vue";
import Posts from "../views/Posts.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { layout: "default" },
  },
  {
    path: "/posts",
    component: Posts,
    meta: { layout: "default" },
  },
  {
    path: "/login",
    component: Login,
    meta: { layout: "auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
