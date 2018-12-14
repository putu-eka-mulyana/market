import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Layout } from 'bootstrap-vue/es/components';

import router from './router'

Vue.use(Layout);
Vue.use(BootstrapVue);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
