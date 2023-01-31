import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/movies/index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movieDetails",
      component: () => import("./pages/movies/_id.vue"),
    },
  ],
});
