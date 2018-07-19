import Vue from 'vue';
import Vuex from 'vuex';
import chargers from './modules/chargers';
import search from './modules/search';
import users from './modules/users';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chargers,
    search,
    users,
    auth,
  },
});
