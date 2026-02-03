<template>
  <div class="login-wrapper">
    <div class="card login-card shadow-lg">
      <div class="row g-0">
        <div class="col-md-12 login-right">
          <h3 class="text-center fw-bold mb-4 text-primary">Đăng nhập</h3>

          <form @submit.prevent="handleSubmit" novalidate>
            <!-- Username -->
            <div class="mb-3 position-relative">
              <i class="fa fa-user input-icon"></i>
              <input
                type="text"
                class="form-control"
                v-model="username"
                placeholder="Tên đăng nhập"
                :class="{ 'is-invalid': submitted && !username }"
              />
              <div class="invalid-feedback">Vui lòng nhập tên đăng nhập!</div>
            </div>

            <!-- Password -->
            <div class="mb-3 position-relative">
              <i class="fa fa-lock input-icon"></i>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Mật khẩu"
                :class="{ 'is-invalid': submitted && !password }"
              />
              <div class="invalid-feedback">Vui lòng nhập mật khẩu!</div>
            </div>

            <!-- Remember + forgot -->
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="remember"
                  id="remember"
                />
                <label class="form-check-label" for="remember">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <router-link to="/forgot-password"> Quên mật khẩu? </router-link>
            </div>

            <!-- Button -->
            <div class="d-grid mb-3">
              <button class="btn btn-success text-white">Đăng nhập</button>
            </div>

            <!-- Register -->
            <div class="text-center">
              <span>Chưa có tài khoản?</span>
              <router-link
                to="/register"
                class="fw-bold text-decoration-none ms-1"
              >
                Đăng ký
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const remember = ref(false);
const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;

  if (!username.value || !password.value) {
    return;
  }

  // 👉 Xử lý đăng nhập (API / Vuex / Pinia)
  console.log({
    username: username.value,
    password: password.value,
    remember: remember.value,
  });
};
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #6f86d6, #9f5bd1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  max-width: 800px;
  width: 500px;
  border-radius: 15px;
  overflow: hidden;
  height: 390px;
}

.login-right {
  padding: 50px;
}

.form-control {
  border-radius: 50px;
  padding-left: 45px;
  height: 48px;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: #aaa;
}

.invalid-feedback {
  margin-left: 20px;
}
</style>
