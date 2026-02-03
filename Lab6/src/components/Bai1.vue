<template>
  <div>
    <h3 class="text-danger">Nhập điểm của bạn</h3>
    <input type="number" v-model="score" min="0" max="10" />
    <p v-if="score >= 9" class="text-success">Xuất sắc</p>
    <p v-else-if="score >= 8" class="text-success">Giỏi</p>
    <p v-else-if="score >= 6.5" class="text-success">Khá</p>
    <p v-else-if="score >= 5" class="text-success">Trung bình</p>
    <p v-else class="text-success">Yếu</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const score = ref(0);
</script>
