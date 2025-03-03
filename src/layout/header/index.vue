<template>
    <el-header class="header">
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
</script>

<style lang='less' scoped>
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

.right {
    padding: 0 20px;
}
</style>