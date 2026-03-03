<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12 mt-4 pt-5">
        <div class="card shadow-sm">
          <div class="card-header bg-light fw-bold">
            <h5 class="mb-0">
              <i class="fa-solid fa-pen-to-square"></i> Quản lý sản phẩm
            </h5>
          </div>

          <div class="card-body">
            <form
              :class="{ 'was-validated': isSubmitted }"
              @submit.prevent="create"
              novalidate
            >
              <div class="mb-3">
                <label class="form-label fw-bold">Mã sản phẩm</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.id"
                  readonly
                />
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">Tên sản phẩm</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.name"
                  required
                />
                <div class="invalid-feedback">Vui lòng nhập tên sản phẩm!</div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">Giá</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.price"
                  required
                />
                <div class="invalid-feedback">Vui lòng nhập giá sản phẩm!</div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Số lượng</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.quantity"
                  required
                />
                <div class="invalid-feedback">
                  Vui lòng nhập số lượng sản phẩm!
                </div>
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
            <i class="fa-solid fa-magnifying-glass"></i> Tìm kiếm sản phẩm
          </div>

          <div class="card-body">
            <div class="input-group">
              <input
                type="text"
                class="form-control me-2"
                placeholder="Nhập tên sản phẩm....."
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
            <i class="fa-solid fa-industry"></i> Danh sách sản phẩm
          </div>

          <div class="table-responsive">
            <table class="table table-hover table-bordered text-center mb-0">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in filterProducts" :key="index">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ formatPrice(product.price) }} VNĐ</td>
                  <td>{{ product.quantity }}</td>
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
const product = ref([]);
const editingIndex = ref(null);
const isSubmitted = ref(false);
const keyword = ref("");
const form = reactive({
  id: "",
  name: "",
  price: "",
  quantity: "",
});

onMounted(() => {
  const savedProducts = localStorage.getItem("products");
  if (savedProducts) {
    product.value = JSON.parse(savedProducts);
  }
});

const filterProducts = computed(() => {
  if (!keyword.value) {
    return product.value;
  }
  return product.value.filter((p) =>
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
    product.value[editingIndex.value] = {
      id: product.value[editingIndex.value].id,
      name: form.name,
      price: form.price,
      quantity: form.quantity,
    };
  } else {
    product.value.push({
      id: Date.now(),
      name: form.name,
      price: form.price,
      quantity: form.quantity,
    });
  }

  saveProduct();
  reset();
  isSubmitted.value = false;
}

function update(index) {
  const realProduct = filterProducts.value[index];
  const realIndex = product.value.indexOf(realProduct);
  form.id = realProduct.id;
  form.name = realProduct.name;
  form.price = realProduct.price;
  form.quantity = realProduct.quantity;
  editingIndex.value = realIndex;
}

function deleteProduct(index) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này!")) {
    const realProduct = filterProducts.value[index];
    const realIndex = product.value.indexOf(realProduct);
    product.value.splice(realIndex, 1);
    saveProduct();
  }
}

function reset() {
  form.id = "";
  form.name = "";
  form.price = "";
  form.quantity = "";
  editingIndex.value = null;
}

function resetSearch() {
  keyword.value = "";
}

function saveProduct() {
  localStorage.setItem("products", JSON.stringify(product.value));
}

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price);
}
</script>
