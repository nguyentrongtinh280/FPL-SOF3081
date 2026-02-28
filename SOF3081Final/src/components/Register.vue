<template>
  <div class="login-wrapper">
    <div class="card login-card shadow-lg">
      <div class="row g-0">
        <div class="col-md-12 login-right">
          <h2 class="text-center fw-bold mb-4 text-primary">
            Đăng ký tài khoản
          </h2>
          <form @submit.prevent="handleSubmit" novalidate>
            <div class="mb-3 position-relative">
              <i class="fa fa-user input-icon"></i>
              <input
                type="text"
                class="form-control"
                v-model="fullname"
                placeholder="Họ và tên"
                :class="{ 'is-invalid': submitted && !fullname }"
              />
              <div class="invalid-feedback">Vui lòng nhập họ và tên!</div>
            </div>

            <div class="mb-3 position-relative">
              <i class="fa-solid fa-address-card input-icon"></i>
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
              <i class="fa-solid fa-envelope input-icon"></i>
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Email"
                :class="{ 'is-invalid': submitted && !email }"
              />
              <div class="invalid-feedback">Vui lòng nhập email!</div>
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

            <div class="mb-3 position-relative">
              <i class="fa fa-lock input-icon"></i>
              <input
                type="password"
                class="form-control"
                v-model="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                :class="{ 'is-invalid': submitted && !confirmPassword }"
              />
              <div class="invalid-feedback">
                Vui lòng nhập xác nhận mật khẩu!
              </div>
            </div>

            <div class="d-grid mb-3">
              <button class="btn btn-success text-white">Đăng ký</button>
            </div>

            <div class="text-center">
              <span>Đã có tài khoản?</span>
              <router-link
                to="/login"
                class="fw-bold text-decoration-none ms-1"
              >
                Đăng nhập
              </router-link>
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
const fullname = ref("");
const email = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const submitted = ref(false);
const errorMessage = ref("");

function handleSubmit() {
  submitted.value = true;
  errorMessage.value = "";
  if (
    !username.value ||
    !password.value ||
    !confirmPassword.value ||
    !fullname.value ||
    !email.value
  ) {
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Xác nhận mật khẩu không khớp!";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find((u) => u.username === username.value);
  if (userExists) {
    errorMessage.value = "Tên đăng nhập đã tồn tại!";
    return;
  }

  const emailExists = users.find((u) => u.email === email.value);
  if (emailExists) {
    errorMessage.value = "Email đã tồn tại!";
    return;
  }

  users.push({
    fullname: fullname.value,
    username: username.value,
    email: email.value,
    password: password.value,
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký tài khoản thành công!");
  router.push("/login");
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
  height: 535px;
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
