const homeRouter = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            title: '首页展示',
        }
    }
]

export default homeRouter