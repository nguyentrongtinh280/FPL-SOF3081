<template>
  <div class="layout-wrapper">
    <Navbar v-if="showLayout" />

    <main class="flex-fill" :class="showLayout ? 'pt-5' : ''">
      <router-view />
    </main>

    <Footer v-if="showLayout" />
  </div>
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

<style setup>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.flex-fill {
  flex: 1;
}
</style>
