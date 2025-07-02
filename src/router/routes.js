import notFoundRouter from '@/router/modules/NotFound'
import loginRouter from '@/router/modules/login'
import homeRouter from '@/router/modules/home'
import anyRoute from '@/router/modules/anyRoute'
import caseRouter from "@/router/modules/case.js";

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
            ...homeRouter, // 首页
            ...caseRouter, // 案例库
        ]
    },
    ...loginRouter, // 登录注册
    ...notFoundRouter, // 404
    ...anyRoute, // 匹配任意路由
]

export default routes