import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import V2ex from '@/components/V2ex'
import Home from '@/components/Home'
import Topic from '@/components/Topic'
import Member from '@/components/Member'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect:'/v2ex'
  },
  {
    path: '/v2ex',
    component: V2ex,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: 't/:id',
        meta:{ scrollToTop: true },
        component: Topic
      },
      {
        path: 'm/:name',
        component: Member
      }
    ]
  }
];
const scrollBehavior = (to, from, savedPosition) => {
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
export default new Router({
  scrollBehavior,
  routes
})
