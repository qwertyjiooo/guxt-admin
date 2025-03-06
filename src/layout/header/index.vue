<template>
    <el-header class="header">
        <Logo></Logo>
        <!-- 折叠按钮 -->
        <Fold></Fold>
        <!-- 面包屑 -->
        <Breadcrumb></Breadcrumb>
        <!-- 搜索 -->
        <Search></Search>
        <Gradient></Gradient>
        <!-- 系统设置 -->
        <Setup></Setup>
        <!-- 全屏 -->
        <FullScreen></FullScreen>
        <!-- 信息设置 -->
        <ProfilePicture></ProfilePicture>
    </el-header>
</template>

<script setup>
import Breadcrumb from './components/breadcrumb.vue'
import Setup from './components/setup.vue'
import ProfilePicture from './components/profilePicture.vue'
import FullScreen from './components/FullScreen.vue'
import Fold from './components/fold.vue'
import Search from './components/search.vue'
import Gradient from '@/components/Gradient/index.vue'
import Logo from '../components/logo.vue'
</script>

<style lang='scss' scoped>
.header {
    width: auto;
    display: flex;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    height: var(--header_height);
    background-color: var(--main-background);
    border-bottom: 1px solid var(--main-border-color);
}
:deep(.el-header) {
    padding: 0 !important;
}
</style>