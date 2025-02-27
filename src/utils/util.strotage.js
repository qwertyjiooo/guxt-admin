const t = 'GEZHI'
const v = '1.0.0'

export default {
    // 数据持久化
    // 存储数据
    set(key, value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        localStorage.setItem(`${t}_${v}_${key}`, value)
    },
    // 获取数据
    get(key) {
        try {
            // 从 localStorage 获取值，并解析
            const value = localStorage.getItem(`${t}_${v}_${key}`);
            if (value === null) {
                return null; // 若没有找到该值，返回 null
            }
            // 尝试解析 JSON 数据，若失败则返回原始值
            return  value;
        } catch (e) {
            // 如果 JSON 解析失败，直接返回原始字符串值
            return null;
        }
    },
    // 删除数据
    remove(key) {
        localStorage.removeItem(`${t}_${v}_${key}`)
    },
    // 清空所有 ${t}-${v}- 前缀的数据
    clear() {
        const prefix = `${t}_${v}_`;
        const regex = new RegExp(`^${prefix}`);
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (regex.test(key)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key));
    },
    // 系统 数据 持久化
}