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
      <h3 class="card-title fw-bold">8 LOẠI RAU CỦ GIÀU CANXI</h3>
      <p class="card-text text-muted">
        Canxi là khoáng chất cần thiết đối với cơ thể người, có nhiều cách để bổ
        sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất
      </p>
    </div>
  </div>
  <div class="card shadow-sm mx-auto" style="max-width: 600px">
    <div class="card-body">
      <h5 class="fw-bold mb-3">BÌNH LUẬN BÀI VIẾT</h5>
      <form @submit.prevent="submitComment">
        <div class="mb-3">
          <textarea
            class="form-control"
            id="commentText"
            row="3"
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
        <h5 class="fw-bold mb-3">BÌNH LUẬN</h5>
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
