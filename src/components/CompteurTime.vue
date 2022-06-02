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
  <div class="d-flex">
    <input type="number" class="form-control me-1 w-25" v-model="compteur" />
    <input
      type="button"
      class="btn btn-primary"
      @click="ResetCompteur()"
      value="Reset Compteur"
    />
  </div>
</template>
