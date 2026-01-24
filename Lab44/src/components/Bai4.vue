<template>
  <div class="container my-5">
    <h1 class="text-center fw-bold mb-5">Kiến thức sức khỏe cộng đồng</h1>

    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card h-100 shadow-sm">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold">{{ item.title }}</h5>
            <p class="card-text text-muted flex-grow-1">
              {{ item.content }}
            </p>
            <button class="btn btn-success text-white mt-3 align-self-center">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../assets/images/orange_300x300.jpg";
import img2 from "../assets/images/sesameoil_300x300.jpg";
import img3 from "../assets/images/spinach_300x300.jpg";
import img4 from "../assets/images/eat-clean.png";

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
      "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu.",
    image: img3,
  },
  {
    title: "Class Bootstrap dành cho đoạn văn trong card",
    content:
      "Class Bootstrap dành cho đoạn văn trong card. Giữ layout card đẹp và đồng đều",
    image: img3,
  },
];
</script>
