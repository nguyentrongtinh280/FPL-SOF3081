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
    <div class="row align-items-stretch">
      <aside class="col-sm-4 d-flex">
        <div class="w-100 h-100">
          <h3 class="text-primary mb-3 fw-bold">Về tôi</h3>
          <div class="card shadow-sm mb-4">
            <img :src="avatar" class="card-img-top p-3" />
            <div class="card-body">
              <h5 class="fw-bold text-primary">Giới thiệu bản thân</h5>
              <p class="small">
                Nguyễn Trọng Tính, Tổ chức Tư vấn sức khỏe quốc tế độc lập.<br />
                Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được
                chọn cách mình sẽ sống.
              </p>
            </div>
          </div>

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

          <div class="mt-4">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <button
                  class="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#read"
                >
                  Đọc nhiều
                </button>
              </li>

              <li class="nav-item">
                <button
                  class="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#view"
                >
                  Xem nhiều
                </button>
              </li>
            </ul>

            <div class="tab-content border border-top-0 p-2">
              <div class="tab-pane fade show active" id="read">
                <ul class="list-group list-group-flush">
                  <li
                    v-for="read in popularRead"
                    :key="read"
                    class="list-group-item small"
                  >
                    {{ read }}
                  </li>
                </ul>
              </div>

              <div class="tab-pane fade" id="view">
                <ul class="list-group list-group-flush">
                  <li
                    v-for="view in popularView"
                    :key="view"
                    class="list-group-item small"
                  >
                    {{ view }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main class="col-sm-8 d-flex">
        <div class="w-100 h-100">
          <h3 class="text-primary fw-bold mb-3">Blog của tôi</h3>
          <div class="card p-3 bg-light">
            <div class="row">
              <div class="col-md-7">
                <div class="card h-100">
                  <h6 class="p-2 fw-bold">
                    Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                    <small class="text-muted">
                      <i class="fa-solid fa-comment"></i> 16
                    </small>
                  </h6>

                  <img :src="tapPilates" class="card-img-top" />
                  <div class="card-body px-0">
                    <p class="small">
                      Pilates giúp cải thiện vóc dáng, linh hoạt và phục hồi
                      chấn thương. Blog vẫn là một trong những loại content
                      hiệu.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-5">
                <div class="card p-3 h-100">
                  <div
                    v-for="blog in asideBlogs"
                    :key="blog.title"
                    class="d-flex mb-2 mt-2"
                  >
                    <img :src="blog.img" class="blog-aside-img me-2" />
                    <div>
                      <div class="small fw-bold">{{ blog.title }}</div>
                      <small class="text-muted">
                        <i class="fa-solid fa-comment"></i>{{ blog.cmt }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-info text-white px-4">Xem thêm</button>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="text-primary fw-bold text-center mb-4">
              Bài viết mới nhất
            </h3>
            <div class="row g-3">
              <div
                class="col-md-6"
                v-for="(post, index) in allPosts"
                :key="index"
              >
                <router-link
                  :to="`/post-detail/${post.id}`"
                  class="text-decoration-none text-dark"
                >
                  <div class="card h-100">
                    <img :src="post.img" class="card-img-top" />
                    <div class="card-body">
                      <h6>{{ post.title }}</h6>
                      <p class="small text-muted">{{ post.content }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="text-center mt-3">
              <button class="btn btn-info text-white px-4">Xem thêm</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import avatar from "../assets/images/avatar.png";
import tapPilates from "../assets/images/tap-piltes.jpg";
import tapPilates1 from "../assets/images/tap-pilates1.jpg";
import orange from "../assets/images/orange_300x300.jpg";
import timMach from "../assets/images/tim-mach.jpg";
import video1 from "../assets/images/video1.jpg";
import video2 from "../assets/images/video2.jpg";
import video3 from "../assets/images/video3.jpg";
import tapTheDuc from "../assets/images/tap-the-duc2.jpg";
import { posts2 } from "../data/postData";

const categories = [
  { name: "Chế độ học tập", count: 12, active: true },
  { name: "Chế độ dinh dưỡng", count: 25 },
  { name: "Chế độ ngủ nghỉ", count: 15, active: true },
];

const popularRead = ["Bí quyết sống tích cực mỗi ngày", "Thực phẩm dinh dưỡng"];

const popularView = ["Tập thể dục mỗi ngày", "Món ăn tốt cho sức khỏe"];

const asideBlogs = [
  { title: "Biết ơn đời, đời sẽ thương ta", img: orange, cmt: 30 },
  { title: "9 tác dụng tuyệt vời của quả cam", img: tapPilates1, cmt: 28 },
  { title: "10 công dụng bất ngờ từ dầu dừa", img: timMach, cmt: 15 },
  { title: "Lợi ích khi ăn rau mỗi ngày", img: orange, cmt: 12 },
];

//const videos = [video1, video2, video3, video2, video1, video2, video3, video2];

const posts = [
  {
    id: 1,
    title: "Phương pháp tập Pilates giúp phục hồi chấn thương cột sống",
    content:
      "Pilates ban đầu được gọi là “Contrology” - một phương pháp tập thể dục toàn thân giúp người tập cải thiện các hoạt động hàng ngày. Pilates ngoài việc nhấn mạnh vào sức mạnh cốt lõi còn tập trung phát triển những mô hình chuyển động chức năng và bền vững xuyên suốt cơ thể.",
    img: timMach,
  },
  {
    id: 2,
    title: "Tập thể dục là một hoạt động rất có lợi cho sức khỏe.",
    content:
      "Chính đồng hồ sinh học của cơ thể sẽ quyết định bạn là “cú đêm” hay ưa dậy sớm. Những nhịp sinh học nàytác động đến các chức năng của cơ thể như chỉ số uyết áp, nhiệt độ cơ thể, mức độ hormone hay nhịptim, tất cả đều đóng vai trò quan trọng trong việcxác định cơ thể bạn có sẵn sàng tập thể dục haykhông.",
    img: tapTheDuc,
  },
];

const allPosts = [...posts, ...posts2];
</script>

<style scoped>
.blog-aside-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
