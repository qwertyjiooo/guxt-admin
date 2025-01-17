<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppSettingStore } from '@/stores/AppSetting.js'
// 引入element-plus的语言包: 中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const locale = zhCn
const useAppStore = useAppSettingStore()
useAppStore.initThemeColor()
onMounted(() => {
  
})
</script>

<style lang="less" scoped></style>