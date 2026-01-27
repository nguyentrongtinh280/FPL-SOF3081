<template>
  <Navbar />
  <main class="pt-5">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
