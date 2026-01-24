<template>
  <h1>Hien thi noi dung</h1>
  <h2>{{ message }}</h2>
  <h2>{{ number + 5 }}</h2>
  <h2>{{ sayHi() }}</h2>
</template>

<script setup>
const message = "Xin chao vuejs";
const number = 10;
const sayHi = () => {
  return "Day la mot phuong thuc";
};
</script>
