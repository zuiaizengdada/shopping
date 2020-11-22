import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'
import getters from './getters'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        cartList: [],
        all: false
    },
    mutations,
    actions,
    modules,
    getters
})