import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  modules: {
    user
  },
  mutations: {

  },
  actions: {

  },
  getters : {

  }
})
