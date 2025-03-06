<template>
  <div class="">
    <div class="h-full pr-4 cursor-pointer flex_center" title="系统设置" @click="drawer = true">
      <span class="flex_center">
        <el-icon size="20">
          <Setting />
        </el-icon>
      </span>
    </div>
    <el-drawer class="drawer_el" v-model="drawer" size="15%" title="I am the title" :with-header="false">
      <div class="flex_center">布局设置</div>
      <el-divider>布局样式</el-divider>
      <div class="flex_center_between">
        <span>侧边栏反转色
          <el-tooltip class="box-item" effect="dark" content="侧边栏颜色变为深色模式" placement="top">
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </span>
        <el-switch size="default" v-model="pickerSwitch" :active-action-icon="Sunny" :inactive-action-icon="Moon" />
      </div>
      <div class="flex_center_between">
        <span>头部反转色
          <el-tooltip class="box-item" effect="dark" content="头部颜色变为深色模式" placement="top">
            <el-icon>
              <QuestionFilled />
            </el-icon>
          </el-tooltip>
        </span>
        <el-switch size="default" v-model="pickerSwitch" :active-action-icon="Sunny" :inactive-action-icon="Moon" />
      </div>
      <el-divider>主题颜色</el-divider>
      <div class="theme-color-list flex_center_x">
        <span v-for="(item, index) in predefineColors" :key="index" :title="item" @click="changeThemeColor(item)"
          :style="{ backgroundColor: item }"></span>
      </div>
      <div class="flex_center_between">
        <span>黑夜 / 白天</span>
        <Switch />
      </div>
      <div class="flex_center_between">
        <span>自定义颜色</span>
        <colorPicker />
      </div>

      <el-divider>界面设置</el-divider>
      <div class="flex_center_between">
        <span>菜单折叠</span>
        <el-switch size="default" v-model="useAppStore.global.appSidebarStatus" @change="useAppStore.toggleCollapse" />
      </div>
      <div class="flex_center_between">
        <span>菜单手风琴</span>
        <el-switch size="default" v-model="useAppStore.global.appSettingAccordion" @change="useAppStore.dbUtilsStore" />
      </div>
      <div class="flex_center_between">
        <span>水印</span>
        <el-switch size="default" v-model="useAppStore.global.appWatermark" @change="useAppStore.dbUtilsStore" />
      </div>
      <!-- <div class="flex_center_between">
        <span>面包屑</span>
        <el-switch size="default" v-model="pickerSwitch" />
      </div>
      <div class="flex_center_between">
        <span>面包屑图标</span>
        <el-switch size="default" v-model="pickerSwitch" />
      </div>
      <div class="flex_center_between">
        <span>标签栏</span>
        <el-switch size="default" v-model="pickerSwitch" />
      </div>
      <div class="flex_center_between">
        <span>标签栏图标</span>
        <el-switch size="default" v-model="pickerSwitch" />
      </div>
      <div class="flex_center_between">
        <span>页脚</span>
        <el-switch size="default" v-model="pickerSwitch" />
      </div> -->
      <el-button class="mt-2" @click="debouncedResetSetting">
        <el-icon>
          <Refresh />
        </el-icon>
        重置
      </el-button>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppSettingStore } from "@/stores/AppSetting.js";
import Switch from "@/components/Switch/index.vue"; // 黑夜 / 白天
import colorPicker from '@/layout/components/colorPicker.vue'
import { Refresh, Setting, QuestionFilled, Moon, Sunny } from "@element-plus/icons-vue";
import { useDebounceFn } from "@vueuse/core";
const drawer = ref(false);
const pickerSwitch = ref(true)
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

.drawer_el {
  div {
    margin-bottom: 10px;
  }
}
</style>
