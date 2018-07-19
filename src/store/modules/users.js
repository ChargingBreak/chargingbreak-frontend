import user from '../../api/user';

// initial state
const state = {
  all: {},
  error: null,
  isLoading: false,
};

// getters
const getters = {};

// actions
const actions = {
  getUser({ commit }, userId) {
    commit('setLoading');

    user.getUser(userId, (response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        commit('addUser', response);
      }
    });
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  addUser(state, user) {
    state.all[user.id] = user;
    state.isLoading = false;
  },
  setError(state, error) {
    state.error = error;
    state.isLoading = false;
  },
  setLoading(state) {
    state.isLoading = true;
  },
};
/* eslint-enable no-param-reassign, no-shadow */

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
