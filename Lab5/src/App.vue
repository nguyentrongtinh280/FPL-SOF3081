<template>
  <div class="container mt-4">
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
//import Bai1 from "./components/Bai1.vue";
//import Bai2 from "./components/Bai2.vue";
//import Bai3 from "./components/Bai3.vue";

//Bai4
import { ref } from "vue";
import CreatePost from "./components/CreatePost.vue";
import PostList from "./components/PostList.vue";

const posts = ref([]);
function addPost(post) {
  posts.value.push(post);
}
</script>
