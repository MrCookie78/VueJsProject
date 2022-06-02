<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div class="container-md mt-3">
    <router-view />
  </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
