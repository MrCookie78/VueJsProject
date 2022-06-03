<script setup>
import { ref } from "vue";
import { useUserStore } from "@/services/userStore";
import router from "@/router";
const { login } = useUserStore();
const name = ref("");

function loginUser(name) {
  login(name);
  router.push({ name: "accueil" });
}
</script>

<template>
  <div class="row justify-content-center">
    <input class="col-md-2 me-1" type="text" v-model="name" />
    <button class="btn btn-success col-md-2" @click="loginUser(name)">
      Connexion
    </button>
  </div>
</template>
