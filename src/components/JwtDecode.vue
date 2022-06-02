<script setup>
import { ref } from "vue";
import * as jose from "jose";

const jwt_encoded = ref("");
const claim = ref();

function Decode() {
  claim.value = jose.decodeJwt(jwt_encoded.value);
}
</script>

<template>
  <div>
    <h2>JWT Encoded</h2>
    <textarea name="jwt" cols="70" rows="10" v-model="jwt_encoded"></textarea>
    <br />
    <input type="button" @click="Decode()" value="Decode" />
  </div>

  <div>
    <h2>JWT Decoded</h2>
    {{ claim }}
  </div>
</template>
