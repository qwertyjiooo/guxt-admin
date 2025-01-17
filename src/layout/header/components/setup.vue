<template>
  <div class="h-full flex items-center pr-4">
    <el-popover placement="bottom" :width="200" trigger="click">
      <template #reference>
        <div>
          <span class="cursor-pointer" title="系统设置">
            <img src="@/assets/svg/shezhi.svg" alt="" class="w-5 h-5">
          </span>
        </div>
      </template>
      <section>
        <h4>系统主题</h4>
        <el-switch size="default" v-model="useAppStore.appThemeDark" @change="changeThemeType"
                 :active-action-icon="Sunny"
                 :inactive-action-icon="Moon"/>
        <h4>主题颜色</h4>
        <div class="theme-color-list">
          <span v-for="(item, index) in predefineColors" :key="index" :title="item" @click="changeThemeColor(item)"
            :style="{ backgroundColor: item }"></span>
        </div>
        <h4>自定义主题颜色</h4>
        <el-color-picker v-model="useAppStore.appThemeColor" size="default" @change="changeThemeColor" show-alpha />
      </section>
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAppSettingStore } from '@/stores/AppSetting.js'
import { Sunny, Moon } from '@element-plus/icons-vue'
const predefineColors = ref([
  'rgba(63, 81, 181, 1)',
  'rgba(255, 69, 0, 1)',
  'rgba(255, 140, 0, 1)',
  'rgba(255, 215, 0, 1)',
  'rgba(144, 238, 144, 1)',
  'rgba(0, 206, 209, 1)',
  'rgba(30, 144, 255, 1)',
  'rgba(199, 21, 133, 1)',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

// 切换主题颜色
const useAppStore = useAppSettingStore()
const changeThemeColor = (color) => {
  useAppStore.toggleThemeColor(color)
}
// 切换主题模式
const changeThemeType = (val) => {
  useAppStore.toggleThemeDark(val)
}
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
    transition: all .28s linear;
    box-shadow: 0 0 5px #eaeaea;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid var(--el-color-primary);
      box-shadow: 0 0 5px var(--el-color-primary);
    }
  }

}
</style>
