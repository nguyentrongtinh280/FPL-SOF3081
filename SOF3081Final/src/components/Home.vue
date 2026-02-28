<template>
  <div class="container mt-4 pt-5">
    <div id="carouseExampleDark" class="carousel slide carousel-dark">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="banner1" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img :src="banner2" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img :src="banner3" class="d-block w-100" />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        data-bs-slide="prev"
        data-bs-target="#carouseExampleDark"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>

      <button
        class="carousel-control-next"
        data-bs-slide="next"
        data-bs-target="#carouseExampleDark"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>

  <div class="container mt-4">
    <h1 class="text-primary text-center fw-bold">
      Chào mừng đến với trang chủ
    </h1>
  </div>
</template>

<script setup>
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
</script>
<style scoped>
.blog-aside-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
