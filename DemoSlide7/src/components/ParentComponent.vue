<template>
  <div>
    <CustomInput v-model="inputValue" />
    <p>input value: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomInput from "./CustomInput.vue";
const inputValue = ref("");
</script>
