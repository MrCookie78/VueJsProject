import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import CompteurTime from "@/components/CompteurTime.vue";
import JwtDecode from "@/components/JwtDecode.vue";
import TableVfor from "@/components/TableVfor.vue";
import UserVif from "@/components/UserVif.vue";
import ClassBinding from "@/components/ClassBinding.vue";
import UserLogin from "@/components/UserLogin.vue";
import InscriptionForm from "@/components/InscriptionForm.vue";

import { useUserStore } from "@/services/userStore";
const { user } = useUserStore();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: HelloWorld,
    },
    {
      path: "/compteur",
      name: "compteur",
      component: CompteurTime,
    },
    {
      path: "/jwt",
      name: "jwt",
      component: JwtDecode,
      beforeEnter: function (to, from) {
        if (!user.value) return { name: "accueil" };
      },
    },
    {
      path: "/vfor",
      name: "vfor",
      component: TableVfor,
      beforeEnter: function (to, from) {
        if (!user.value) return { name: "accueil" };
      },
    },
    {
      path: "/vif",
      name: "vif",
      component: UserVif,
      beforeEnter: function (to, from) {
        if (!user.value) return { name: "accueil" };
      },
    },
    {
      path: "/classBinding",
      name: "classBinding",
      component: ClassBinding,
      beforeEnter: function (to, from) {
        if (!user.value) return { name: "accueil" };
      },
    },
    {
      path: "/login",
      name: "login",
      component: UserLogin,
      beforeEnter: function (to, from) {
        if (user.value) return { name: "accueil" };
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: InscriptionForm,
      beforeEnter: function (to, from) {
        if (user.value) return { name: "accueil" };
      },
    },
  ],
});

export default router;
