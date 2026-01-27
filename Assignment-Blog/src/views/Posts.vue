<script setup>
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

import pilates from "../assets/images/tap-piltes.jpg";
import tapTheDuc from "../assets/images/tap-the-duc2.jpg";
import timMach from "../assets/images/tim-mach.jpg";
import marketing from "../assets/images/Marketing.png";

import spinach from "../assets/images/spinach_300x300.jpg";
import corevalue from "../assets/images/corevalue.jpg";
import orange from "../assets/images/orange_300x300.jpg";

const categories = [
  { name: "Chế độ học tập", count: 12, active: true },
  { name: "Chế độ dinh dưỡng", count: 25 },
  { name: "Chế độ ăn uống", count: 41 },
  { name: "Chế độ ngủ nghỉ", count: 15, active: true },
  { name: "Món ăn độc hại", count: 56, active: true },
  { name: "Phòng tránh béo phì", count: 58, active: true },
];

const posts = [
  {
    title: "Phương pháp tập Pilates giúp phục hồi chấn thương cột sống",
    content:
      "Pilates ban đầu được gọi là “Contrology” - một phương pháp tập thể dục toàn thân giúp người tập cải thiện các hoạt động hàng ngày. Pilates ngoài việc nhấn mạnh vào sức mạnh cốt lõi còn tập trung phát triển những mô hình chuyển động chức năng và bền vững xuyên suốt cơ thể.",
    img: pilates,
  },
  {
    title: "Tập thể dục là một hoạt động rất có lợi cho sức khỏe.",
    content:
      "Chính đồng hồ sinh học của cơ thể sẽ quyết định bạn là “cú đêm” hay ưa dậy sớm. Những nhịp sinh học nàytác động đến các chức năng của cơ thể như chỉ số uyết áp, nhiệt độ cơ thể, mức độ hormone hay nhịptim, tất cả đều đóng vai trò quan trọng trong việcxác định cơ thể bạn có sẵn sàng tập thể dục haykhông.",
    img: tapTheDuc,
  },
  {
    title: "Tim mạch là nhóm bệnh lý liên quan đến tim và mạch máu",
    content:
      "Tim mạch là nhóm bệnh lý liên quan đến tim và mạch máu, bao gồm các bệnh như cao huyết áp, bệnh mạch vành, đột quỵ, suy tim, thấp tim, v.v., đang là nguyên nhân gây tử vong hàng đầu thế giới, có xu hướng trẻ hóa do lối sống không lành mạnh (hút thuốc, ít vận động, ăn uống kém), nhưng có thể phòng ngừa và kiểm soát bằng thay đổi lối sống, thăm khám định kỳ.",
    img: timMach,
  },
  {
    title:
      "Quản trị Marketing (Marketing Management) là quá trình phân tích, lập kế hoạch",
    content:
      "Quản trị Marketing (Marketing Management) là quá trình phân tích, lập kế hoạch, thực hiện và kiểm soát các hoạt động tiếp thị nhằm xây dựng, củng cố và duy trì những trao đổi có lợi với khách hàng mục tiêu, qua đó đạt được mục tiêu kinh doanh của doanh nghiệp, bao gồm việc hiểu thị trường, phát triển",
    img: marketing,
  },
];

const featurePosts = [
  {
    title: "Biết ơn đời, đời sẽ thương ta",
    img: orange,
    content: "Nhiệm vụ chính của Content Creator",
  },
  {
    title: "9 tác dụng tuyệt vời của quả cam",
    img: spinach,
    content: "Nhiệm vụ chính của Content Creator",
  },
  {
    title: "10 công dụng bất ngờ từ dầu dừa",
    img: timMach,
    content: "Nhiệm vụ chính của Content Creator",
  },
  {
    title: "Lợi ích khi ăn rau mỗi ngày",
    img: corevalue,
    content: "Nhiệm vụ chính của Content Creator",
  },
];
</script>

<template>
  <div class="container mt-3">
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
    <div class="row">
      <aside class="col-sm-4">
        <h3 class="text-primary mb-3 fw-bold">Chuyên mục</h3>
        <ul class="list-group">
          <li
            v-for="c in categories"
            :key="c.name"
            class="list-group-item d-flex justify-content-between align-items-center"
            :class="c.active ? 'active bg-info border-info' : ''"
          >
            {{ c.name }}
            <span class="badge bg-primary rounded-pill">{{ c.count }}</span>
          </li>
        </ul>

        <div class="box mt-4">
          <h3 class="box-header text-primary fw-bold">Bài viết nổi bật</h3>

          <div class="box-body">
            <ul class="list-group list-group-flush">
              <li
                v-for="post in featurePosts"
                :key="post.title"
                class="list-group-item d-flex align-items-start"
              >
                <img :src="post.img" class="feature-img me-3" />

                <div>
                  <strong>{{ post.title }}</strong>
                  <p class="small text-muted mb-0">
                    {{ post.content }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <main class="col-sm-8">
        <h3 class="text-primary mb-3 fw-bold">Bài viết nổi bật</h3>
        <div class="row g-3">
          <div class="col-md-6" v-for="(post, index) in posts" :key="index">
            <router-link
              :to="'/detail/${index + 1}'"
              class="text-decoration-none text-dark"
            >
              <div class="card h-100">
                <div class="card-header bg-white fw-semibold">
                  {{ post.title }}
                </div>

                <img :src="post.img" class="card-img-top" alt="post" />
                <div class="card-body">
                  <p class="small text-muted">{{ post.content }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
}

.box-header {
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
}

.box-body {
  padding: 15px;
}

.feature-img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
