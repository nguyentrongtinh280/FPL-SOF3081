<template>
  <div class="container mt-5 pt-5" v-if="post">
    <div class="card">
      <div class="card-header fw-bold">
        <h4 class="text-dark">{{ post.title }}</h4>
      </div>
      <div class="text-center mt-3">
        <img
          :src="post.img"
          class="card-img-top rounded"
          style="max-width: 600px"
        />
      </div>
      <div class="card-body">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
  <div v-else class="text-center mt-5">
    <h4>Bài viết không tồn tại!</h4>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { posts2 } from "../data/postData";
import pilates from "../assets/images/tap-piltes.jpg";
import tapTheDuc from "../assets/images/tap-the-duc2.jpg";

const fixedPosts = [
  {
    id: 1,
    title: "Phương pháp tập Pilates giúp phục hồi chấn thương cột sống",
    content:
      "Pilates ban đầu được gọi là “Contrology” - một phương pháp tập thể dục toàn thân giúp người tập cải thiện các hoạt động hàng ngày. Pilates ngoài việc nhấn mạnh vào sức mạnh cốt lõi còn tập trung phát triển những mô hình chuyển động chức năng và bền vững xuyên suốt cơ thể.",
    img: pilates,
  },
  {
    id: 2,
    title: "Tập thể dục là một hoạt động rất có lợi cho sức khỏe.",
    content:
      "Chính đồng hồ sinh học của cơ thể sẽ quyết định bạn là “cú đêm” hay ưa dậy sớm. Những nhịp sinh học nàytác động đến các chức năng của cơ thể như chỉ số uyết áp, nhiệt độ cơ thể, mức độ hormone hay nhịptim, tất cả đều đóng vai trò quan trọng trong việcxác định cơ thể bạn có sẵn sàng tập thể dục haykhông.",
    img: tapTheDuc,
  },
];

const allPosts = [...fixedPosts, ...posts2];
const route = useRoute();
const post = computed(() => {
  const id = Number(route.params.id);
  return allPosts.find((p) => p.id === id);
});
</script>
