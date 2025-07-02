const caseRouter = [
    {
        path: '/case',
        name: 'case',
        component: '',
        redirect: '/case/featuredCases',
        meta: {
            title: '案例库',
        },
        children: [
            {
                path: '/case/featuredCases',
                name: 'featuredCases',
                component: () => import('@/views/featuredCases/index.vue'),
                meta: {
                    title: '精选案例',
                }
            },
        ]
    }
]

export default caseRouter