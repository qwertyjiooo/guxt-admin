<template>
    <div class="register-container">
        <h2>注册新账号</h2>
        <el-form ref="form" :model="registerForm" :rules="rules" label-position="top">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="registerForm.phone" placeholder="请输入手机号"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="registerForm.password" type="password" show-password placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input v-model="registerForm.confirmPassword" type="password" show-password placeholder="请再次输入密码"/>
            </el-form-item>
            <el-button type="primary" @click="submitForm" class="full-width">注 册</el-button>
        </el-form>

        <!-- 底部链接 -->
        <div class="other-actions">
            <span>已有账号？</span>
            <a href="#" @click.prevent="gotoLogin">立即登录</a>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {ElMessage} from "element-plus";
import {post} from "@/api/serve.js";

const router = useRouter();

// 表单引用
const form = ref(null);

// 表单数据
const registerForm = ref({
    username: '',
    phone: '',
    password: '',
    confirmPassword: ''
});

// 验证规则
const rules = {
    username: [
        {required: true, message: '请输入用户名', trigger: 'blur'},
        {min: 3, max: 15, message: '长度在3到15个字符', trigger: 'blur'}
    ],
    phone: [
        {required: true, message: '请输入手机号', trigger: 'blur'},
        {pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur'}
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
        {min: 6, message: '密码至少6位', trigger: 'blur'}
    ],
    confirmPassword: [
        {required: true, message: '请再次输入密码', trigger: 'blur'},
        {
            validator: (rule, value, callback) => {
                if (value !== registerForm.value.password) {
                    callback(new Error('两次输入密码不一致'));
                } else {
                    callback();
                }
            },
            trigger: 'blur'
        }
    ]
};

// 提交注册
const submitForm = () => {
    // 这里可以添加真实注册逻辑
    form.value.validate((valid) => {
        if (valid) {
            post('/users', registerForm.value)
            ElMessage.success('注册成功');
            router.push({
                path: '/account/login'
            })
        } else {
            return false;
        }
    });
};

// 跳转到登录页
const gotoLogin = () => {
    router.push({name: 'Login'});
};
</script>

<style lang="scss" scoped>
.register-container {
    padding: 40px;
    width: 100%;
    max-width: 450px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 24px;
    font-size: 24px;
    color: #1f2329;
    text-align: center;
}

.full-width {
    width: 100%;
}

.other-actions {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 14px;

    span {
        color: #666;
        margin-right: 8px;
    }

    a {
        color: var(--el-color-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
