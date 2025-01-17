<template>
  <div class="logo" style="">
    <img src="@/assets/img/geZhiLogo.png" alt="" />
    <span>{{ setting.websiteInfo.name }}</span>
  </div>
</template>

<script setup>
import setting from '@/setting'

</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--header-menu-background);
  color: #fff;
  border-bottom: 1px solid var(--main-border-color);
  border-right: 1px solid var(--main-border-color);
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
</style>
