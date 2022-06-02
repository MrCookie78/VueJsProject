<script setup>
import { ref } from "vue";
import * as jose from "jose";

const jwt_encoded = ref("");
const claim = ref();

if (localStorage.getItem("jwt_encoded")) {
  jwt_encoded.value = localStorage.getItem("jwt_encoded");
}

function Decode() {
  claim.value = jose.decodeJwt(jwt_encoded.value);
}

function SaveLocal() {
  localStorage.setItem("jwt_encoded", jwt_encoded.value);
}

function ClearLocal() {
  localStorage.clear();
}
</script>

<template>
  <div>
    <h2>JWT Encoded</h2>
    <textarea name="jwt" cols="70" rows="6" v-model="jwt_encoded"></textarea>
    <br />
    <input type="button" @click="Decode()" value="Decode" />
    <input
      type="button"
      @click="SaveLocal()"
      value="Sauvegarer dans le local storage"
    />
    <input type="button" @click="ClearLocal()" value="Clear Local Storage" />
  </div>

  <div>
    <h2>JWT Decoded</h2>
    <p>{{ claim }}</p>
  </div>
</template>
