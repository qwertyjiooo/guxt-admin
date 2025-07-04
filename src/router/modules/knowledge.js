const knowledgeRouter = [
    {
        path: '/knowledge',
        name: 'Knowledge',
        component: '',
        redirect: '/knowledge/construct',
        meta: {
            title: '知识管理',
        },
        children: [
            {
                path: '/knowledge/construct',
                name: 'Construct',
                component: () => import('@/views/construction/index.vue'),
                meta: {
                    title: '施工知识',
                }
            },
        ]
    }
]

export default knowledgeRouter