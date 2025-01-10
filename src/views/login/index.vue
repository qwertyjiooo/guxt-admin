<template>
    <div class="login">
        <div style="display: flex; justify-content: center; align-items: center; padding: 60px 0 40px 0;">
            <img src="@/assets/img/geZhiLogo.png" alt="" style="width: 80px;">
            <div style="font-size: 32px;padding-left: 20px;">格致</div>
        </div>
        <div class="login-title">
            <div style="flex: 7;">
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
import Scan from './scan.vue'
import Verification from './Verification.vue'
import Cipher from './cipher.vue'
import Footer from './footer.vue'

</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #1e97f1, #7bc5fd);
    // background: url("@/assets/img/loginBackground.png");
    // background-color: #f1c6d9  ;
    background-size: 100%;
    background-position: left 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow: auto;

    .login-title {
        background-color: #fff;
        width: 750px;
        // height: 500px;
        border-radius: 5px;
        display: flex;
        box-sizing: border-box;
    }
}
</style>
