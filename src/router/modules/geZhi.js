const geZhiRouter = [
    {
        path: '/geZhi',
        name: 'geZhi',
        component: '',
        redirect: '/geZhi/geZhiHome',
        meta: {
            title: '格致后台',
        },
        children: [
            {
                path: '/geZhi/geZhiHome',
                name: 'geZhiHome',
                component: () => import('@/views/geZhi/home/index.vue'),
                meta: {
                    title: '数据首页',
                }
            },
            {
                path: '/geZhi/draggable',
                name: 'geZhiUserDetails',
                component: () => import('@/views/geZhi/userDetails/index.vue'),
                meta: {
                    title: '用户详情',
                }
            }
        ]
    }
]

export default geZhiRouter