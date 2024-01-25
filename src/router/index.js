import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Pages/HomePage.vue'),
  },
  {
    path: '/statement',
    name: 'Statement',
    component: () => import('../views/Pages/StatementPage.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
