import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'MainView',
      component: () => import('./../components/MainView')
    },
    {
      path: '/todo/:id',
      name: 'EditView',
      component: () => import('./../components/EditView')
    }
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
