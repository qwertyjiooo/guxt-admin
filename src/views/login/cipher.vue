<template>
    <!-- 登录其他方式 -->
    <div class="">
        <div class="login-other">
            <div class="login-other-item line"></div>
            <div class="login-other-item">其他登录方式</div>
            <div class="login-other-item line"></div>
        </div>
        <div class="textBar">
            <div class="textBar-item" @click="ElMessage.info('功能开发中...')"><img class="qq-icon" src="@/assets/svg/weixin.svg" alt="">
            </div>
            <div class="textBar-item" @click="ElMessage.info('功能开发中...')"><img class="qq-icon" src="@/assets/svg/QQ.svg" alt=""></div>
            <div class="textBar-item" @click="ElMessage.info('功能开发中...')"><img class="qq-icon" src="@/assets/svg/weibo.svg" alt="">
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

    .textBar-item {
        transition: all 0.3s ease;
        
        &:hover {
            img {
                animation: swing 1s ease infinite;
                transform: scale(1.2);
            }
        }
        
        img {
            width: 28px;
            height: 28px;
            margin: 30px 30px 0;
            transition: all 0.3s ease;
        }
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

/* 定义摆动动画 */
@keyframes swing {
    0%, 100% { 
        transform: rotate(-5deg) scale(1.2);
    }
    50% { 
        transform: rotate(5deg) scale(1.2);
    }
}

</style>
