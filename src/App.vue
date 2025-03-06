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
onMounted(() => {
  useAppStore.initThemeDark(); // 初始化暗色主题
  useAppStore.initThemeColor(); // 初始化主题颜色
})
</script>

<style lang="less" scoped></style>