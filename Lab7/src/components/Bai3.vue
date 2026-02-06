<template>
  <div class="container mt-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <h3 class="fw-bold text-primary">ĐĂNG KÝ TÀI KHOẢN</h3>
          <br />
          <div class="mb-3 text-start">
            <label for="name" class="fw-bold">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              v-model="user.name"
              id="name"
              required
            />
          </div>
          <div class="mb-3 text-start">
            <label for="email" class="fw-bold">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              id="email"
              required
            />
          </div>

          <div class="mb-3 text-start">
            <label for="password" class="fw-bold">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="password"
              required
            />
          </div>
          <div class="mb-3 text-start">
            <label for="confirmPassword" class="fw-bold"
              >Xác nhận mật khẩu</label
            >
            <input
              type="password"
              v-model="confirmPassword"
              class="form-control"
              id="confirmPassword"
              required
            />
          </div>

          <div class="mb-3 text-start">
            <label for="dob" class="fw-bold">Ngày sinh</label>
            <input
              type="date"
              class="form-control"
              v-model="user.dob"
              id="dob"
              required
            />
          </div>

          <div class="mb-3 text-start">
            <label class="form-label fw-bold">Giới tính</label>
            <div class="form-check form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                v-model="user.gender"
                id="male"
                value="Nam"
                required
              />
              <label class="form-check-label" for="male">Nam</label>
            </div>

            <div class="form-check form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                v-model="user.gender"
                id="female"
                value="Nữ"
                required
              />
              <label class="form-check-label" for="female">Nữ</label>
            </div>
          </div>

          <div class="mb-3 text-start">
            <label class="form-label fw-bold">Ngôn ngữ </label>
            <input
              type="checkbox"
              value="vietnam"
              v-model="user.languages"
            />Tiếng Việt
            <input
              type="checkbox"
              value="english"
              v-model="user.languages"
            />Tiếng Anh
            <input
              type="checkbox"
              value="japan"
              v-model="user.languages"
            />Tiếng Nhật
          </div>

          <button class="btn btn-success w-100" type="submit">Đăng ký</button>
        </form>
      </div>
    </div>
    <br /><br />

    <div class="card shadow-sm" v-if="registerUser">
      <div class="card-body text-start">
        <h3 class="fw-bold text-primary">THÔNG TIN ĐÃ ĐĂNG KÝ</h3>
        <p><strong>Họ và tên:</strong> {{ registerUser.name }}</p>
        <p><strong>Email:</strong> {{ registerUser.email }}</p>
        <p><strong>Ngày sinh:</strong> {{ registerUser.dob }}</p>
        <p><strong>Giới tính:</strong> {{ registerUser.gender }}</p>
        <p>
          <strong>Ngôn ngữ: </strong>
          <span v-if="registerUser.languages.length">
            {{ registerUser.languages.join(", ") }}
          </span>
          <span v-else>Không chọn</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ref } from "vue";
const user = reactive({
  name: "",
  email: "",
  dob: "",
  password: "",
  gender: "",
  languages: [],
});

const confirmPassword = ref("");
const registerUser = ref(null);
function submitForm() {
  if (user.password != confirmPassword.value) {
    alert("Mật khẩu xác nhận không khớp");
    return;
  }

  registerUser.value = { ...user };
  resetForm();
}

function resetForm() {
  user.name = "";
  user.email = "";
  user.dob = "";
  user.password = "";
  user.gender = "";
  user.languages = [];
}
</script>
