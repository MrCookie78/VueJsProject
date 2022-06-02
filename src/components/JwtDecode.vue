<script setup>
import { ref } from "vue";
import * as jose from "jose";

const jwt_encoded = ref("");
const claim = ref();

if (localStorage.getItem("jwt_encoded")) {
  jwt_encoded.value = localStorage.getItem("jwt_encoded");
}

function Decode() {
  try {
    claim.value = jose.decodeJwt(jwt_encoded.value);
  } catch (err) {
    claim.value = err;
  }
}

function SaveLocal() {
  localStorage.setItem("jwt_encoded", jwt_encoded.value);
}

function ClearLocal() {
  localStorage.clear();
}
</script>

<template>
  <div class="row">
    <div class="col-md-6">
      <h2>JWT Encoded</h2>
      <textarea name="jwt" cols="70" rows="6" v-model="jwt_encoded"></textarea>
      <br />
      <input
        type="button"
        class="btn btn-sm btn-info me-1"
        @click="Decode()"
        value="Decode"
      />
      <input
        type="button"
        class="btn btn-sm btn-primary me-1"
        @click="SaveLocal()"
        value="Sauvegarer dans le local storage"
      />
      <input
        type="button"
        class="btn btn-sm btn-secondary me-1"
        @click="ClearLocal()"
        value="Clear Local Storage"
      />
    </div>

    <div class="col-md-6">
      <h2>JWT Decoded</h2>
      <p>{{ claim }}</p>
    </div>
  </div>
</template>
