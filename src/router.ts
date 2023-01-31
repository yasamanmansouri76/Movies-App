import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/movies/index.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    // {
    //   path: '/about',
    //   component: () => import('@/views/About.vue'),
    // },
  ],
});
