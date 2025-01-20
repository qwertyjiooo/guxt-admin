<template>
  <div class="login">
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0 20px 0;
      "
    >
      <img src="@/assets/img/geZhiLogo.png" alt="" style="width: 60px" />
      <div style="font-size: 28px; padding-left: 20px; color: #fff">格致</div>
    </div>
    <div class="theme-switch">
      <el-switch
        size="default"
        v-model="useAppStore.appThemeDark"
        @change="changeThemeType"
        :active-action-icon="Sunny"
        :inactive-action-icon="Moon"
      />
    </div>
    <div class="login-title">
      <div style="flex: 7">
        <!-- 扫码登录 -->
        <Scan></Scan>
      </div>
      <div style="flex: 8">
        <!-- 验证码登录/密码登录 -->
        <Verification></Verification>
        <!-- 其他登录方式 -->
        <Cipher></Cipher>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Scan from "./scan.vue";
import Verification from "./Verification.vue";
import Cipher from "./cipher.vue";
import Footer from "./footer.vue";
import { Sunny, Moon, Refresh } from "@element-plus/icons-vue";
import { useAppSettingStore } from "@/stores/AppSetting.js";

// 切换主题颜色
const useAppStore = useAppSettingStore();
const changeThemeType = (val) => {
  useAppStore.toggleThemeDark(val);
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("@/assets/svg/login-bq.svg") no-repeat center center;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
  transition: background-image 0.5s ease;
  .login-title {
    background-color: var(--menu-background);
    width: 750px;
    // height: 500px;
    border-radius: 5px;
    display: flex;
    box-sizing: border-box;
  }
  .theme-switch {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
.dark .login {
  background-image: none;
//   background-size: cover;
//   background-position: center;
}
</style>
