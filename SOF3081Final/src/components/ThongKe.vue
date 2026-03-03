<template>
  <div class="container mt-4 pt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-light fw-bold">
        <i class="fa-solid fa-chart-column"></i> Thống kê
      </div>

      <div class="card-body">
        <div class="row text-center">
          <div class="col-md-4">
            <div class="card p-3 shadow-sm border-warning">
              <h6 class="text-muted">Tổng số sản phẩm</h6>
              <h2 class="text-success">{{ totalProducts }}</h2>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card p-3 shadow-sm border-success">
              <h6 class="text-muted">Tổng số người dùng</h6>
              <h2 class="text-success">{{ totalUsers }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const totalUsers = computed(() => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.length;
});

const totalProducts = computed(() => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  return products.length;
});
</script>
