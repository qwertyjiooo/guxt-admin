import notFoundRouter from './modules/404'
import loginRouter from './modules/login'
import homeRouter from './modules/home'
import anyRoute from './modules/anyRoute'
import aboutRouter from './modules/about'

const routes = [
    ...homeRouter,
    ...loginRouter,
    ...aboutRouter,

    ...notFoundRouter,
    ...anyRoute
]

export default routes

// 路由懒加载 采用 () => import('/…') 来导入, 这样可以按需加载路由组件, 加快首屏加载速度