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
  <div></div>

  <div>
    <h2>Liste</h2>
    <input type="text" placeholder="Name" v-model="name" />
    <input type="button" @click="Add()" value="Ajouter" />

    <table>
      <thead>
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
