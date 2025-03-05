const notFoundRouter = [
    {
        path: '/NotFound',
        name: 'NotFound',
        component: () => import('@/views/error-page/NotFound.vue'),
        meta: {
            title: 'NotFound',
            isShow: false, // 是否显示在菜单栏
        }
    }
]
export default notFoundRouter
