import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import routes from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    const token = localStorage.getItem('token')
    // 判断是否是去 login 页面
    if (to.path === '/login') {
        next()
    } else {
        // 判断是否有 token
        if (token) {
            next()
        } else {
            next('/login')
        }
    }
})
router.afterEach(() => {
    NProgress.done()
})

export default router