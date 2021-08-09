import Vue from 'vue'
import Router from 'vue-router'
import TestCommit from '@/components/TestCommit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestCommit',
      component: TestCommit
    }
  ]
})
