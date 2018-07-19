import search from '../../api/search';

// initial state
const state = {
  results: [],
  error: null,
  isLoading: false,
};

// getters
const getters = {};

// actions
const actions = {
  search({ commit }, query) {
    commit('setLoading');

    search.search(query, (response, error) => {
      if (error) {
        commit('setError', error);
      } else {
        commit('setSearchResults', response);
      }
    });
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setSearchResults(state, searchResults) {
    state.results = searchResults;
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
