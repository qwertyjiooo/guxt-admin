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
  // justify-content: center;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--header-menu-background);
  color: #fff;
  border-bottom: 1px solid var(--main-border-color);
  // border-right: 1px solid var(--main-border-color);
  overflow: hidden;
  // 文字不换行
  white-space: nowrap;
  box-sizing: border-box;

  img {
    // width: 30px;
    height: 30px;
    box-sizing: border-box;
    padding-left: 17px;


  }
  span {
    padding:0 20px 0 17px;
  }
}
</style>
