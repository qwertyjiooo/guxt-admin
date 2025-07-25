import axios from "axios";
import router from "../router";
import utils from "@/utils/util.strotage.js";

// const baseURL = import.meta.env.VITE_API_URL;
const baseURL = '/api' // 本地测试的代理
const server = axios.create({
    baseURL: baseURL,
    timeout: 5000
});

// 请求拦截器
server.interceptors.request.use(
    config => {
        const token = utils.getToken();
        if (token) config.headers['Authorization'] = token;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 响应拦截器
server.interceptors.response.use(
    response => {
        const {data, status} = response;
        if (status !== 200) return Promise.reject(data);
        if (data.response === 'ok') return data;
        switch (data.code) {
            case 0: // 成功
                return data;
            case 4014: // 未登录 | token 失效
                router.push('/account/login').then(() => {
                    console.log('未登录');
                });
                break;
            default: // 其他错误
                return Promise.reject(data);
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export const post = async (url, data, headers) => {
    try {
        return await server.post(url, data, {headers: headers});
    } catch (error) {
        return Promise.reject(error);
    }
};

export const get = async (url, params, headers) => {
    try {
        return await server.get(url, {params, headers: headers});
    } catch (error) {
        return Promise.reject(error);
    }
};

export const put = async (url, data, headers) => {
    try {
        return await server.put(url, data, {headers: headers});
    } catch (error) {
        return Promise.reject(error);
    }
};

export const del = async (url, params, headers) => {
    try {
        return await server.delete(url, {params, headers});
    } catch (error) {
        return Promise.reject(error);
    }
};

