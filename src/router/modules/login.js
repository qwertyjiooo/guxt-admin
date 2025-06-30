import LoginPage from '@/views/Account/index.vue'
import Login from '@/views/Account/Login/index.vue'
import Register from '@/views/Account/Register/index.vue'
const loginRouter = [
    {
        path: '/account',
        name: 'LoginPage',
        component: LoginPage,
        redirect: '/account/login',
        meta: {
            title: '登录',
        }
        ,
        children: [
            {
                path: '/account/login',
                name: 'Login',
                component: Login,
                meta: {
                    title: '登录',
                }
            },
            {
                path: '/account/register',
                name: 'Register',
                component: Register,
                meta: {
                    title: '注册',
                }
            }
        ]
    },
]

export default loginRouter