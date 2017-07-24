import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import V2ex from '@/components/V2ex'
import Home from '@/components/Home'
import Topic from '@/components/Topic'

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
      component: V2ex,
      children:[
        {
          path: '/',
          component: Home
        },
        {
          path: 't/:id',
          component: Topic
        }
      ]
    }
  ]
})
