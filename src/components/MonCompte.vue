<script setup>
import { ref } from "vue";
import { useAPI } from "@/services/api";
const { getMonCompte } = useAPI();

const info = ref({
  _id: "",
  email: "",
  username: "",
  password: "",
});

async function getData() {
  info.value = await getMonCompte();
}
getData();
</script>

<template>
  <h1 class="text-center">Mon Compte</h1>
  <div class="row justify-content-center mt-5">
    <div class="col-md-6">
      <div class="input-group mb-3">
        <span class="input-group-text bg-light">ID</span>
        <input
          type="text"
          class="form-control"
          placeholder="ID"
          v-model="info._id"
          disabled
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text bg-light">Email</span>
        <input
          type="email"
          class="form-control"
          placeholder="ID"
          v-model="info.email"
          disabled
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text bg-light">Username</span>
        <input
          type="text"
          class="form-control"
          placeholder="ID"
          v-model="info.username"
          disabled
        />
      </div>

      <!-- <div class="input-group mb-3">
        <span class="input-group-text">Password</span>
        <input
          type="password"
          class="form-control"
          placeholder="ID"
          v-model="info.motdepasse"
          disabled
        />
      </div> -->
    </div>
  </div>
</template>
