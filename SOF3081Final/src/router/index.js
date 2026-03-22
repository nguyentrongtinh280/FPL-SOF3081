import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ChangePassword from "../components/ChangePassword.vue";
import ThongKe from "../components/ThongKe.vue";
import Product from "../components/Product.vue";
import CongViec from "../components/CongViec.vue";
import CongViecList from "../components/CongViecList.vue";
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
  {
    path: "/product",
    component: Product,
    meta: { layout: "default", requiresAuth: true },
  },

  {
    path: "/cong-viec",
    component: CongViec,
    meta: { layout: "default", requiresAuth: true, role: "admin" },
  },

  {
    path: "/danh-sach-cong-viec",
    component: CongViecList,
    meta: { layout: "default", requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (to.meta.requiresAuth && !isLoggedIn) {
    return next("/login");
  }

  if (to.path === "/login" && isLoggedIn) {
    next("/");
  }

  if (to.meta.role) {
    if (!currentUser || currentUser.role !== to.meta.role) {
      alert("Bạn không có quyền truy cập vào quản lý công việc!");
      return next("/");
    }
  }

  next();
});

export default router;
