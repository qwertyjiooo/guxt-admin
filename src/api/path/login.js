import { post, get } from '../serve'

const API = {
    // 登录
    login: '/login'
}

const login = data => post(API.login, data)

export const loginApi = {
    login
}