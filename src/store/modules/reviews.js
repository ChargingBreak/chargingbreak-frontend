//import review from '../../api/review';

const stubReviews = [
  {
    chargerId: 632,
    userId: 1,
    type: 'TIP',
    theme: 'ATMOSPHERE',
    description: 'The views here are amazing',
    photoUrl: '/img/uploads/IMG_1507.JPG'
  },
  {
    chargerId: 632,
    userId: 1,
    type: 'TIP',
    theme: 'ATMOSPHERE',
    description: 'Up for a little detour? Take a drive through scenic Skyline Drive, using the Front Royal entrance, about 6 miles from the Supercharger',
    photoUrl: '/img/uploads/IMG_7666.JPG'
  },
  {
    chargerId: 632,
    userId: 1,
    type: 'TIP',
    theme: 'FOOD',
    description: 'If Burger King isn\'t your thing, call Little Anthony\'s Pizza, and pick up your order on the way to the Supercharger (it\'s right around the corner)',
    photoUrl: 'https://lh3.ggpht.com/p/AF1QipPUpgIgqbOXSziYf_D_iMZhWOwsYarml0TShqKM=s512'
  },
  {
    chargerId: 632,
    userId: 1,
    type: 'RATING',
    theme: 'FOOD',
    rating: 3
  },
  {
    chargerId: 632,
    userId: 1,
    type: 'RATING',
    theme: 'KIDS',
    rating: 3
  },
  {
    chargerId: 632,
    userId: 1,
    type: 'RATING',
    theme: 'RESTROOMS',
    rating: 3
  },
  {
    chargerId: 632,
    userId: 1,
    type: 'RATING',
    theme: 'SHOPPING',
    rating: 0
  },
  {
    chargerId: 632,
    userId: 1,
    type: 'RATING',
    theme: 'ATMOSPHERE',
    rating: 5
  },
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
