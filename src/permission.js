import router from '@/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'

const whiteList = ['/login', '/404']

/**
 * 前置守卫
 */
router.beforeEach((to, from, next) => {
  nProgress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
      nProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      nProgress.done()
    }
  }
})

/**
 * 后置守卫
 */
router.afterEach(() => {
  nProgress.done()
})
