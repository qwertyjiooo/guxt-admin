<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppSettingStore } from '@/stores/AppSetting.js'
const useAppStore = useAppSettingStore()
useAppStore.initThemeColor()

onMounted(() => {
  
})
</script>

<style lang="less" scoped></style>