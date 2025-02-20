const homeRouter = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '数据首页',
        }
    }
]

export default homeRouter