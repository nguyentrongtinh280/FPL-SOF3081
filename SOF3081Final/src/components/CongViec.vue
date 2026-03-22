<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12 mt-4 pt-5">
        <div class="card shadow-sm">
          <div class="card-header bg-light fw-bold">
            <h5 class="mb-0">
              <i class="fa-solid fa-pen-to-square"></i> Quản lý công việc
            </h5>
          </div>

          <div class="card-body">
            <form
              :class="{ 'was-validated': isSubmitted }"
              @submit.prevent="create"
              novalidate
            >
              <div class="mb-3">
                <label class="form-label fw-bold">Tên công việc</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  required
                />
                <div class="invalid-feedback">Vui lòng nhập tên công việc!</div>
              </div>

              <div>
                <button class="btn btn-success text-white me-2">
                  <i class="fa-solid fa-plus"></i> Thêm
                </button>
                <button class="btn btn-warning text-white me-2">
                  <i class="fa-solid fa-pen"></i> Sửa
                </button>
                <button class="btn btn-secondary text-white" @click="reset">
                  <i class="fa-solid fa-arrow-rotate-left"></i> Mới
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="card mt-4 shadow-sm">
          <div class="card-header bg-light fw-bold">
            <i class="fa-solid fa-magnifying-glass"></i> Tìm kiếm công việc
          </div>

          <div class="card-body">
            <div class="input-group">
              <input
                type="text"
                class="form-control me-2"
                placeholder="Nhập tên công việc..."
                v-model="keyword"
              />
              <button
                type="button"
                class="btn btn-warning text-white"
                @click="resetSearch"
              >
                <i class="fa-solid fa-arrow-rotate-left"></i> Mới
              </button>
            </div>
          </div>
        </div>

        <div class="card mt-4 shadow-sm">
          <div class="card-header bg-light fw-bold">
            <i class="fa-solid fa-industry"></i> Danh sách công việc
          </div>

          <div class="table-responsive">
            <table class="table table-hover table-bordered text-center mb-0">
              <thead>
                <tr>
                  <th>Tên công việc</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cv, index) in filterCV" :key="index">
                  <td>{{ cv.name }}</td>
                  <td>
                    <div>
                      <button
                        class="btn btn-sm btn-warning me-2 text-white"
                        @click="update(index)"
                      >
                        <i class="fa-solid fa-pen"></i> Sửa
                      </button>
                      <button
                        class="btn btn-sm btn-danger"
                        @click="deleteProduct(index)"
                      >
                        <i class="fa-solid fa-trash"></i> Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from "vue";
//import { product } from "../data/productData";
const congviec = ref([]);
const editingIndex = ref(null);
const isSubmitted = ref(false);
const keyword = ref("");
const form = reactive({
  name: "",
});

onMounted(() => {
  const savedCongviecs = localStorage.getItem("congviecs");
  if (savedCongviecs) {
    congviec.value = JSON.parse(savedCongviecs);
  }
});

const filterCV = computed(() => {
  if (!keyword.value) {
    return congviec.value;
  }
  return congviec.value.filter((p) =>
    p.name.toLowerCase().includes(keyword.value.toLowerCase()),
  );
});

const isEditing = computed(() => editingIndex.value !== null);

function create(e) {
  isSubmitted.value = true;
  const formElement = e.target;
  if (!formElement.checkValidity()) {
    return;
  }
  if (isEditing.value) {
    congviec.value[editingIndex.value] = {
      name: form.name,
    };
  } else {
    congviec.value.push({
      name: form.name,
    });
  }

  saveProduct();
  reset();
  isSubmitted.value = false;
}

function update(index) {
  const realcongviec = filterCV.value[index];
  const realIndex = congviec.value.indexOf(realcongviec);
  form.name = realcongviec.name;
  editingIndex.value = realIndex;
}

function deleteProduct(index) {
  if (confirm("Bạn có chắc muốn xóa công việc này!")) {
    const realcongviec = filterCV.value[index];
    const realIndex = congviec.value.indexOf(realcongviec);
    congviec.value.splice(realIndex, 1);
    saveProduct();
  }
}

function reset() {
  form.name = "";
  editingIndex.value = null;
}

function resetSearch() {
  keyword.value = "";
}

function saveProduct() {
  localStorage.setItem("congviecs", JSON.stringify(congviec.value));
}
</script>
