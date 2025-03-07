<template>
  <div class="logo logo_is_hidden logo_hidden">
    <span class="icon"><el-icon size="30">
        <Bowl />
      </el-icon>
    </span>
    <div v-if="isLogoVisible" style="padding: 0 10px 0 10px;">{{ setting.websiteInfo.name }}</div>
  </div>
</template>

<script setup>
import { Bowl } from '@element-plus/icons-vue';
import setting from '@/setting'
import { useSidebarLogoVisibility } from '@/hooks/useSidebarLogoVisibility';
const { isLogoVisible } = useSidebarLogoVisibility();
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  height: var(--header_height);
  font-size: 16px;
  font-weight: bold;
  background-color: var(--main-background);
  border-bottom: 1px solid var(--main-border-color);
  border-right: 1px solid var(--main-border-color);
  overflow: hidden;
  // 文字不换行
  white-space: nowrap;
  box-sizing: border-box;

  .icon {
    height: 30px;
    box-sizing: border-box;
  }
}
.logo_is_hidden { // aside 占据一列时
  padding: 0 10px 0 17px; 
}
// .logo_hidden { // header 占据一行时
//   width: var(--aside_width);
// }
</style>
