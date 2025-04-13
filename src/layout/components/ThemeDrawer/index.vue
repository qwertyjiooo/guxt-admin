<template>
    <el-drawer class="drawer_el" v-model="useAppStore.appSettingPopup" size="300px" title="I am the title"
        :with-header="false">
        <div class="flex_center">布局设置</div>
        <el-divider>布局样式</el-divider>
        <div class="flex_center_between">
            <span>侧边栏反转色
                <el-tooltip class="box-item" effect="dark" content="侧边栏颜色变为深色模式" placement="top">
                    <el-icon>
                        <QuestionFilled />
                    </el-icon>
                </el-tooltip>
            </span>
            <el-switch size="default" v-model="pickerSwitch" :active-action-icon="Sunny" :inactive-action-icon="Moon" />
        </div>
        <div class="flex_center_between">
            <span>头部反转色
                <el-tooltip class="box-item" effect="dark" content="头部颜色变为深色模式" placement="top">
                    <el-icon>
                        <QuestionFilled />
                    </el-icon>
                </el-tooltip>
            </span>
            <el-switch size="default" v-model="pickerSwitch" :active-action-icon="Sunny" :inactive-action-icon="Moon" />
        </div>
        <div class="container">
            <el-tooltip class="box-item" effect="dark" content="纵向" placement="top">
                <div :class="['shadow_bg_3 topic', useAppStore.global.appThemeStyle == 'default' ? 'topic_active' : '']"
                    @click="setLayout('default')">
                    <span class="span-1"></span>
                    <span class="span-2">
                        <span class="span-3"></span>
                        <span class="span-4"></span>
                    </span>
                    <el-icon class="icon" size="20" v-if="useAppStore.global.appThemeStyle == 'default'">
                        <CircleCheckFilled />
                    </el-icon>
                </div>
            </el-tooltip>
            <el-tooltip class="box-item" effect="dark" content="经典" placement="top">
                <div :class="['shadow_bg_3 topic', useAppStore.global.appThemeStyle == 'sidebar' ? 'topic_active' : '']"
                    @click="setLayout('sidebar')" style="flex-direction: column;">
                    <span class="span-1"></span>
                    <span class="span-2" style="flex-direction: row;">
                        <span class="span-3"></span>
                        <span class="span-4"></span>
                    </span>
                    <el-icon class="icon" size="20" v-if="useAppStore.global.appThemeStyle == 'sidebar'">
                        <CircleCheckFilled />
                    </el-icon>
                </div>
            </el-tooltip>
        </div>

        <div class="container">
            <el-tooltip class="box-item" effect="dark" content="横向" placement="top">
                <div :class="['shadow_bg_3 topic', useAppStore.global.appThemeStyle == 'header' ? 'topic_active' : '']"
                    @click="setLayout('header')" style="width: calc(50% - 5px);flex: none;">
                    <!-- <span class="span-1"></span> -->
                    <span class="span-2">
                        <span class="span-3"></span>
                        <span class="span-4"></span>
                    </span>
                    <el-icon class="icon" size="20" v-if="useAppStore.global.appThemeStyle == 'header'">
                        <CircleCheckFilled />
                    </el-icon>
                </div>
            </el-tooltip>
        </div>

        <el-divider>主题颜色</el-divider>
        <div class="theme-color-list flex_center_x">
            <span v-for="(item, index) in predefineColors" :key="index" :title="item" @click="changeThemeColor(item)"
                :style="{ backgroundColor: item }"></span>
        </div>
        <div class="flex_center_between">
            <span>黑夜 / 白天</span>
            <Switch />
        </div>
        <div class="flex_center_between">
            <span>自定义颜色</span>
            <colorPicker />
        </div>

        <el-divider>界面设置</el-divider>
        <div class="flex_center_between">
            <span>菜单折叠</span>
            <el-switch size="default" v-model="useAppStore.global.appSidebarStatus"
                @change="useAppStore.toggleCollapse" />
        </div>
        <div class="flex_center_between">
            <span>菜单手风琴</span>
            <el-switch size="default" v-model="useAppStore.global.appSettingAccordion"
                @change="useAppStore.dbUtilsStore" />
        </div>
        <div class="flex_center_between">
            <span>水印</span>
            <el-switch size="default" v-model="useAppStore.global.appWatermark" @change="useAppStore.dbUtilsStore" />
        </div>
        <el-button class="mt-2" @click="debouncedResetSetting">
            <el-icon>
                <Refresh />
            </el-icon>
            重置
        </el-button>
    </el-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useAppSettingStore } from "@/stores/AppSetting.js";
import Switch from "@/components/Switch/index.vue"; // 黑夜 / 白天
import colorPicker from '@/layout/components/ColorPicker/index.vue'
import { Refresh, Setting, QuestionFilled, Moon, Sunny, CircleCheckFilled } from "@element-plus/icons-vue";
import { useDebounceFn } from "@vueuse/core";
const pickerSwitch = ref(true)
const predefineColors = ref([
    "rgba(63, 81, 181, 1)",
    "rgba(255, 69, 0, 1)",
    "rgba(255, 140, 0, 1)",
    "rgba(255, 215, 0, 1)",
    "rgba(144, 238, 144, 1)",
    "rgba(0, 206, 209, 1)",
    "rgba(30, 144, 255, 1)",
    "rgba(199, 21, 133, 1)",
    "rgba(255, 69, 0, 0.68)",
    "rgb(255, 120, 0)",
    "hsl(181, 100%, 37%)",
    "hsla(209, 100%, 56%, 0.73)",
    "#c7158577",
]);
// 切换主题颜色
const useAppStore = useAppSettingStore();
// 预定义主题颜色
const changeThemeColor = (color) => {
    useAppStore.toggleThemeColor(color);
};
// 重置设置 - 防抖
const debouncedResetSetting = useDebounceFn(() => {
    useAppStore.reset();
}, 500);

const setLayout = (type) => {
    if (type == useAppStore.global.appThemeStyle) return;
    useAppStore.global.appThemeStyle = type;
    useAppStore.dbUtilsStore();
}

</script>

<style lang="less" scoped>
.theme-color-list {
    flex-wrap: wrap;

    span {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        margin: 3px;
        transition: all 0.28s linear;
        box-shadow: 0 0 5px #eaeaea;
        border: 2px solid transparent;

        &:hover {
            border: 2px solid var(--el-color-primary);
            box-shadow: 0 0 5px var(--el-color-primary);
        }
    }
}

.drawer_el {
    div {
        margin-bottom: 10px;
    }
}

.container {
    display: flex;
    gap: 10px;
    justify-content: space-between;

    .el-icon {
        position: absolute;
        bottom: 15px;
        right: 15px;
        color: var(--el-menu-active-color);
    }
}

.topic {
    display: flex;
    gap: 10px;
    height: 100px;
    padding: 8px;
    flex: 1;
    // border: 2px solid var(--el-menu-active-color);
    border-radius: 8px;
    position: relative;
    cursor: pointer;
}

.topic_active {
    border: 2px solid var(--el-menu-active-color);
    box-sizing: border-box;
}

.topic>.span-2 {
    flex: 4;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.span-1 {
    height: 100%;
    background-color: var(--el-menu-active-color);
    flex: 1;
    border-radius: 4px;
}

.span-3 {
    background-color: var(--el-color-primary-light-2);
    flex: 1;
    border-radius: 4px;
}

.span-4 {
    background-color: var(--el-color-primary-light-8);
    flex: 4;
    border-radius: 4px;
    border: 1.5px dashed var(--el-menu-active-color);
}
</style>