<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12 mt-4 pt-5">
        <div class="card shadow-sm">
          <div class="card-header bg-light fw-bold">
            <h5 class="mb-0">
              <i class="fa-solid fa-pen-to-square"></i> Đăng bài viết mới
            </h5>
          </div>

          <div class="card-body">
            <form class="was-validated" @submit.prevent="submitPost">
              <div class="mb-3">
                <label class="form-label fw-bold">Tiêu đề bài viết</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.title"
                  required
                />
                <div class="invalid-feedback">
                  Vui lòng nhập tiêu đề bài viết!
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">Nội dung</label>
                <textarea
                  class="form-control"
                  v-model="form.content"
                  rows="8"
                  required
                ></textarea>
                <div class="invalid-feedback">
                  Vui lòng nhập nội dung bài viết
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">Hình ảnh</label>
                <input
                  type="file"
                  class="form-control"
                  accept="image/*"
                  @change="previewImage"
                />
                <img
                  v-if="form.imagePreview"
                  :src="form.imagePreview"
                  class="preview-img mt-2"
                />
              </div>

              <div class="d-flex justify-content-between">
                <router-link to="/" class="btn btn-secondary">
                  <i class="fa-solid fa-arrow-left"></i> Quay lại
                </router-link>

                <div>
                  <button class="btn btn-success text-white me-2">
                    <i class="fa-solid fa-paper-plane"></i>
                    {{ isEditing ? "Cập nhật" : "Đăng bài" }}
                  </button>

                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="resetForm"
                  >
                    <i class="fa-solid fa-arrow-rotate-left"></i> Mới
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="card mt-4 shadow-sm">
          <div class="card-header bg-light fw-bold">
            <i class="fa-solid fa-magnifying-glass"></i> Tìm kiếm bài viết
          </div>
          <div class="card-body">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Nhập tiêu đề bài viết"
                v-model="keyword"
              />
              <button type="button" class="btn btn-warning">
                <i class="fa-solid fa-magnifying-glass"></i> Tìm kiếm
              </button>
            </div>
          </div>
        </div>

        <div class="card mt-4 shadow-sm">
          <div class="card-header bg-light fw-bold">
            <i class="fa-solid fa-list"></i> Bài viết của tôi
          </div>

          <ul class="list-group list-group-flush">
            <li
              class="list-group-item d-flex justify-content-between"
              v-for="(post, index) in filterPosts"
              :key="index"
            >
              <span>{{ post.title }}</span>
              <div>
                <button
                  class="btn btn-sm btn-warning me-2"
                  @click="updatePost(index)"
                >
                  <i class="fa-solid fa-pen"></i> Sửa
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  @click="deletePost(index)"
                >
                  <i class="fa-solid fa-trash"></i> Xóa
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { posts2 } from "../data/postData";

const editingIndex = ref(null);
const form = reactive({
  title: "",
  content: "",
  imagePreview: null,
});
const keyword = ref("");
const filterPosts = computed(() => {
  if (!keyword.value) return posts2;
  return posts2.filter((post) =>
    post.title.toLowerCase().includes(keyword.value.toLowerCase()),
  );
});

const isEditing = computed(() => editingIndex.value !== null);

function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    form.imagePreview = URL.createObjectURL(file);
  }
}

function submitPost() {
  if (!form.title || !form.content) {
    return;
  }
  if (isEditing.value) {
    // posts.value[editingIndex.value] = {
    //   title: form.title,
    //   content: form.content,
    //   image: form.imagePreview,
    // };
    posts2[editingIndex.value] = {
      title: form.title,
      content: form.content,
      img: form.imagePreview,
    };
  } else {
    // posts.value.push({
    //   title: form.title,
    //   content: form.content,
    //   image: form.imagePreview,
    // });
    posts2.push({
      title: form.title,
      content: form.content,
      img: form.imagePreview,
    });
  }
  resetForm();
}

function updatePost(index) {
  const realPost = filterPosts.value[index];
  const realIndex = posts2.indexOf(realPost);
  form.title = realPost.title;
  form.content = realPost.content;
  form.imagePreview = realPost.img;
  editingIndex.value = realIndex;
}

function deletePost(index) {
  if (confirm("Bạn có chắc muốn xóa bài viết này")) {
    const realPost = filterPosts.value[index];
    const realIndex = posts2.indexOf(realPost);
    posts2.splice(realIndex, 1);
  }
}

function resetForm() {
  form.title = "";
  form.content = "";
  form.imagePreview = null;
  editingIndex.value = null;
}
</script>

<style scoped>
.preview-img {
  max-width: 200px;
  border-radius: 6px;
  border: 1px solid #ddd;
}
</style>
