import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ChangePassword from "../components/ChangePassword.vue";
import ThongKe from "../components/ThongKe.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { layout: "default" },
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
    path: "/change-password",
    component: ChangePassword,
    meta: { layout: "auth", requiresAuth: true },
  },
  {
    path: "/thong-ke",
    component: ThongKe,
    meta: { layout: "default", requiresAuth: true },
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
    next("/");
  } else {
    next();
  }
});

export default router;
