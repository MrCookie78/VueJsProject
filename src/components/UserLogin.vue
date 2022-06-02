<script setup>
import { ref } from "vue";
import { useUserStore } from "@/services/userStore";
const { login } = useUserStore();
const name = ref("");
</script>

<template>
  <div class="row justify-content-center">
    <input class="col-md-2 me-1" type="text" v-model="name" />
    <button class="btn btn-success col-md-2" @click="login(name)">Connexion</button>
  </div>
  
</template>
