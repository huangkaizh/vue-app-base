import Vue from 'vue'
import Vuex from 'vuex'
import base from './modules/base'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base: base
    // pageA: pageA,
    // pageB: pageB,
    // pageC: pageC
  }
})
