import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import kundenservice from '@/components/kundenservice'
import technik from '@/components/technik'
import vertrieb from '@/components/vertrieb'
import ea from '@/components/ea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/kundenservice',
      name: 'kundenservice',
      component: kundenservice
    },
    {
      path: '/technik',
      name: 'technik',
      component: technik
    },
    {
      path: '/vertrieb',
      name: 'vertrieb',
      component: vertrieb
    },
    {
      path: '/ea',
      name: 'ea',
      component: ea
    }
  ]
})
