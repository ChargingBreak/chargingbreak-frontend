import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { SimpleSVG } from 'vue-simple-svg';
import App from './App.vue';
import router from './router';
import store from './store/';
import './registerServiceWorker';

Vue.use(BootstrapVue);
Vue.component('simple-svg', SimpleSVG);

Vue.config.productionTip = false;

// Handle post-SSO authentication
if (window.location.search.indexOf('code=')) {
	window.location.href = '/';
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
