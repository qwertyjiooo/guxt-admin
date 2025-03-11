<!-- 菜单收起与展开 -->
<template>
    <div class="flex h-full items-center pr-4 cursor-pointer">
        <el-icon v-show="!appSidebarStore.global.appSidebarStatus" @click="toggleSidebar(true)">
            <Fold color="FFFFFF" />
        </el-icon>
        <el-icon v-show="appSidebarStore.global.appSidebarStatus" @click="toggleSidebar(false)">
            <Expand color="FFFFFF" />
        </el-icon>
    </div>
</template>

<script setup>
import { Fold, Expand } from '@element-plus/icons-vue'
// 侧边栏状态
import { useAppSettingStore } from '@/stores/AppSetting'
const appSidebarStore = useAppSettingStore()
const toggleSidebar = (val) => {
    appSidebarStore.global.appSidebarStatus = val
    appSidebarStore.dbUtilsStore()
}
</script>

<style lang='less' scoped>
:deep(.el-icon) {
    // color: #FFFFFF !important;
    font-size: 20px !important;
}
</style>