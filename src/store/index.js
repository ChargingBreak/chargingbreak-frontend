import Vue from 'vue'
import Vuex from 'vuex'
import chargers from './modules/chargers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chargers
  }
});
