<template>
    <el-header class="header">
        <!-- 折叠按钮 -->
        <fold></fold>
        <!-- 面包屑 -->
        <breadcrumb class="flex-1 breadcrumb"></breadcrumb>
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
</script>

<style lang='less' scoped>
.header {
    width: auto;
    display: flex;
    position: relative;
    box-sizing: border-box;
    height: var(--header_height);
    background-color: var(--main-background);
    border-bottom: 1px solid var(--main-border-color);
}

.right {
    padding: 0 20px;
}

// 面包屑 separator 颜色
:deep(.el-breadcrumb__separator) {
    color: #fff;
}
</style>