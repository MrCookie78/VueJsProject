<script setup>
import { ref } from "vue";

const user = ref(null);

function Login() {
  user.value = { nom: "Micael" };
}

function Logout() {
  user.value = null;
}
</script>

<template>
  <h2 v-if="!user">Hello</h2>
  <h2 v-if="user">Hello {{ user.nom }}</h2>
  <button v-if="!user" @click="Login()">Connexion</button>
  <button v-if="user" @click="Logout()">Deconnexion</button>
</template>
