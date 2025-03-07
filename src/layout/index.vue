<template>
    <el-watermark :content="useAppStore.global.appWatermark ? '水印' : ''" :width="200" :height="150" :opacity="0.1">
        <DefaultLayout />
    </el-watermark>
</template>
<script setup>
import DefaultLayout from './coreLayouts/DefaultLayout.vue'
import { useAppSettingStore } from '@/stores/AppSetting'
const useAppStore = useAppSettingStore()
</script>
<style lang="less" scoped>
.common-layout {
    width: 100vw;
    height: 100vh;
}

.main-content {
    background-color: var(--main-background);
}

.el-main {
    box-sizing: border-box;
    padding: 10px 12px;
    overflow-x: hidden;
    background-color: var(--el-bg-color-page);
}
</style>