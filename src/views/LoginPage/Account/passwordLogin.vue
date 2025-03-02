<template>
    <div style="width: 100%;">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
            <!-- 账号 -->
            <el-form-item label="" prop="pass">
                <el-input size="large" v-model="ruleForm.account">
                    <template #prefix>
                        <span class="prefix">账号</span>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="" prop="checkPass">
                <el-input size="large" v-model="ruleForm.password" type="password" show-password>
                    <template #prefix>
                        <span class="prefix">密码</span>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                <el-button @click="resetForm(ruleFormRef)">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const ruleFormRef = ref('')
const ruleForm = reactive({
    account: '', // 账号
    password: '', // 密码
})
// 登录 操作
const submitForm = (rules) => {
    console.log(rules)
}
// 注册 操作
const resetForm = (rules) => {
    console.log(rules)
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
</script>

<style lang="scss" scoped>
.prefix {
    color: var(--el-text-color-primary)
}
</style>
