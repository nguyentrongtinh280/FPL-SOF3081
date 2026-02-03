<template>
  <h1>{{ greeting }}</h1>
  <button v-bind:title="buttonTitle" @click="changeGreeting">Click</button>
</template>

<script setup>
import { ref } from "vue";
const buttonTitle = ref("Button xin chào 1");
const greeting = ref("Xin chào các bạn!");
const changeGreeting = () => {
  buttonTitle.value = "Button xin chào 2";
  greeting.value = "Các bạn có khỏe không?";
};
</script>
