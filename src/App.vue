<script setup>
import CompteurTime from "@/components/CompteurTime.vue";
import JwtDecode from "@/components/JwtDecode.vue";
import TableVfor from "@/components/TableVfor.vue";
import UserAuthentification from "@/components/UserAuthentification.vue";
import ClassBinding from "./components/ClassBinding.vue";
</script>

<template>
  <div class="container-md">
    <h1>Hello World</h1>
    <hr />
    <UserAuthentification />
    <hr />
    <CompteurTime />
    <hr />
    <JwtDecode />
    <hr />
    <TableVfor />
    <hr />
    <ClassBinding />
  </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
