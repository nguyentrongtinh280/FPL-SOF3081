<template>
  <Navbar v-if="showLayout" />

  <main :class="showLayout ? 'pt-5' : ''">
    <router-view />
  </main>

  <Footer v-if="showLayout" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

const showLayout = computed(() => {
  return route.meta.layout !== "auth";
});
</script>
