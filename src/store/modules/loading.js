const loading = {
  state: {
    loadingVisible: false
  },
  mutations: {
    SHOW_LOADING: state => {
      state.loadingVisible = true;
    },
    HIDE_LOADING: state => {
      state.loadingVisible = false;
    }
  },
  actions: {
    showLoading({ commit }) {
      commit("SHOW_LOADING");
    },
    hideLoading({ commit }) {
      commit("HIDE_LOADING");
    }
  }
};

export default loading;
