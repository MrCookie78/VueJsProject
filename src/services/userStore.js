import { ref } from "vue";

const user = ref(null);
// const user = ref({ name: "Micael" });
/*
 * TODO : Vérifier dans le local storage si il n'y a pas deja un user
 */

function login(name) {
  user.value = { name: name };
}

function logout() {
  user.value = null;
}
export function useUserStore() {
  return {
    user,
    login,
    logout,
  };
}
