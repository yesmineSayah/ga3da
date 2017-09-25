import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Routers
import DrinksRouter from './drinks.js';
import NightsRouter from './nights.js';


// Root Components
const Index = () => import('@/components/Login.vue');
const Drinks = () => import('@/components/Drinks/Drink.Root.vue');
const Nights = () => import('@/components/Nights/Night.Root.vue');




export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Index
    },
    {
      path: '/drinks',
      component: Drinks,
      children: DrinksRouter
    },
    {
      path: '/nights',
      component: Nights,
      children: NightsRouter
    }
  ]
})
