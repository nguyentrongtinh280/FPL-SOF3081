<template>
  <div class="login-wrapper">
    <div class="card login-card shadow-lg">
      <div class="row g-0">
        <div class="col-md-12 login-right">
          <h2 class="text-center fw-bold mb-4 text-primary">Đổi mật khẩu</h2>
          <form @submit.prevent="handleSubmit" novalidate>
            <div class="mb-3 position-relative">
              <i class="fa-solid fa-key input-icon"></i>
              <input
                type="password"
                class="form-control"
                v-model="oldPassword"
                placeholder="Mật khẩu cũ"
                :class="{ 'is-invalid': submitted && !oldPassword }"
              />
              <div class="invalid-feedback">Vui lòng nhập mật khẩu cũ!</div>
            </div>

            <div class="mb-3 position-relative">
              <i class="fa fa-lock input-icon"></i>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Mật khẩu mới"
                :class="{ 'is-invalid': submitted && !password }"
              />
              <div class="invalid-feedback">Vui lòng nhập mật khẩu mới!</div>
            </div>

            <div class="mb-3 position-relative">
              <i class="fa fa-lock input-icon"></i>
              <input
                type="password"
                class="form-control"
                v-model="confirmPassword"
                placeholder="Xác nhận mật khẩu mới"
                :class="{ 'is-invalid': submitted && !confirmPassword }"
              />
              <div class="invalid-feedback">
                Vui lòng nhập xác nhận mật khẩu mới!
              </div>
            </div>

            <div class="d-grid mb-3">
              <button class="btn btn-success text-white">Cập nhật</button>
            </div>
            <div v-if="errorMessage" class="text-danger text-center mt-3">
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
const oldPassword = ref("");
const password = ref("");
const confirmPassword = ref("");
const submitted = ref(false);
const errorMessage = ref("");

function handleSubmit() {
  submitted.value = true;
  errorMessage.value = "";

  if (!oldPassword.value || !password.value || !confirmPassword.value) {
    return;
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users"));

  if (oldPassword.value !== currentUser.password) {
    errorMessage.value = "Mật khẩu cũ không hợp lệ!";
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Xác nhận mật khẩu mới không khớp!";
    return;
  }

  const index = users.findIndex((u) => u.username === currentUser.username);
  if (index != -1) {
    users[index].password = password.value;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users[index]));
  }

  alert("Đổi mật khẩu thành công!");
  router.push("/");
}
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
  height: 380px;
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
