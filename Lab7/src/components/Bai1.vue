<template>
  <div class="container mt-2">
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="text-primary fw-bold text-center">QUẢN LÝ CÔNG VIỆC</h3>
        <br />
        <form @submit.prevent="addList">
          <div class="mb-3 text-start">
            <label class="form-label fw-bold">Tên công việc</label><br />
            <input
              type="text"
              class="form-control"
              v-model="newToDo"
              placeholder="Nhập tên công việc"
              id="taskName"
            />
          </div>
          <button type="submit" class="btn btn-success me-2">
            <i class="bi bi-plus-circle me-1"></i>
            {{ isEditing ? "Cập nhật" : "Thêm" }}
          </button>
          <button
            type="button"
            class="btn btn-info text-white"
            @click="resetForm"
          >
            <i class="bi bi-arrow-clockwise me-1"></i> Mới
          </button>
        </form>
        <br />
        <h5 class="text-success fw-bold">DANH SÁCH CÔNG VIỆC CỦA BẠN</h5>
        <ul class="list-group mt-4">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(job, index) in filterJobs"
            :key="index"
          >
            {{ job }}
            <div class="text-end">
              <button
                class="btn btn-warning btn-sm me-2 text-white"
                @click="update(index)"
              >
                <i class="bi bi-pencil-square me-1"></i> Sửa
              </button>
              <button class="btn btn-danger btn-sm" @click="remove(index)">
                <i class="bi bi-trash me-1"></i> Xóa
              </button>
            </div>
          </li>
        </ul>
        <br />
        <div class="mb-3 text-start">
          <label class="form-label fw-bold">Tìm kiếm</label>
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Nhập tên công việc"
            v-model="keyword"
          />
          <button
            type="button"
            class="btn btn-danger me-2 text-white"
            @click="search"
          >
            <i class="bi bi-search me-1"></i> Tìm kiếm
          </button>
          <button
            type="button"
            class="btn btn-info text-white"
            @click="resetSearch"
          >
            <i class="bi bi-arrow-clockwise me-1"></i> Mới
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let isEditing = ref(false);
let editingIndex = ref(null);
const newToDo = ref("");
const keyword = ref("");
const jobs = ref(["Ăn sáng", "Đi học", "Học tiếng anh"]);
const filterJobs = ref([...jobs.value]);

function addList() {
  if (!newToDo.value.trim()) return;

  if (isEditing.value) {
    jobs.value[editingIndex.value] = newToDo.value;
  } else {
    jobs.value.push(newToDo.value);
  }
  filterJobs.value = [...jobs.value];
  resetForm();
}

function remove(index) {
  if (confirm("Bạn có chắc muốn xóa công việc?")) {
    jobs.value.splice(index, 1);
    filterJobs.value = [...jobs.value];
  }
}

function update(index) {
  newToDo.value = jobs.value[index];
  isEditing.value = true;
  editingIndex.value = index;
}

function resetForm() {
  newToDo.value = "";
  isEditing.value = false;
  editingIndex.value = null;
}

function search() {
  const key = keyword.value.trim().toLowerCase();
  if (!key) {
    filterJobs.value = [...jobs.value];
    return;
  }
  filterJobs.value = jobs.value.filter((job) =>
    job.toLowerCase().includes(key),
  );
}

function resetSearch() {
  keyword.value = "";
  filterJobs.value = [...jobs.value];
}
</script>
