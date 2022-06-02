import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import CompteurTime from "@/components/CompteurTime.vue";
import JwtDecode from "@/components/JwtDecode.vue";
import TableVfor from "@/components/TableVfor.vue";
import UserVif from "@/components/UserVif.vue";
import ClassBinding from "@/components/ClassBinding.vue";
import UserLogin from "@/components/UserLogin.vue";
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
    },
    {
      path: "/vfor",
      name: "vfor",
      component: TableVfor,
    },
    {
      path: "/vif",
      name: "vif",
      component: UserVif,
    },
    {
      path: "/classBinding",
      name: "classBinding",
      component: ClassBinding,
    },
    {
      path: "/login",
      name: "login",
      component: UserLogin,
    },
  ],
});

export default router;
