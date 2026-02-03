<template>
  <div class="mt-4">
    <h2 class="text-primary mb-3 text-center">Danh sách bài viết</h2>

    <p v-if="posts.length === 0" class="text-muted fst-italic text-center">
      Chưa có bài viết nào
    </p>

    <div v-else class="row g-4">
      <div v-for="(post, index) in posts" :key="index" class="col-12">
        <div
          class="card shadow-sm"
          :class="{ 'border-danger': post.title.length > 20 }"
        >
          <div class="card-body">
            <h5 class="card-title">
              {{ post.title }}
            </h5>

            <h6 class="card-subtitle mb-2 text-muted">
              Tác giả: {{ post.author }}
            </h6>

            <p class="card-text">
              {{ post.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
