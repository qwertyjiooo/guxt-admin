import {createRouter, createWebHistory} from 'vue-router'
import utils from '@/utils/util.strotage.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    const token = utils.get('token');
    const parsedToken = token ? JSON.parse(token)?.token : null;
    if (to.path === '/account/login') {
        next();
    } else {
        if (parsedToken) {
            next();
        } else {
            next('/account/login');
        }
    }
});
router.afterEach(() => {
    NProgress.done()
})

export default router