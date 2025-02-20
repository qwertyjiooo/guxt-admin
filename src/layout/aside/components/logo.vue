<template>
  <div class="logo">
    <img src="@/assets/img/geZhiLogo.png" alt="" />
    <div v-if="isLogoVisible">{{ setting.websiteInfo.name }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import setting from '@/setting'
import { useAppSidebarStore } from "@/stores/AppSidebar";

// 获取 store 判断是否折叠
const appSidebarStore = useAppSidebarStore();
// 用于控制 logo 显示的变量
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
  { immediate: true }
);
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  // justify-content: center;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--menu-active-text);
  color: #fff;
  border-bottom: 1px solid var(--main-border-color);
  border-right: 1px solid var(--main-border-color);
  // border-right: 1px solid var(--main-border-color);
  overflow: hidden;
  // 文字不换行
  white-space: nowrap;
  box-sizing: border-box;

  img {
    // width: 30px;
    height: 30px;
    box-sizing: border-box;
    padding: 0 10px 0 17px;


  }
}
</style>
