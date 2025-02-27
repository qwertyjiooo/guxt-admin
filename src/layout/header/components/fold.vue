<!-- 菜单收起与展开 -->
<template>
    <div class="flex h-full items-center pr-4">
        <el-icon v-show="!appSidebarStore.appSidebarStatus" @click="toggleSidebar">
            <Fold color="FFFFFF" />
        </el-icon>
        <el-icon v-show="appSidebarStore.appSidebarStatus" @click="toggleSidebar">
            <Expand color="FFFFFF" />
        </el-icon>
    </div>
</template>

<script setup>
import { Fold, Expand } from '@element-plus/icons-vue'
// 侧边栏状态
import { useAppSidebarStore } from '@/stores/AppSidebar'
const appSidebarStore = useAppSidebarStore()
const toggleSidebar = () => {
    appSidebarStore.toggleSidebar()
}
</script>

<style lang='less' scoped>
:deep(.el-icon) {
    // color: #FFFFFF !important;
    font-size: 20px !important;
}
</style>