export default {
  state: {
    transitionName: '/'
  },
  getters: {
    getTransitionName: state => {
      return state.transitionName
    }
  },
  mutations: {
    setTransitionName (state, transitionName) {
      state.transitionName = transitionName
    }
  }
}
