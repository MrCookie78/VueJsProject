import { ref } from "vue";

const user = ref(null);
// const user = ref({ name: "Micael" });
/*
 * TODO : Vérifier dans le local storage si il n'y a pas deja un user
 */

function UserLogin(name, token) {
  user.value = { name: name, token: token };
  localStorage.setItem("user", JSON.stringify(user.value));
}

function logout() {
  user.value = null;
  localStorage.removeItem("user");
}

export function useUserStore() {
  return {
    user,
    UserLogin,
    logout,
  };
}
