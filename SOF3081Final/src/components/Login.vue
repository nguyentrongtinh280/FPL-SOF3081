<template>
  <div class="login-wrapper">
    <div class="card login-card shadow-lg">
      <div class="row g-0">
        <div class="col-md-12 login-right">
          <h2 class="text-center fw-bold mb-4 text-primary">Đăng nhập</h2>
          <form @submit.prevent="handleSubmit" novalidate>
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

            <div class="d-grid mb-3">
              <button class="btn btn-success text-white fw-bold">
                Đăng nhập
              </button>
            </div>

            <div class="text-center">
              <span>Chưa có tài khoản?</span>
              <router-link
                to="/register"
                class="fw-bold text-decoration-none ms-1"
              >
                Đăng ký
              </router-link>
            </div>

            <div class="d-grid mt-3">
              <button class="btn btn-danger text-white fw-bold">
                <i class="fa-brands fa-google"></i> Đăng nhập với google
              </button>
            </div>

            <div v-if="errorMessage" class="text-danger text-center">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const submitted = ref(false);
const errorMessage = ref("");

const handleSubmit = () => {
  submitted.value = true;
  errorMessage.value = "";

  if (!username.value || !password.value) {
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (u) => u.username === username.value && u.password === password.value,
  );

  if (foundUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    router.push("/");
  } else {
    errorMessage.value = "Sai tên đăng nhập hoặc mật khẩu!";
  }
};
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  max-width: 800px;
  width: 500px;
  border-radius: 15px;
  overflow: hidden;
  height: 410px;
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
