<template>
  <div class="color-picker" title="主题颜色">
    <el-color-picker size="default" @change="changeThemeColor" v-model="appStore.appThemeColor" show-alpha
      :predefine="predefineColors" />
    <div v-if="isLogoVisible" class="pl-4 text-gray-500">主题颜色</div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
// 引入 store 切换侧边栏状态
import { useAppSidebarStore } from "@/stores/AppSidebar";
// 获取 store 判断是否折叠
const appSidebarStore = useAppSidebarStore();

// 引入 store 切换主题颜色
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

// 控制logo显示
const isLogoVisible = ref(true);
// 当 appSidebarStatus 改变时，控制 logo 是否显示
watch(
  () => appSidebarStore.appSidebarStatus,
  (newStatus) => {
    if (newStatus) {
      isLogoVisible.value = false;
    } else {
      // 延迟显示 logo
      setTimeout(() => {
        isLogoVisible.value = true;
      }, 200);
    }
  },
  { immediate: true } // immediate: 立即执行一次回调函数
);
</script>

<style lang="less" scoped>
.color-picker {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 17px;
  overflow: hidden;
  // 文字不换行
  white-space: nowrap;
  background-color: var(--menu-background);
  // border-right: var(--main-border-color) 1px solid;
}
</style>
