const aboutRouter = [
    {
        path: '/system',
        name: 'system',
        component: '',
        redirect: '/system/Test',
        meta: {
            title: '用于测试',
        },
        children: [
            {
                path: '/system/Test',
                name: 'Test',
                component: () => import('@/views/Test/index.vue'),
                meta: {
                    title: '表格响应式测试',
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