import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueSweetalert2);
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
