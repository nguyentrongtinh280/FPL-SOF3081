<template>
  <div class="container my-5">
    <h3 class="text-primary fw-bold text-center mb-3">
      KIẾN THỨC SỨC KHỎE CỘNG ĐỒNG
    </h3>
    <br />
    <div class="row g-2">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card shadow-sm h-70">
          <img
            :src="item.image"
            class="card-img-top fix-img"
            alt="item.title"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold text-danger">{{ item.title }}</h5>
          </div>
          <p class="card-text text-muted flex-grow-1">{{ item.content }}</p>
          <button class="btn btn-success text-white mt-3 align-self-center">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../assets/images/orange_300x300.jpg";
import img2 from "../assets/images/sesameoil_300x300.jpg";
import img3 from "../assets/images/spinach_300x300.jpg";
import img4 from "../assets/images/hoa-lan-1.jpg";
import img5 from "../assets/images/hat-giong-hoa-hong-1.jpg";
const items = [
  {
    title: "8 loại rau củ quả giàu canxi",
    content:
      "Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất...",
    image: img1,
  },
  {
    title: "Các loại gia vị tốt cho sức khỏe",
    content:
      "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ đã giúp món ăn thêm hấp dẫn...",
    image: img2,
  },
  {
    title: "9 loại đậu bổ dưỡng nên dùng nhiều",
    content:
      "Đậu lăng, đậu nành, đậu phộng giàu chất xơ, protein cùng nhiều vitamin khoáng chất giúp giảm lượng đường trong máu.",
    image: img3,
  },
  {
    title: "Class Bootstrap dành cho đoạn văn trong card",
    content:
      "Class Bootstrap dành cho đoạn văn trong card. Giữ layout card đẹp và đồng đều",
    image: img3,
  },
  {
    title: "Class Bootstrap dành cho đoạn văn trong card",
    content:
      "Class Bootstrap dành cho đoạn văn trong card. Giữ layout card đẹp và đồng đều",
    image: img4,
  },
  {
    title: "Class Bootstrap dành cho đoạn văn trong card",
    content:
      "Class Bootstrap dành cho đoạn văn trong card. Giữ layout card đẹp và đồng đều",
    image: img5,
  },
];
</script>

<style>
.fix-img {
  height: 100%;
  width: 200px;
  object-fit: cover;
}
</style>
