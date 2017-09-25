import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Routers
import FacturesRouter from './factures.js';


// Root Components
const Index = () => import('@/components/Login.vue');
const Factures = () => import('@/components/Factures/Facture.Root.vue');




export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Index
    },
    {
      path: '/factures',
      component: Factures,
      children: FacturesRouter
    }
  ]
})
