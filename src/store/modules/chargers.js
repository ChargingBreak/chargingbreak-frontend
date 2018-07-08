import charger from '../../api/charger';

// initial state
const state = {
  all: [],
  selectedChargerId: null,
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
  setSelectedCharger({ commit }, args) {
    commit('setSelectedCharger', args.id);
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setChargers(state, chargers) {
    state.all = chargers;
  },
  setSelectedCharger(state, chargerId) {
    state.selectedChargerId = chargerId;
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
