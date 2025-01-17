<template>
  <div class="h-full flex items-center pr-4" :title="title">
    <img src="@/assets/svg/Fullscreen.svg" alt="" class="w-5 h-5 cursor-pointer"  @click="toggleFullscreen"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isFullscreen = ref(false);
const title = ref("打开全屏");
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value;
  if (isFullscreen.value) {
    // 进入全屏
    title.value = "退出全屏";
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    // 退出全屏
    title.value = "打开全屏";
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
};
</script>

<style lang="less" scoped>
span {
  width: 30px;
  height: 30px;
}
</style>
