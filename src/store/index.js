import Vue from 'vue';
import Vuex from 'vuex';
import chargers from './modules/chargers';
import reviews from './modules/reviews';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chargers,
    reviews,
    users,
  },
});
