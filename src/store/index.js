import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// Sub Modules
import FactureStore from './factures.store.js'
import UserStore from './user.store.js'


export default new Vuex.Store({
    modules: {
        FactureStore,
        UserStore
    }
})