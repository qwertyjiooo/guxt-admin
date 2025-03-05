<template>
  <div class="">
    <el-popover placement="bottom" :width="200" trigger="click">
      <template #reference>
        <div class="h-full pr-4 cursor-pointer flex_center" title="系统设置">
          <span class="flex_center">
            <el-icon size="20"><Setting /></el-icon>
          </span>
        </div>
      </template>
      <section>
        <h4>系统主题</h4>
        <Switch />
        <h4>主题颜色</h4>
        <div class="theme-color-list">
          <span v-for="(item, index) in predefineColors" :key="index" :title="item" @click="changeThemeColor(item)"
            :style="{ backgroundColor: item }"></span>
        </div>
        <el-button class="mt-2" @click="debouncedResetSetting">
          <el-icon>
            <Refresh />
          </el-icon>
          重置
        </el-button>
      </section>
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppSettingStore } from "@/stores/AppSetting.js";
import Switch from "@/components/Switch/index.vue";
import { Refresh, Setting} from "@element-plus/icons-vue";
import { useDebounceFn } from "@vueuse/core";
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
  // "hsv(51, 100, 98)",
  // "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
]);
// 切换主题颜色
const useAppStore = useAppSettingStore();
// 预定义主题颜色
const changeThemeColor = (color) => {
  useAppStore.toggleThemeColor(color);
};
// 重置设置 - 防抖
const debouncedResetSetting = useDebounceFn(() => {
  useAppStore.toggleThemeColor('');
  useAppStore.toggleThemeDark(true);
}, 500);

</script>

<style lang="less" scoped>
.theme-color-list {
  display: flex;
  flex-wrap: wrap;

  span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    margin: 3px;
    transition: all 0.28s linear;
    box-shadow: 0 0 5px #eaeaea;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid var(--el-color-primary);
      box-shadow: 0 0 5px var(--el-color-primary);
    }
  }
}
</style>
