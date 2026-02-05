<template>
  <div class="container mt-2">
    <div class="card shadow-sm">
      <div class="card-body">
        <div v-if="!isLoggedIn">
          <h3 class="text-primary fw-bold">ĐĂNG NHẬP</h3>
          <form @submit.prevent="login">
            <div class="mb-3 mt-3 text-start">
              <label class="fw-bold">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Nhập email"
              />
              <p v-if="emailError" style="color: red">{{ emailError }}</p>
            </div>
            <div class="mb-3 text-start">
              <label class="fw-bold">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Nhập mật khẩu"
              />
              <div v-if="passwordError" style="color: red">
                {{ passwordError }}
              </div>
            </div>
            <button type="submit" class="btn btn-success">Đăng nhập</button>
          </form>
        </div>

        <div v-else class="p-5 text-center">
          <h3 class="text-primary">
            Chào mừng,
            <span class="fw-bold d-block text-dark">{{ email }}</span>
          </h3>
          <button @click="logout" class="btn btn-danger">Đăng xuất</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoggedIn = ref(false);
const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
  emailError.value = "";
  passwordError.value = "";
  if (!email.value) {
    emailError.value = "Vui lòng nhập email!";
  } else if (!emailRegex.test(email.value)) {
    emailError.value = "Vui lòng nhập email hợp lệ!";
  }

  if (!password.value) {
    passwordError.value = "Vui lòng nhập mật khẩu!";
  }

  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true;
  }
};

const logout = () => {
  isLoggedIn.value = false;
  email.value = "";
  password.value = "";
  passwordError.value = "";
  emailError.value = "";
};
</script>
