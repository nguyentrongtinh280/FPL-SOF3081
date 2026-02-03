<template>
  <div class="container">
    <h3>Nhập tháng của bạn:</h3>
    <br />
    <input type="number" v-model.number="month" /><br /><br />
    <p v-if="month < 1 || month > 12" class="text-danger fw-bold">
      Vui lòng nhập tháng từ 1 đến 12
    </p>
    <p v-else-if="month >= 1 && month <= 3" class="text- fw-bold">Mùa xuân</p>
    <p v-else-if="month <= 6" class="text-primary fw-bold">Mùa hè</p>
    <p v-else-if="month <= 9" class="text-primary fw-bold">Mùa thu</p>
    <p v-else class="text-primary fw-bold">Mùa đông</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const month = ref("1");
</script>
