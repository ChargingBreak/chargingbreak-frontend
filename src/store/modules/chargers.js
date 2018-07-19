import charger from '../../api/charger';

// initial state
const state = {
  all: [],
  details: null
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
  getChargerDetails({ commit }, chargerId) {
    charger.getChargerDetails(chargerId, charger => {
      commit('setChargerDetails', charger);
    })
  }
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setChargers(state, chargers) {
    state.all = chargers;
  },
  setChargerDetails(state, charger) {
    state.details = charger;
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
