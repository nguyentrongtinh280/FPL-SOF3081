<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <span class="navbar-brand fw-bold">LAB7</span>

        <div class="navbar-nav">
          <router-link class="nav-link" to="/bai1">Bài 1</router-link>
          <router-link class="nav-link" to="/bai2">Bài 2</router-link>
          <router-link class="nav-link" to="/bai3">Bài 3</router-link>
          <router-link class="nav-link" to="/bai4">Bài 4</router-link>
        </div>
      </div>
    </nav>

    <div class="container mt-5 pt-4">
      <router-view />
    </div>
  </div>
</template>
