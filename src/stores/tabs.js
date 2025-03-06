import { defineStore } from "pinia";
import routes from "@/router/routes";
import dbUtils from '@/utils/util.strotage.js'
import { useRouter } from "vue-router";
import { useKeepAliveStore } from "./keepAlive";

export const useTabsStore = defineStore('tabs', () => {
    const tabsMenuList = ref(JSON.parse(dbUtils.get('tabsMenuList')) || []); // 标签页列表
    const rootList = ref([]); // 初始化后的固定路由列表
    const router = useRouter(); // 路由实例
    const keepAliveStore = useKeepAliveStore(); // 缓存实例
    const refresh = ref(true); // 存储是否需要刷新

    // 初始化标签页
    const initTabs = () => {
        const flatRoutes = (item) => { // 扁平化路由
            if (item.children) {
                item.children.map(child => {
                    flatRoutes(child)
                })
            } else if (item.meta.close) addTabs(item), rootList.value.push(item.path), keepAliveStore.addKeepAlive(item.name);
        }
        // 过滤出 meta.isShow 为true的项
        routes.forEach(item => item.meta.isShow && flatRoutes(item));
    }
    // 添加选中的标签页
    const addTabs = (tab) => {
        if (tabsMenuList.value.some(item => item.path === tab.path)) return;
        const tabsParams = {
            icon: tab.icon || '',
            name: tab.name || '',
            title: tab.meta.title || '',
            path: tab.path || '',
            close: tab.meta.close
        }
        keepAliveStore.addKeepAlive(tabsParams.name); // 添加缓存
        tabsMenuList.value.push(tabsParams);
        dbUtils.set('tabsMenuList', tabsMenuList.value)
    }

    // 关闭单个标签页
    const removeTabs = (path, tabPath) => {
        // 若关闭的是固定页面，则不删除
        if (rootList.value.some(item => item === path)) return;
        // index 为要删除的标签页在数组中的索引
        const index = tabsMenuList.value.findIndex(item => item.path === path);
        keepAliveStore.removeKeepAlive(tabsMenuList.value[index].name); // 删除缓存
        tabsMenuList.value.splice(index, 1);
        dbUtils.set('tabsMenuList', tabsMenuList.value);
        const prevTab = tabsMenuList.value[index - 1];
        const nextTab = tabsMenuList.value[index];
        // 若关闭的是当前页，则跳转到上一个标签页，若没有则跳转到后一个标签页
        if (path === tabPath) router.push(prevTab ? prevTab.path : nextTab.path);
    }
    /**
     *  批量关闭标签页
     *  @param {Number} tabLength 可以是列表的长度，也可以是当前要删除的标签页在数组中的索引
     *  @param {String} type 跳转类型，有两种类型，一个是 跳转：'router' 一个是不跳转：'noRouter'
     *  @param {String} path 要删除的标签的路径
     *  @param {Number} index 要删除的标签在数组中的索引( 为了消除删除左侧的特例 )
     */
    const closeMultipleTab = async (tabLength, type, index, path) => {
        const closeMultiple = () => {
            for (let i = tabLength - 1; i > index; i--) {
                const item = tabsMenuList.value[i];
                if (!rootList.value.includes(item.path) && (path ? item.path !== path : true)) tabsMenuList.value.splice(i, 1);
            }
            keepAliveStore.setKeepAlive(tabsMenuList.value.map(item => item.name)); // 删除缓存
            dbUtils.set('tabsMenuList', tabsMenuList.value);
        }
        switch (type) {
            case '_noRouter': closeMultiple(); break;
            case '_router': closeMultiple(); router.push(rootList.value[0]); break;
        }
    }
    // 关闭除固定页面外当前页面的左侧所有页面
    const removeLeftTabs = (path) => {
        // index 为要当前的标签页在数组中的索引
        closeMultipleTab(tabsMenuList.value.findIndex(item => item.path === path), '_noRouter', -1, null);
    }
    // 关闭除固定页面外当前页面的右侧所有页面
    const removeRightTabs = (path) => {
        // index 为要当前的标签页在数组中的索引
        closeMultipleTab(tabsMenuList.value.length, '_noRouter', tabsMenuList.value.findIndex(item => item.path === path), null);
    }
    // 关闭除当前页面和固定页面的其他所有页面
    const removeOtherTabs = (path) => {
        closeMultipleTab(tabsMenuList.value.length, '_noRouter', 0, path);
    }
    // 关闭除固定页面的其他所有页面
    const removeAllTabs = () => {
        closeMultipleTab(tabsMenuList.value.length, '_router', 0, null);
    }

    // 拖拽排序 传递两个参数索引，第一个为拖拽的索引，第二个为放置的索引
    const dragSort = (dragIndex, dropIndex) => {
        const dragItem = tabsMenuList.value.splice(dragIndex, 1)[0];
        tabsMenuList.value.splice(dropIndex, 0, dragItem);
        dbUtils.set('tabsMenuList', tabsMenuList.value);
    }

    // 设置刷新状态
    const setRefresh = (status) => refresh.value = status;

    return {
        refresh,
        tabsMenuList,
        initTabs,
        addTabs,
        removeTabs,
        removeLeftTabs,
        removeRightTabs,
        removeAllTabs,
        removeOtherTabs,
        closeMultipleTab,
        dragSort,
        setRefresh
    }
})