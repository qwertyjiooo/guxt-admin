import notFoundRouter from './modules/404'
import loginRouter from './modules/login'
import homeRouter from './modules/home'
import anyRoute from './modules/anyRoute'
import aboutRouter from './modules/about'

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
        ]
    },
    ...loginRouter,
    ...notFoundRouter,
    ...anyRoute,
]

export default routes