import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/item',
    name: 'item',
    component: () => import(/* webpackChunkName: "item" */ '../views/Item.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
