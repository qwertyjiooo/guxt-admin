import { post, get } from '../serve'

const API = {
    // 登录
    login: 'account/login/',
    // 注册
    register: 'account/register/'
}

const login = data => post(API.login, data)
const register = data => post(API.register, data)

export const loginApi = {
    login,
    register
}