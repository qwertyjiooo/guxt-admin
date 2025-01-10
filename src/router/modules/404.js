const notFoundRouter = [
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
            title: '404',
            isShow: false, // 是否显示在菜单栏
        }
    }
]
export default notFoundRouter
