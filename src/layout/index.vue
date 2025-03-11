<template>
    <el-watermark :content="useAppStore.global.appWatermark ? '水印' : ''" :width="200" :height="150" :opacity="0.1">
        <DefaultLayout v-if="useAppStore.global.appThemeStyle == 'default'"/>
        <FullPageLayout v-else-if="useAppStore.global.appThemeStyle == 'sidebar'"/>
        <SidebarLayout v-else/>
        <ThemeDrawer />
    </el-watermark>
</template>
<script setup>
import { useAppSettingStore } from '@/stores/AppSetting'
import DefaultLayout from './DefaultLayout/index.vue'
import FullPageLayout from './FullPageLayout/index.vue'
import SidebarLayout from './SidebarLayout/index.vue'
import ThemeDrawer from './components/ThemeDrawer/index.vue'
const useAppStore = useAppSettingStore();
</script>
<style lang="scss" scoped></style>