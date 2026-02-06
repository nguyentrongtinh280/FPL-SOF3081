<template>
  <div>
    <Login v-if="!isLoggedIn" @LoggedIn="handleLoginSuccess" />
    <Comment v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import Bai1 from "./components/Bai1.vue";
import Bai2 from "./components/Bai2.vue";
import Bai3 from "./components/Bai3.vue";

// bài 4
import { ref } from "vue";
import Login from "./components/Login.vue";
import Comment from "./components/Comment.vue";
const isLoggedIn = ref(false);
const loggedInUser = ref("");
function handleLoginSuccess(username) {
  loggedInUser.value = username;
  isLoggedIn.value = true;
}
</script>
