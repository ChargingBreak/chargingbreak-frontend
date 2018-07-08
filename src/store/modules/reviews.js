//import review from '../../api/review';

const stubReviews = [
  {
    chargerId: 194,
    userId: 1,
    rating: 4,
    theme: 'FOOD',
    description: 'Short walk to an IKEA, so maybe grab some of those swedish meatballs while you\'re here?'
  }
];

// initial state
const state = {
  all: [],
};

// getters
const getters = {};

// actions
const actions = {
  getReviewsForCharger({ commit }, args) {
    //review.getReviewsForCharger(args.id, (reviews) => {
      commit('setReviews', stubReviews);
    //});
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setReviews(state, reviews) {
    state.all = reviews;
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
