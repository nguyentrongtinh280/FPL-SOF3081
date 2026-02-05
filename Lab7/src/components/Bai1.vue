<template>
  <div class="container mt-2">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="text-primary fw-bold text-center">QUẢN LÝ CÔNG VIỆC</h3>
        <br />
        <form @submit.prevent="addList">
          <div class="mb-3 text-start">
            <label class="form label fw-bold">Tên công việc</label><br />
            <input
              type="text"
              class="form-control"
              v-model="newToDo"
              placeholder="Nhập tên công việc"
            />
          </div>
          <button type="submit" class="btn btn-success">Thêm công việc</button>
        </form>
        <ul class="list-group mt-4">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(job, index) in jobs"
            :key="index"
          >
            {{ job }}
            <button class="btn btn-danger btn-sm" @click="remove(index)">
              Xóa
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newToDo = ref("");
const jobs = ref(["Ăn sáng", "Đi học", "Học tiếng anh"]);
const addList = () => {
  if (newToDo.value.trim()) {
    jobs.value.push(newToDo.value.trim());
    newToDo.value = "";
  }
};

const remove = (index) => {
  if (confirm("Bạn có chắc muốn xóa công việc này khỏi danh sách?")) {
    jobs.value.splice(index, 1);
  }
};
</script>
