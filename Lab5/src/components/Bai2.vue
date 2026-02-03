<template>
  <div>
    <input v-model="userInput" placeholder="Nhập họ và tên" /><br /><br />
    <input v-model="tuoi" placeholder="Nhập tuổi" />
    <br /><br />
    <div class="bg-warning">
      <h5>Thông tin</h5>
      <p class="text-danger fw-bold">Họ và tên: {{ userInput }}</p>
      <p class="text-danger fw-bold">Tuổi: {{ tuoi }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userInput = ref("");
const tuoi = ref("");
</script>
