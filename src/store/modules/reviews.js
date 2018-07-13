import search from '../../api/search';

// initial state
const state = {
  results: [],
};

// getters
const getters = {};

// actions
const actions = {
  search({ commit }, query) {
    search.search(query, (setSearchResults) => {
      commit('setSearchResults', setSearchResults);
    });
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setSearchResults(state, searchResults) {
    state.results = searchResults;
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
