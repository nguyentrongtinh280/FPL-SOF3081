import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home2.vue";
import Posts from "../components/Posts.vue";
import Login from "../components/Login.vue";
import postCreate from "../components/PostCreate.vue";
import Register from "../components/Register.vue";
import PostDetail from "../components/PostDetail.vue";

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
    meta: { layout: "default", requiresAuth: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { layout: "auth" },
  },
  {
    path: "/register",
    component: Register,
    meta: { layout: "auth" },
  },
  {
    path: "/post-detail/:id",
    component: PostDetail,
    meta: { layout: "default" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/login");
  } else if (to.path === "/login" && isLoggedIn) {
    next("/post-create");
  } else {
    next();
  }
});

export default router;
