import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import V2ex from '@/components/V2ex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/v2ex',
      name: 'V2ex',
      component: V2ex
    }
  ]
})
