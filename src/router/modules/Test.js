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
                path: '/system/draggable',
                name: 'Draggable',
                component: () => import('@/views/Test/draggable/index.vue'),
                meta: {
                    title: '拖拽组件',
                }
            }
        ]
    }
]

export default aboutRouter