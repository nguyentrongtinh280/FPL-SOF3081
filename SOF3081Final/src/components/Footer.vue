<template>
  <footer class="bg-dark text-light pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Quản lý sản phẩm</h5>
        </div>

        <div class="col-md-4 mb-4">
          <h6 class="fw-bold">Liên kết nhanh</h6>
          <ul class="list-unstyled">
            <li>
              <router-link class="footer-link" to="/">Trang chủ</router-link>
            </li>
            <li>
              <router-link class="footer-link" to="/posts"
                >Sản Phẩm</router-link
              >
            </li>
            <li>
              <router-link class="footer-link" to="/thong-ke"
                >Thống kê</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-md-4 mb-4">
          <h6 class="fw-bold">Kết nối với chúng tôi</h6>

          <div>
            <a
              href="https://www.facebook.com/"
              class="social-icon me-3"
              target="_blank"
            >
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.tiktok.com/"
              class="social-icon me-3"
              target="_blank"
            >
              <i class="fa-brands fa-tiktok fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              class="social-icon me-3"
              target="_blank"
            >
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              class="social-icon"
              target="_blank"
            >
              <i class="fa-brands fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <hr class="border-secondary" />
      <div class="text-center small">FPT Polytechnic</div>
    </div>
  </footer>
</template>
<style scoped>
.footer-link {
  color: #ffffff;
  text-decoration: none;
  transition: 0.3s;
}

.footer-link:hover {
  color: #ffc107;
}

.social-icon {
  color: #ffffff;
  transition: 0.3s;
}

.social-icon:hover {
  color: #ffc107;
}
</style>
