export const anyRoute = [
    {
        //任意路由
        path: "/:pathMatch(.*)*",
        redirect: "/404",
        name: "Any",
        meta: {
            title: '任意路由',
            isShow: false, // 是否显示在菜单栏
        },
    },
];

export default anyRoute;