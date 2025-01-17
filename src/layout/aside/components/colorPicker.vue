<template>
  <div class="flex items-center justify-center w-full h-10 color-picker" title="主题颜色">
    <el-color-picker
      size="default"
      @change="changeThemeColor"
      v-model="appStore.appThemeColor"
      show-alpha
      :predefine="predefineColors"
    />
    <div class="pl-2 text-gray-500">主题颜色</div>
  </div>
</template>

<script setup>
import { useAppSettingStore } from "@/stores/AppSetting.js";
const appStore = useAppSettingStore();
const predefineColors = ref([
  "rgba(63, 81, 181, 1)",
  "rgba(255, 69, 0, 1)",
  "rgba(255, 140, 0, 1)",
  "rgba(255, 215, 0, 1)",
  "rgba(144, 238, 144, 1)",
  "rgba(0, 206, 209, 1)",
  "rgba(30, 144, 255, 1)",
  "rgba(199, 21, 133, 1)",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "hsv(51, 100, 98)",
  "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
]);
const changeThemeColor = (val) => {
  appStore.toggleThemeColor(val);
};
</script>

<style lang="less" scoped>
.color-picker {
    background-color: var(--menu-background);
    border-right: var(--main-border-color) 1px solid;
}
</style>
