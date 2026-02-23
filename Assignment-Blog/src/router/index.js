import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home2.vue";
import Posts from "../components/Posts.vue";
import Login from "../components/Login.vue";
import postCreate from "../components/PostCreate.vue";

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
    path: "/post-create",
    component: postCreate,
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
