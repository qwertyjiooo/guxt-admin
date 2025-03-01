<template>
  <div class="theme-switch">
      <el-switch size="default" 
        v-model="useAppStore.appThemeDark" 
        @change="changeThemeType" 
        :active-action-icon="Sunny"
        :inactive-action-icon="Moon" />
    </div>
</template>

<script setup>
import { useAppSettingStore } from "@/stores/AppSetting.js";
import { Sunny, Moon } from "@element-plus/icons-vue";

// 切换主题模式
const useAppStore = useAppSettingStore();
const changeThemeType = (val) => {
  useAppStore.toggleThemeDark(val);
};
</script>

<style lang="less" scoped></style>
