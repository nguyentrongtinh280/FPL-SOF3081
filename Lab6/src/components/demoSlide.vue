<template>
  <h1 class="text-danger">V show - 1</h1>
  <br />
  <div>
    <button class="btn btn-warning" @click="toggleVisibility">
      Hiển thị / ẩn
    </button>
  </div>
  <p v-show="isVisible">Thông điệp được chuyển đổi bởi v-show</p>
  <br /><br />
  <h1 class="text-danger">V show - 2</h1>
  <div class="container mt-5 col-12">
    <h2 class="mb-4 text-primary">TOP SẢN PHẨM BÁN CHẠY</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(product, index) in products">
        <h4>{{ product.name }} - {{ product.price }} VND</h4>

        <button @click="toggleDetails(index)" class="btn btn-danger">
          {{ showDetails[index] ? "ẨN CHI TIẾT" : "XEM CHI TIẾT" }}
        </button>
        <p v-show="showDetails[index]" class="mt-2">
          {{ product.description }}
        </p>
      </li>
    </ul>
  </div>
  <br />
  <h1 class="text-danger">v-if và v-for</h1>
  <br />

  <ul>
    <template v-for="item in items" :key="item.id">
      <li v-if="item.visible">{{ item.name }}</li>
    </template>
  </ul>
</template>

<script setup>
import { ref } from "vue";

//v show 1
const isVisible = ref(false);
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

//v show 2

const products = ref([
  {
    name: "Quần jean",
    description: "Quần jean cao cấp",
    price: 120000,
  },
  {
    name: "Quần kaki",
    description: "Quần kaki cao cấp",
    price: 120000,
  },
]);

const showDetails = ref(products.value.map(() => false));
const toggleDetails = (index) => {
  showDetails.value[index] = !showDetails.value[index];
};

//v-if and v-for
const items = ref([
  { id: 1, name: "TRÁI TÁO", visible: true },
  { id: 2, name: "TRÁI MÍT", visible: false },
  { id: 3, name: "TRÁI CAM", visible: true },
  { id: 3, name: "TRÁI BƠ", visible: false },
  { id: 3, name: "TRÁI SẦU RIÊNG", visible: true },
]);
</script>
