<template>
    <!-- 登录其他方式 -->
    <div class="">
        <div class="login-other">
            <div class="login-other-item line"></div>
            <div class="login-other-item">其他登录方式</div>
            <div class="login-other-item line"></div>
        </div>
        <div class="textBar">
            <div class="textBar-item" @click="ElMessage.info('功能开发中...')"><img src="@/assets/img/weixin.png" alt="">
            </div>
            <div class="textBar-item" @click="ElMessage.info('功能开发中...')"><img src="@/assets/img/QQ.png" alt=""></div>
            <div class="textBar-item" @click="ElMessage.info('功能开发中...')"><img src="@/assets/img/weibo.png" alt="">
            </div>
        </div>
        <div class="bottomText">
            <span>未注册手机验证后自动登录，注册即代表同意 </span>
            <el-link href="http://gezhiapi.gezhipro.com/gezhi/agreement/privacy/" target="_blank"
                type="primary">《隐私政策》</el-link>
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
</script>

<style lang="less" scoped>
.login-other {
    display: flex;
    align-items: center;
    padding: 10px 20px;

    .login-other-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #888888;
    }

    .line {
        background-color: #ccc;
        height: 1px;
        opacity: 0.4;
    }
}

.textBar {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 24px;
        height: 24px;
        margin: 30px 30px 0;
    }
}

.bottomText {
    margin-top: 30px;
    padding: 12px 0px 30px;
    font-size: 13px;
    color: #9196a1;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
