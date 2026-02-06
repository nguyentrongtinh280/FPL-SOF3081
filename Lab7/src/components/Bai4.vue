<template>
  <Login v-if="!isLoggedIn" @loggedIn="handleLogin" />
  <Comment v-else :username="username" />
</template>

<script setup>
import { ref } from "vue";
import Login from "./Login.vue";
import Comment from "./Comment.vue";

const isLoggedIn = ref(false);
const username = ref("");

function handleLogin(name) {
  username.value = name;
  isLoggedIn.value = true;
}
</script>
