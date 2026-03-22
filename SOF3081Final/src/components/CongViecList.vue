<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12 mt-4 pt-5">
        <div class="card mt-4 shadow-sm">
          <div class="card-header bg-light fw-bold">
            <i class="fa-solid fa-industry"></i> Danh sách công việc
          </div>

          <div class="table-responsive">
            <table class="table table-hover table-bordered text-center mb-0">
              <thead>
                <tr>
                  <th>Tên công việc</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cv, index) in filterCV" :key="index">
                  <td>{{ cv.name }}</td>
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
