import Vue from 'vue'
import 'babel-polyfill'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import info from './components/info'
import works from './components/works'
import single from './components/single'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: info
    },
    {
      path: '/',
      name: 'works',
      component: works
    },
    {
      path: '/:slug',
      name: 'single',
      component: single
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
