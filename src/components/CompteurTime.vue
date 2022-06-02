<script setup>
import { ref } from "vue";

const compteur = ref(0);

setInterval(() => {
  compteur.value++;
}, 1000);

function ResetCompteur() {
  compteur.value = 0;
}
</script>

<template>
  <p>Compteur : {{ compteur }}</p>
  <input type="button" @click="ResetCompteur()" value="Reset Compteur" />
  <input type="number" v-model="compteur" />
</template>
