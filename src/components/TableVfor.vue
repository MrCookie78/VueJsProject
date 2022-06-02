<script setup>
import { ref } from "vue";

const name = ref("");
const list = ref([
  { id: 0, name: "Alice" },
  { id: 1, name: "Bob" },
  { id: 2, name: "Charlie" },
]);

function Add() {
  let id = list.value[list.value.length - 1]?.id;

  if (!id) id = 0;
  else id++;

  list.value.push({
    id: id,
    name: name.value,
  });
}

function Delete(id) {
  list.value = list.value.filter((obj) => obj.id !== id);
}
</script>

<template>
  <div class="row">
    <div class="col-md-6">
      <h2>Liste</h2>
      <div class="d-flex">
        <input
          type="text"
          class="form-control me-1"
          placeholder="Name"
          v-model="name"
        />
        <input
          type="button"
          class="btn btn-success"
          @click="Add()"
          value="Ajouter"
        />
      </div>
    </div>
    <div class="col-md-6">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="e in list" :key="e.id" @click="Delete(e.id)">
            <td>{{ e.id }}</td>
            <td>{{ e.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  margin-top: 10px;
}
tr {
  cursor: pointer;
}
th,
td {
  border: 1px solid;
}
</style>
