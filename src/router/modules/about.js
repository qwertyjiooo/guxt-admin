const aboutRouter = [
    {
        path: '/ceshi',
        name: 'Ceshi',
        component: () => import('@/layout/index.vue'),
        redirect: '/about',
        meta: {
            title: '',
            isShow: true, // 是否显示在菜单栏
            isOnlyOneMenu: true, // 是否是只有一级菜单的页面，如果是，则在菜单栏显示为一级菜单，否则显示为二级菜单
        },
        children: [
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: '测试页面',
                }
            }
        ]
    }
]

export default aboutRouter