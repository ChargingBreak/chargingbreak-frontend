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
  getAllChargers({ commit, rootState }) {
    commit('setLoading');

    charger.getChargers(null, (response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        commit('setChargers', response);
      }
    });
  },
  getChargerDetails({ commit, rootState }, parameters) {
    commit('setLoading');

    charger.getChargerDetails(rootState.auth.jwt, parameters.id, (response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        commit('setChargerDetails', response);
      }
    });
  },
  submitTip({ commit, rootState, dispatch }, parameters) {
    commit('setLoading');

    charger.submitTip(rootState.auth.jwt, parameters.id, parameters.text, parameters.theme, (response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        dispatch('getChargerDetails', { id: parameters.id });
        console.log(response); // TODO
      }
    });
  },
  submitRating({ commit, rootState, dispatch }, parameters) {
    commit('setLoading');

    charger.submitRating(rootState.auth.jwt, parameters.id, parameters.rating, parameters.theme, (response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        dispatch('getChargerDetails', { id: parameters.id });
        console.log(response); // TODO
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
