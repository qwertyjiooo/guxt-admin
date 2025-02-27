<template>
    <el-header class="header">
        <!-- 折叠按钮 -->
        <fold></fold>
        <!-- 面包屑 -->
        <breadcrumb></breadcrumb>
        <Gradient></Gradient>
        <!-- 全屏 -->
        <FullScreen></FullScreen>
        <!-- 系统设置 -->
        <setup></setup>
        <!-- 信息设置 -->
        <profilePicture></profilePicture>
    </el-header>
</template>

<script setup>
import breadcrumb from './components/breadcrumb.vue'
import setup from './components/setup.vue'
import profilePicture from './components/profilePicture.vue'
import FullScreen from './components/FullScreen.vue'
import fold from './components/fold.vue'
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