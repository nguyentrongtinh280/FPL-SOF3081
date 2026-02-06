<template>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold text-primary">BÀI VIẾT HÔM NAY</h2>
    </div>
  </div>

  <div class="card shadow-sm mx-auto mb-4" style="max-width: 600px">
    <img
      src="../assets/images/hat-giong-hoa-hong-1.jpg"
      alt="Hình ảnh"
      class="card-img-top"
    />
    <div class="card-body">
      <h3 class="card-title fw-bold text-danger">GIỚI THIỆU HOA HỒNG</h3>
      <p class="card-text text-muted">
        Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây
        bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài
        với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này
        nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng.
      </p>
    </div>
  </div>
  <div class="card shadow-sm mx-auto" style="max-width: 600px">
    <div class="card-body">
      <h5 class="fw-bold mb-3 text-danger">BÌNH LUẬN BÀI VIẾT</h5>
      <form @submit.prevent="submitComment">
        <div class="mb-3">
          <textarea
            class="form-control"
            id="commentText"
            rows="3"
            v-model="commentText"
            placeholder="Nhập bình luận của bạn"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-success px-4">Gửi</button>
        </div>
      </form>
    </div>
    <div v-if="comments.length" class="mx-auto mt-4" style="max-width: 600px">
      <div class="card-body">
        <h5 class="fw-bold mb-3 text-danger">BÌNH LUẬN</h5>
        <ul class="list-group list-group-flush">
          <li
            v-for="(comment, index) in comments"
            :key="index"
            class="list-group-item"
          >
            <p>
              <strong>{{ comment.name }}</strong
              >: {{ comment.text }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["username"]);
const commentText = ref("");
const comments = ref([]);

function submitComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username,
      text: commentText.value,
    });
    commentText.value = "";
  }
}
</script>
