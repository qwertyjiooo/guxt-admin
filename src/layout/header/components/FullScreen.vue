<!-- 用于控制全屏 -->
<template>
  <div class="h-full flex items-center pr-4 cursor-pointer" :title="title" @click="handleFullscreenToggle">
    <el-icon size="20" ><FullScreen /></el-icon>
  </div>
</template>

<script setup>
import { toggleFullscreen } from "@/utils/fullscreen"; // 引入控制全屏的方法
import { FullScreen } from "@element-plus/icons-vue";

const title = ref("打开全屏");
const handleFullscreenToggle = () => {
  toggleFullscreen();
  title.value = document.fullscreenElement ? "打开全屏" : "退出全屏";
};
</script>