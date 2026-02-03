<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="card shadow-sm border-0">
        <div class="card-body p-4">
          <h1 class="text-danger text-center">Thông tin cá nhân</h1>
          <form>
            <div class="mb-3">
              <label>Họ và tên:</label>
              <input
                v-model="userInfo.name"
                type="text"
                class="form-control"
                placeholder="Nhập họ và tên"
              />
            </div>

            <div class="mb-3">
              <label>Tuổi:</label>
              <input
                v-model="userInfo.age"
                type="text"
                class="form-control"
                placeholder="Nhập tuổi"
              />
            </div>

            <div class="mb-3">
              <label>Email:</label>
              <input
                v-model="userInfo.email"
                type="text"
                class="form-control"
                placeholder="Nhập email"
              />
            </div>
          </form>
          <hr class="my-4" />

          <div class="bg-light p-3 rounded">
            <h2>Thôn tin đã nhập</h2>
            <p><strong>Họ và tên:</strong>{{ userInfo.name }}</p>
            <p><strong>Tuổi:</strong>{{ userInfo.age }}</p>
            <p><strong>Email:</strong>{{ userInfo.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const userInfo = reactive({
  name: "",
  age: "",
  email: "",
});
</script>
