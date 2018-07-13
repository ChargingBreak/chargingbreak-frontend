import charger from '../../api/charger';

// initial state
const state = {
  all: [],
};

// getters
const getters = {};

// actions
const actions = {
  getAllChargers({ commit }) {
    charger.getChargers((chargers) => {
      commit('setChargers', chargers);
    });
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setChargers(state, chargers) {
    state.all = chargers;
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
