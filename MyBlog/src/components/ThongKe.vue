<template>
  <div class="container mt-4 pt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-light fw-bold">
        <i class="fa-solid fa-chart-column"></i> Thống kê
      </div>

      <div class="card-body">
        <div class="row text-center">
          <div class="col-md-4">
            <div class="card p-3 shadow-sm border-success">
              <h6 class="text-muted">Tổng số bài viết</h6>
              <h2 class="text-success">{{ totalPosts }}</h2>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card p-3 shadow-sm border-success">
              <h6 class="text-muted">Tổng số người dùng</h6>
              <h2 class="text-success">{{ totalUsers }}</h2>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <router-link to="/" class="btn btn-secondary">
            <i class="fa-solid fa-arrow-left"></i> Quay lại trang chủ
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { posts2 } from "../data/postData";

const totalPosts = computed(() => posts2.length);
const totalUsers = computed(() => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.length;
});
</script>
