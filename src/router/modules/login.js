const loginRouter = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage/index.vue'),
        meta: {
            title: '登录',
            isShow: false, // 是否显示在菜单栏
        }
    }
]

export default loginRouter