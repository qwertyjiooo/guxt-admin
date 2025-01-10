import axios from "axios";
import router from "../router";

const baseURL = import.meta.env.VITE_API_URL;
const server = axios.create({
    baseURL: baseURL,
    timeout: 5000
});

// 请求拦截器
server.interceptors.request.use(
    config => {
        // 判断 tokenn 是否存在
        const token = localStorage.getItem("token");
        if (token) config.headers['token'] = token;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 响应拦截器
server.interceptors.response.use(
    response => {
        const { data } = response;
        if (data.code != 200) return Promise.reject(data);
        if (data.response == 'ok') return data;
        switch (data.code) {
            case '0': // 成功
                return data;
            case '401': // 未登录 | token 失效
                router.push('/login');
                break;
            default: // 其他错误
                return Promise.reject(data);
        }
        return data;
    },
    error => {
        return Promise.reject(error);
    }
);

export const post = async (url, data, headers) => {
    try {
        const res = await server.post(url, data, { headers: headers });
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const get = async (url, params, headers) => {
    try {
        const res = await server.get(url, { params, headers: headers });
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};