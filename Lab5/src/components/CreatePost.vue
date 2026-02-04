<template>
  <div class="card shadow-sm mb-4 post-form">
    <div class="card-body">
      <h2 class="card-title text-primary mb-3">Tạo bài viết mới</h2>
      <div class="mb-3">
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Nhập tiêu đề vài viết"
        />
      </div>
      <div class="mb-3">
        <input
          v-model="author"
          type="text"
          class="form-control"
          placeholder="Nhập tên tác giả"
        />
      </div>
      <div class="mb-3">
        <textarea
          v-model="content"
          type="text"
          class="form-control"
          rows="5"
          placeholder="Nội dung bài viết"
        >
        </textarea>
      </div>
      <button class="btn btn-success w-100" @click="submitPost">
        Đăng bài
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-post"]);

const title = ref("");

const content = ref("");
const author = ref("");

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
    };

    emit("add-post", newPost);
    title.value = "";
    content.value = "";
    author.value = "";
  }
}
</script>

<style>
.post-form {
  height: 420px;
  overflow: hidden;
}
</style>
