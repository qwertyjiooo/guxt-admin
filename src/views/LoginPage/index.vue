<template>
  <div class="login_container flex_center">
    <!-- 控制暗黑模式 -->
    <Switch class="theme_switch" />
    <div class="login_box flex_between shadow_bg_3">
      <!-- 扫码登录 -->
      <ScanCode />
      <!-- 分割线 -->
      <div class="line"></div>
      <!-- 账号密码登录 -->
      <Account />
    </div>
  </div>
</template>

<script setup name="LoginPage">
import Switch from "@/components/Switch/index.vue";
import Account from "./Account/index.vue"
import ScanCode from "./ScanCode/index.vue"

</script>

<style lang="scss" scoped>
@use './index.scss';
</style>