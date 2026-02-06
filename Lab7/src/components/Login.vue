<template>
  <div
    class="container vh-100 d-flex justify-content-center align-items-center"
  >
    <div class="card shadow-lg" style="width: 450px">
      <div class="card-body p-4">
        <h2 class="fw-bold text-primary">ĐĂNG NHẬP</h2>
        <br />
        <form @submit.prevent="handleLogin">
          <div class="mb-3 text-start">
            <label for="username" class="fw-bold">Tên đăng nhập</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              placeholder="Nhập tên đăng nhập"
            />
          </div>
          <div class="mb-3 text-start">
            <label for="password" class="fw-bold">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-success w-100">Đăng nhập</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const username = ref("");
const password = ref("");
const emit = defineEmits(["loggedIn"]);
function handleLogin() {
  if (username.value && password.value) {
    emit("loggedIn", username.value);
  }
}
</script>
