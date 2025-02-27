<template>
  <div class="logo">
    <span class="icon"><el-icon size="30">
        <Bowl />
      </el-icon>
    </span>
    <div v-if="isLogoVisible">{{ setting.websiteInfo.name }}</div>
  </div>
</template>

<script setup>
import { Bowl } from '@element-plus/icons-vue';
import setting from '@/setting'
import { useSidebarLogoVisibility } from '@/hooks/useSidebarLogoVisibility';
const { isLogoVisible } = useSidebarLogoVisibility();
</script>

<style lang="less" scoped>
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
    padding: 0 10px 0 17px;
  }
}
</style>
