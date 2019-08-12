import Vue from 'vue'
import App from './App.vue'

import Buefy from "buefy";
import 'buefy/dist/buefy.css'

import VueRouter from "vue-router";

/* Load components */
import Home from '@/components/main/Home.vue'
import Bindings from '@/components/main/Bindings.vue'
import TwoWayBindings from '@/components/main/TwoWayBindings.vue'



Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false


/* Router */
const router = new VueRouter({
  routes: [
    { path: '/', redirect: {name: 'home'}},
    { path: '/home', name: 'home', component: Home },
    { path: '/bindings', name: 'bindings', component: Bindings },
    { path: '/two-way-bindings', name: 'two-way-binding', component: TwoWayBindings }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
