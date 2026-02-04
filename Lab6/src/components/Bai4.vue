<template>
  <div class="container mt-2">
    <div class="card shadow-sm">
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <h3 class="text-primary fw-bold">THÔNG TIN SINH VIÊN</h3>
          <br />
          <div class="mb-3 text-start">
            <label for="name" class="fw-bold">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              v-model="student.name"
              id="name"
              required
            />
          </div>

          <div class="mb-3 text-start">
            <label for="class1" class="fw-bold">Lớp</label>
            <input
              type="text"
              class="form-control"
              v-model="student.class1"
              id="class1"
              required
            />
          </div>

          <div class="mb-3 text-start">
            <label for="score" class="fw-bold">Điểm</label>
            <input
              type="number"
              max="10"
              min="0"
              class="form-control"
              v-model.number="student.score"
              id="score"
              required
            />
          </div>

          <div class="mb-3 text-start">
            <label for="dob" class="fw-bold">Ngày sinh:</label>
            <input
              type="date"
              class="form-control"
              v-model="student.dob"
              id="dob"
              required
            />
          </div>

          <div class="row">
            <div class="col-sm-6 d-grid">
              <button
                type="submit"
                class="btn btn-success w-50 mx-auto text-white"
              >
                <i class="bi bi-plus-circle me-1"></i>
                {{ isEditing ? "Cập nhật" : "Thêm" }}
              </button>
            </div>
            <div class="col-sm-6 d-grid">
              <button
                type="button"
                class="btn btn-info w-50 mx-auto text-white"
                @click="resetForm"
              >
                <i class="bi bi-arrow-clockwise me-1"></i>
                Mới
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <br />
    <div class="card shadow-sm">
      <div class="card-body">
        <h3 class="text-primary fw-bold">DANH SÁCH SINH VIÊN</h3>
        <br />

        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Lớp</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.class1 }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button
                  class="btn btn-warning me-2 text-white"
                  @click="editStudent(index)"
                >
                  <i class="bi bi-pencil-square me-1"></i> Sửa
                </button>
                <button
                  class="btn btn-danger text-white"
                  @click="deleteStudent(index)"
                >
                  <i class="bi bi-trash me-1"></i> Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const students = ref([
  {
    name: "Nguyễn Trọng Tính",
    class1: "SD20310",
    score: 10,
    dob: "2007-11-15",
  },
  { name: "Nguyễn Đức Minh", class1: "SD20310", score: 9, dob: "2005-12-20" },
]);

const student = ref({
  name: "",
  class1: "",
  score: null,
  dob: "",
});

let isEditing = ref(false);
let editingIndex = ref(null);

function submitForm() {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    students.value.push({ ...student.value });
  }
  resetForm();
}

function editStudent(index) {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

function deleteStudent(index) {
  students.value.splice(index, 1);
}

function resetForm() {
  student.value = {
    name: "",
    class1: "",
    score: null,
    dob: "",
  };
}
</script>
