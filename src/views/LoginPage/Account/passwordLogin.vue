<template>
    <div style="width: 100%;">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
            <!-- 账号 -->
            <el-form-item label="" prop="username">
                <el-input size="large" v-model="ruleForm.username" placeholder="请输入账号">
                    <template #prefix>
                        <span class="prefix">账号</span>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="" prop="password">
                <el-input size="large" v-model="ruleForm.password" type="password" placeholder="请输入密码" show-password>
                    <template #prefix>
                        <span class="prefix">密码</span>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
                <div class="flex_between" style="width: 100%">
                    <el-button :loading="loadingLogin" style="width: 48%;" size="large" type="primary"
                        @click="submitForm(ruleFormRef)">登录</el-button>
                    <el-button style="width: 48%;" size="large" @click="resetForm(ruleFormRef)">注册</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { setCookie } from '@/utils/util.cookie'
import { api } from '@/api'
const router = useRouter()
const ruleFormRef = ref('')
const ruleForm = reactive({
    username: '', // 账号
    password: '', // 密码
})
// 登录 操作
const loadingLogin = ref(false)
const submitForm = (rules) => {
    loadingLogin.value = true
    api.login(ruleForm)
        .then(res => { 
            // 将token 存入cookie
            setCookie('token', res.data.token, 7)
            // 跳转
            router.push('/home')
            loadingLogin.value = false
        })
        .catch(err => {
            loadingLogin.value = false
            ElMessage.error(err.error)
        })
}
// 注册 操作
const resetForm = (rules) => {
    ElMessage.warning('暂未开放注册功能')
}

// 验证账号
const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入账号'))
    } else {
        callback()
    }
}
// 验证密码
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

// 验证
const rules = reactive({
    account: [
        { validator: validatePass, trigger: 'blur' },
    ],
    password: [
        { validator: validatePass2, trigger: 'blur' },
    ],
})
</script>

<style lang="scss" scoped>
.prefix {
    color: var(--el-text-color-primary)
}
</style>
