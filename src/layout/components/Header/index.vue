<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <Fold v-if="useAppStore.global.appThemeStyle !== 'header'"></Fold>
        <!-- 面包屑 -->
        <Breadcrumb v-if="useAppStore.global.appThemeStyle !== 'header'"></Breadcrumb>
        <div style="flex: 1;"></div>
        <!-- 搜索 -->
        <Search></Search>
        <Gradient></Gradient>
        <!-- 系统设置 -->
        <Setup></Setup>
        <!-- 全屏 -->
        <FullScreen></FullScreen>
        <!-- 信息设置 -->
        <ProfilePicture></ProfilePicture>
    </div>
</template>

<script setup>
import Breadcrumb from './components/breadcrumb.vue'
import Setup from './components/setup.vue'
import ProfilePicture from './components/profilePicture.vue'
import FullScreen from './components/FullScreen.vue'
import Fold from './components/fold.vue'
import Search from './components/search.vue'
import Gradient from '@/components/Gradient/index.vue'
import { useAppSettingStore } from '@/stores/AppSetting'
const useAppStore = useAppSettingStore();
</script>

<style lang='scss' scoped>
.header {
    // width: 100%;
    flex: 1;
    display: flex;
    overflow: hidden;
    padding: 0 20px;
    position: relative;
    box-sizing: border-box;
    height: var(--header_height);
    background-color: var(--main-background);
    border-bottom: 1px solid var(--main-border-color);
}
</style>