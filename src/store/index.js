import { createStore } from 'vuex'

export default createStore({
  state: {
    message: {type: '', text: ''}
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload
      setTimeout(() => {
        this.commit('clearMessage')
      }, 5000)
    },
    clearMessage(state) {
      state.message = {type: '', text: ''}
    }
  },
  actions: {
  },
  modules: {
  }
})
