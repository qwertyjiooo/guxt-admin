<template>
  <div class="">
    <div class="h-full pr-4 cursor-pointer flex_center" title="系统设置" @click="useAppStore.appSettingPopup = true">
      <span class="flex_center">
        <el-icon size="20">
          <Setting />
        </el-icon>
      </span>
    </div>
  </div>
</template>

<script setup>
import { Setting } from "@element-plus/icons-vue";
import { useAppSettingStore } from "@/stores/AppSetting.js";
const useAppStore = useAppSettingStore();
</script>

<style lang="less" scoped></style>
