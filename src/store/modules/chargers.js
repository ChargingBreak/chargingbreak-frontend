import charger from '../../api/charger';

// initial state
const state = {
  all: [],
  details: null,
  error: null,
  isLoading: false,
};

// getters
const getters = {};

// actions
const actions = {
  getAllChargers({ commit }) {
    commit('setLoading');

    charger.getChargers((response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        commit('setChargers', response);
      }
    });
  },
  getChargerDetails({ commit }, chargerId) {
    commit('setLoading');

    charger.getChargerDetails(chargerId, (response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        commit('setChargerDetails', response);
      }
    });
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setChargers(state, chargers) {
    state.all = chargers;
    state.isLoading = false;
  },
  setChargerDetails(state, charger) {
    state.details = charger;
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
