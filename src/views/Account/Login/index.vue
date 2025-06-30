<template>
    <div class="account flex_column_center no_select">
        <el-tabs v-model="loginType" class="login-tabs" stretch>
            <!-- 密码登录 -->
            <el-tab-pane label="密码登录" name="password">
                <el-form ref="passwordFormRef" :model="passwordLoginForm" :rules="passwordRules" label-position="top"
                         @keyup.enter="handlePasswordLogin">
                    <el-form-item prop="username" label="用户名">
                        <el-input v-model="passwordLoginForm.username" placeholder="请输入用户名"/>
                    </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input
                            v-model="passwordLoginForm.password"
                            type="password"
                            show-password
                            placeholder="请输入密码"
                        />
                    </el-form-item>
                    <el-button type="primary" @click="handlePasswordLogin" class="full-width">登 录</el-button>
                </el-form>
            </el-tab-pane>

            <!-- 短信登录 -->
            <el-tab-pane label="短信登录" name="sms">
                <el-form ref="smsFormRef" :model="smsLoginForm" :rules="smsRules" label-position="top"
                         @keyup.enter="handleSmsLogin">
                    <el-form-item prop="phone" label="手机号">
                        <el-input v-model="smsLoginForm.phone" placeholder="请输入手机号"/>
                    </el-form-item>
                    <el-form-item prop="code" label="验证码">
                        <div class="code-input-group">
                            <el-input v-model="smsLoginForm.code" placeholder="请输入验证码"/>
                            <el-button
                                @click="sendVerificationCode"
                                :disabled="isSendingCode"
                                class="code-btn"
                            >
                                {{ codeButtonText }}
                            </el-button>
                        </div>
                    </el-form-item>
                    <el-button type="primary" @click="handleSmsLogin" class="full-width">登 录</el-button>
                </el-form>
            </el-tab-pane>
        </el-tabs>

        <!-- 忘记密码 / 注册账号 -->
        <div class="login-footer">
            <a href="#" @click.prevent="gotoRegister">注册账号</a>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {api} from '@/api'
import {ElNotification} from 'element-plus'
import util from "@/utils/util.strotage.js";

const route = useRoute();
const router = useRouter();

// 登录类型（密码 or 短信）
const loginType = ref('password');

// 密码登录表单数据
const passwordLoginForm = ref({
    username: '',
    password: ''
});

// 短信登录表单数据
const smsLoginForm = ref({
    phone: '',
    code: ''
});

// 验证码按钮状态
const isSendingCode = ref(false);
const codeButtonText = ref('获取验证码');
let countdown = 60;

// 表单引用
const passwordFormRef = ref(null);
const smsFormRef = ref(null);

// 表单规则
const passwordRules = {
    username: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
        {min: 3, max: 15, message: '长度在3到15个字符', trigger: 'blur'}
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
        {min: 6, message: '密码至少6位', trigger: 'blur'}
    ]
};

const smsRules = {
    phone: [
        {required: true, message: '请输入手机号', trigger: 'blur'},
        {pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur'}
    ],
    code: [
        {required: true, message: '请输入验证码', trigger: 'blur'},
        {len: 6, message: '验证码为6位数字', trigger: 'blur'}
    ]
};

// 切换到注册页
const gotoRegister = () => {
    router.push({path: '/account/register'});
};


// 发送验证码
const sendVerificationCode = () => {
    // 模拟发送验证码逻辑
    console.log('发送验证码到:', smsLoginForm.value.phone);

    let timer = null;
    isSendingCode.value = true;
    codeButtonText.value = `${countdown}s`;

    timer = setInterval(() => {
        countdown--;
        codeButtonText.value = `${countdown}s`;
        if (countdown <= 0) {
            clearInterval(timer);
            isSendingCode.value = false;
            codeButtonText.value = '重新获取';
            countdown = 60;
        }
    }, 1000);
};

// 处理密码登录
const handlePasswordLogin = () => {
    passwordFormRef.value.validate((valid) => {
        if (valid) {
            api.login(passwordLoginForm.value).then(res => {
                util.set('token', res.data)
                ElNotification.success('登录成功')
                router.push('/home')
            })
        } else {
            return false;
        }
    });
};

// 处理短信登录
const handleSmsLogin = () => {
    smsFormRef.value.validate((valid) => {
        if (valid) {

        } else {
            console.log('短信登录校验失败');
            return false;
        }
    });
};
</script>

<style lang="scss" scoped>
.account {
    padding: 40px;
    width: 100%;
    max-width: 450px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.login-tabs {
    width: 100%;
}

.full-width {
    width: 100%;
}

.code-input-group {
    display: flex;
    gap: 10px;

    .code-btn {
        flex-shrink: 0;
        white-space: nowrap;
    }
}

.login-footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    a {
        color: var(--el-color-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
