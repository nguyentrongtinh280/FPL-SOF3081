<template>
  <div class="p-5">
    <p :class="{ 'text-primary': isBlue, 'text-success': !isBlue }">
      {{ message }}
    </p>
    <button class="btn btn-danger" @click="updateMessage">Bài 1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("PHẦN I: Data binding và Reactivity trong VueJS");
const isBlue = ref(false);

const updateMessage = () => {
  message.value = "Bài 1: Làm quen cơ bản với sự kiện và binding động";
  isBlue.value = !isBlue.value;
};
</script>
