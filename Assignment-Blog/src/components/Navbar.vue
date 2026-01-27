<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-custom fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/images/DotBlog_domain_logo.png"
          style="width: 130px"
        />
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

          <li class="nav-item">
            <router-link class="nav-link" to="/events">
              <i class="fa-solid fa-calendar-days"></i> Sự kiện
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/create-post">
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
                <router-link class="dropdown-item" to="/register">
                  <i class="fa-solid fa-user-plus"></i> Đăng ký
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/forgotPassword">
                  <i class="fa-solid fa-unlock"></i> Quên mật khẩu
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/vietnamese"
              >Tiếng Việt</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/english">English</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-custom {
  background: linear-gradient(90deg, #ffffff, #b2b2ec);
}
</style>
