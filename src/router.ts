import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/movies/index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "moviesList",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movieDetails",
      component: () => import("./pages/movies/_id.vue"),
    },
  ],
});
