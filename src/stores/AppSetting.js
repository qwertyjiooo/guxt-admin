import { defineStore } from 'pinia'
import dbUtils from '@/utils/util.strotage.js'
import Color from "color";
import setting from '@/setting.js'

export const useAppSettingStore = defineStore('appSetting', () => {
    // global 数据
    const global = ref(JSON.parse(dbUtils.get('global')) || setting.global);
    // 将 设置按钮的弹窗 单独展示
    const appSettingPopup = ref(false) // 是否展示 设置 弹窗
    // 主题色操作
    const themeColor = (newColor) => {
        const rootStyle = document.documentElement.style;
        rootStyle.setProperty('--el-color-primary', newColor);
        rootStyle.setProperty(`--el-color-primary-dark-2`, newColor);
        for (let i = 1; i < 10; i++) {
            rootStyle.setProperty(
                `--el-color-primary-light-${i}`,
                `${Color(newColor).alpha(1 - i * 0.1)}`
            );
        }
    };
    // 初始化主题颜色
    const initThemeColor = () => {
        let newColor = global.value.appThemeColor;
        themeColor(newColor);
    };
    // 切换主题颜色
    const toggleThemeColor = (color) => {
        // 判断 color 是否为空 如果为空 则默认为 setting.theme.color
        if (!color) color = setting.global.appThemeColor;
        global.value.appThemeColor = color;
        dbUtilsStore();
        let newColor = color;
        themeColor(newColor);
    };
    // 初始化暗色主题
    const initThemeDark = () => {
        if (!global.value.appThemeDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    };
    // 暗色主题
    const toggleThemeDark = (type) => {
        const toggleStyle = (is, color) => {
            global.value.appThemeDark = is;
            dbUtilsStore();
            const rootStyle = document.documentElement.style;
            rootStyle.setProperty(`--el-menu-text-color`, color);
        }
        if (!type) toggleStyle(false, '#dedede'), document.documentElement.classList.add("dark");
        else toggleStyle(true, '#606060'), document.documentElement.classList.remove("dark");
    };
    // 持久化存储
    const dbUtilsStore = () => {
        dbUtils.set('global', global.value);
    };
    // 重置操作
    const reset = () => {
        global.value = { ...setting.global }; // 使用浅拷贝，防止引用类型，以至于指针地址相同
        dbUtilsStore();
        initThemeColor();
        initThemeDark();
    }
    return {
        global,
        appSettingPopup,
        reset,
        toggleThemeColor,
        initThemeColor,
        toggleThemeDark,
        initThemeDark,
        dbUtilsStore
    }
})

