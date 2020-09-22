import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    // 当前登录用户的用户信息
    user: {}
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    changeUser(state, user) {
      state.user = user
    },
    clearUserData(state) {
      state.user = {},
      state.token = '',
      localStorage.removeItem('token')
    }
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getToken(state) {
      return state.token
    }
  }
})

export default store
