import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// Sub Modules
import DrinkStore from './drinks.store.js'
import NightStore from './nights.store.js'
import UserStore from './user.store.js'


export default new Vuex.Store({
    modules: {
        DrinkStore,
        NightStore,
        UserStore
    }
})