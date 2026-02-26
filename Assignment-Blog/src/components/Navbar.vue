<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/logo-blog-final.png" class="me-2 logo-img" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fa-solid fa-house"></i> Trang chủ
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/posts">
              <i class="fa-solid fa-list"></i> Bài viết
            </router-link>
          </li>

          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/events">
              <i class="fa-solid fa-calendar-days"></i> Sự kiện
            </router-link>
          </li> -->

          <li class="nav-item">
            <router-link class="nav-link" to="/post-create">
              <i class="fa-solid fa-pen-to-square"></i> Đăng bài
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i class="fa-solid fa-user"></i> Tài khoản
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/login">
                  <i class="fa-solid fa-right-to-bracket"></i> Đăng nhập
                </router-link>
              </li>
              <li>
                <button class="dropdown-item" @click="logout">
                  <i class="fa-solid fa-left-long"></i> Đăng xuất
                </button>
              </li>
              <li>
                <router-link class="dropdown-item" to="/register">
                  <i class="fa-solid fa-user-plus"></i> Đăng ký
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/change-password">
                  <i class="fa-solid fa-unlock"></i> Đổi mật khẩu
                </router-link>
              </li>
              <li>
                <!-- <router-link class="dropdown-item" to="/profile">
                  <i class="fa-solid fa-address-book"></i> Thông tin cá nhân
                </router-link> -->
              </li>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-white dropdown-item">Tiếng Việt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white dropdown-item">English</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  color: #ffffff !important;
  font-weight: 500;
  transition: 0.3s;
}

.nav-link:hover {
  color: #ffc107 !important;
}

.navbar-brand {
  color: #ffffff !important;
}
.logo-img {
  height: 80px;
  width: 140px;
}
</style>

<script setup>
import router from "../router";

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  router.push("/");
}
</script>
