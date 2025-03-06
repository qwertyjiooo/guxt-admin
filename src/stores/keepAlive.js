import { defineStore } from "pinia";

export const useKeepAliveStore = defineStore('KeepAlive', () => {
    const keepAliveList = ref([]); // 存储需要缓存的组件名称

    // 添加需要缓存的组件
    const addKeepAlive = (name) => {
        if (!keepAliveList.value.includes(name)) keepAliveList.value.push(name);
    }
    // 移除需要缓存的组件
    const removeKeepAlive = (name) => {
        const index = keepAliveList.value.indexOf(name);
        if (index > -1) keepAliveList.value.splice(index, 1);
        console.log(keepAliveList.value);
        
    }
    // 设置需要缓存的组件
    const setKeepAlive = (names) => keepAliveList.value = names;

   return {
        keepAliveList,
        addKeepAlive,
        removeKeepAlive,
        setKeepAlive,
    }
})