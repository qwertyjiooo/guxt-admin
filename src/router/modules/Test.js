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
                path: '/system/laJi',
                name: 'LaJi',
                component: () => import('@/views/Test/laji/index.vue'),
                meta: {
                    title: '垃圾页面',
                }
            }
        ]
    }
]

export default aboutRouter