import user from '../../api/user';

// initial state
const state = {
  all: {},
};

// getters
const getters = {};

// actions
const actions = {
  getUser({ commit }, userId) {
    user.getUser(userId, (user) => {
      commit('addUser', user);
    });
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  addUser(state, user) {
    state.all[user.id] = user;
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
