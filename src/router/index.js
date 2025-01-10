import {createRouter, createWebHashHistory} from 'vue-router'

import routes from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
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

export default router