const ScreenDateRouter = [
    {
        path: '/ScreenDate',
        name: 'ScreenDate',
        component: () => import('@/views/ScreenDate/index.vue'),
        meta: {
            title: '数据页面',
        }
    }
]

export default ScreenDateRouter