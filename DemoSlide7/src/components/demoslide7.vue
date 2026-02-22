<script setup>
const handleClick = (message) => {
  alert(message);
};

const clickcha = () => {
  alert("cha");
};
const clickcon = () => {
  alert("con");
};

const clickSelf = () => {
  alert("self");
};

const clickOnce = () => {
  alert("once");
};
</script>

<template>
  <div>
    <button @click="handleClick('hi')">Click me</button>
  </div>

  <div @click.capture="clickcha">
    <button @click="clickcon">Click</button>
  </div>

  <form @submit.prevent="submitForm">
    <button type="submit">Gửi</button>
  </form>

  <div @click.self="clickSelf" style="padding: 20px; background: #eee">
    <button>Click button nè</button>
  </div>

  <button @click.once="clickOnce">click once</button>
</template>
