const aboutRouter = [
    {
        path: '/system',
        name: 'system',
        component: '',
        redirect: '/system/about',
        meta: {
            title: '关于',
        },
        children: [
            {
                path: '/system/about',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: '测试页面',
                }
            },
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/error-page/404.vue'),
                meta: {
                    title: '404',
                }
            }
        ]
    }
]

export default aboutRouter