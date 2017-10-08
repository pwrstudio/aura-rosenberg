import Vue from 'vue'
import 'babel-polyfill'
import VueRouter from 'vue-router'
// import VueHead from 'vue-head'
import App from './App'
import store from './store'
import info from './components/info'
import works from './components/works'

// import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'

// Raven
//     .config('https://---0@sentry.io/---')
//     .addPlugin(RavenVue, Vue)
//     .install()

Vue.use(VueRouter)

// Vue.use(VueHead)

const router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/:slug',
    //   path: '/:slug',
    //   name: 'text',
    //   component: overview
    // },
    {
      path: '/about',
      name: 'about',
      component: info
    },
    {
      path: '/',
      name: 'works',
      component: works
    }
  ]
})

// ga(router, 'UA-XXXXX')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
