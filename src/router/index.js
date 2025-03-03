import { createRouter, createWebHistory } from 'vue-router'
import { getCookie } from '@/utils/util.cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import routes from './routes'
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    const token = getCookie('token');
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