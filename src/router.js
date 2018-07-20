import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SubmitTip from './views/SubmitTip.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/charger/:chargerId',
      name: 'charger',
      component: Home,
    },
    {
      path: '/charger/:chargerId/tip',
      name: 'submittip',
      component: SubmitTip,
    },
  ],
});
