<template>
    <div class="account flex_column_center no_select">
        <div class="account_title">
            <span :class="{active: active}" @click="titleActive(true)">密码登录</span>
            <el-divider direction="vertical" />
            <span :class="{active: !active}" @click="titleActive(false)">短信登录</span>
        </div>
        <!-- 密码登录 -->
        <PasswordLogin v-if="active" />
        <!-- 短信登录 -->
        <SmsLogin v-else />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PasswordLogin from './passwordLogin.vue';
import SmsLogin from './smsLogin.vue';

// 点击标题切换
const active = ref(true)
const titleActive = (is) => {
    if(active.value == is) return;
    active.value = is
}
</script>

<style lang="scss">
:root {
    --account_width: 400px;
}
.account {
    width: var(--account_width);
    .account_title {
        height: 45px;
        font-size: 18px;
        color: var(--el-menu-text-color);
        &> span {
            margin: 0 10px;
            cursor: pointer;
        }
        .active {
            color: var(--el-color-primary);
        }
    }
}
</style>
