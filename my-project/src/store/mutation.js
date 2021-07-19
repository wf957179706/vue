import Vue from 'vue'
import Vuex from 'vuex'

export const mutations = {
  increment: state => state.count++
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
store.commit('increment')

console.log(store.state.count) // -> 1
