import { defineStore } from 'pinia'
import dbUtils from '@/utils/util.strotage.js'
import Color from "color";
import setting from '@/setting.js'

export const useAppSettingStore = defineStore('appSetting', () => {
    // state
    // 主题颜色
    const appThemeColor = ref(dbUtils.get('appThemeColor') || setting.theme.color)
    // // 暗黑主题 // true 明亮 false 暗黑
    const appThemeDark = ref(dbUtils.get('appThemeDark') === null ? true : dbUtils.get('appThemeDark') === 'light');
    // action
    // 初始化主题颜色
    const initThemeColor = () => {
        let newColor = appThemeColor.value
        const rootStyle = document.documentElement.style
        rootStyle.setProperty('--el-color-primary', newColor)
        rootStyle.setProperty(`--el-color-primary-dark-2`, newColor);
        for (let i = 1; i < 10; i++) {
            rootStyle.setProperty(
                `--el-color-primary-light-${i}`,
                `${Color(newColor).alpha(1 - i * 0.1)}`
            );
        }
    }
    // 切换主题颜色
    const toggleThemeColor = (color) => {
        // 判断 color 是否为空 如果为空 则默认为 setting.theme.color
        if (!color) {
            color = setting.theme.color
        }
        dbUtils.set('appThemeColor', color)
        appThemeColor.value = color
        let newColor = color
        const rootStyle = document.documentElement.style
        rootStyle.setProperty('--el-color-primary', newColor)
        rootStyle.setProperty(`--el-color-primary-dark-2`, newColor);
        for (let i = 1; i < 10; i++) {
            rootStyle.setProperty(
                `--el-color-primary-light-${i}`,
                `${Color(newColor).alpha(1 - i * 0.1)}`
            );
        }
    };
    // 初始化暗色主题
    const initThemeDark = () => {
        if (!appThemeDark.value) {
            dbUtils.set('appThemeDark', 'dark')
            document.documentElement.classList.add("dark");
        } else {
            dbUtils.set('appThemeDark', 'light')
            document.documentElement.classList.remove("dark");
        }
    };
    // 暗色主题
    const toggleThemeDark = (type) => {
        if (!type) {
            dbUtils.set('appThemeDark', 'dark')
            appThemeDark.value = false
            document.documentElement.classList.add("dark");
            const rootStyle = document.documentElement.style;
            rootStyle.setProperty(`--el-menu-text-color`, '#dedede');
        } else {
            dbUtils.set('appThemeDark', 'light')
            appThemeDark.value = true
            document.documentElement.classList.remove("dark");
            const rootStyle = document.documentElement.style;
            rootStyle.setProperty(`--el-menu-text-color`, '#606060');
        }
    };
    initThemeDark();
    initThemeColor();
    return {
        toggleThemeColor,
        appThemeColor,
        initThemeColor,
        appThemeDark,
        toggleThemeDark,
        initThemeDark,
    }
})

