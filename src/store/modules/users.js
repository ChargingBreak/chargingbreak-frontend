// import user from '../../api/user';

const stubUsers = [
  {
    id: 1,
    name: 'Mathias Hansen',
    photoUrl: 'https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2014/12/mathias.jpg',
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
  getAllUsers({ commit }) {
    // user.getUsers((users) => {
    commit('setUsers', stubUsers);
    // });
  },
};

// mutations
/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  setUsers(state, users) {
    state.all = users;
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
