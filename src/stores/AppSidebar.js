import { defineStore } from 'pinia'
import dbUtils from '@/utils/util.strotage.js'

export const useAppSidebarStore = defineStore('appSidebar', () => {
    // state
    // 侧边栏 状态
    const appSidebarStatus = ref(dbUtils.get('appSidebarStatus') == 'true' ? true : false || false)
    // 侧边栏状态 切换
    const toggleSidebar = () => {
        appSidebarStatus.value = !appSidebarStatus.value
        dbUtils.set('appSidebarStatus', appSidebarStatus.value)
    }

    return {
        appSidebarStatus,
        toggleSidebar
    }
})