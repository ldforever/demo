import Vue from 'vue'
import Vuex from 'vuex'
import modula from './modula'


Vue.use(Vuex);

export default new Vuex.Store({
    namespace: true,
    modules: {
        modula,
    },
    strict: process.env.NODE_ENV !=='production'
});