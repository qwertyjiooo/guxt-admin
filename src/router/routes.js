import notFoundRouter from './modules/NotFound'
import loginRouter from './modules/login'
import homeRouter from './modules/home'
import anyRoute from './modules/anyRoute'
import aboutRouter from './modules/Test'
import ScreenDateRouter from './modules/ScreenDate'
import geZhiRouter from './modules/geZhi'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        meta: {
            title: '',
            isShow: true, // 是否显示在菜单栏
        },
        children: [
            ...homeRouter,
            ...aboutRouter,
            ...ScreenDateRouter,
            ...geZhiRouter,
        ]
    },
    ...loginRouter,
    ...notFoundRouter,
    ...anyRoute,
]

export default routes