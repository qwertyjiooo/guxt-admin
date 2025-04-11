<template>
    <div style="width: 100%;">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
            <!-- 手机号 -->
            <el-form-item label="" prop="phone">
                <el-input size="large" v-model="ruleForm.phone" placeholder="请输入手机号">
                    <template #prefix>
                        <span class="prefix">手机号</span>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item label="" prop="code">
                <el-input size="large" v-model="ruleForm.code" type="number" maxlength="6" minlength="6" placeholder="请输入验证码">
                    <template #prefix>
                        <span class="prefix">验证码</span>
                    </template>
                    <template #suffix>
                        <el-button link class="prefix" :disabled="codeShow" type="primary" size="large" style="width: 100px;" round @click="codeClick">
                            <span class="flex_center">获取验证码 {{ code == 0 ? '' : code }}</span>
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
                <div class="flex_center" style="width: 100%">
                    <el-button style="width: 48%;" size="large" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref, watch} from 'vue'
import { ElMessage } from 'element-plus'

/**
 * 登录验证操作
 */
const ruleFormRef = ref('')
const ruleForm = reactive({
    phone: '', // 手机号
    code: '', // 验证码
})
// 登录 操作
const submitForm = (rules) => {
    ElMessage.warning('暂未开放注册功能')
}
// 验证手机号
const validatePass = (rule, value, callback) => {
    // 手机号正则
    const reg = /^1[3-9]\d{9}$/
    if (value === '') {
        callback(new Error('请输入手机号'))
    } else if (!reg.test(value)) {
        callback(new Error('手机号格式不正确'))
    } else {
        callback()
    }
}
// 验证验证码
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}
// 验证规则
const rules = reactive({
    phone: [
        { validator: validatePass, trigger: 'blur' },
    ],
    code: [
        { validator: validatePass2, trigger: 'blur' },
    ],
})
/**
 *   获取验证码
 */
const codeShow = ref(true)
const code = ref('')
// 监听手机号输入框格式是否正确
watch(() => ruleForm.phone, (newPhone) => {
    if (code.value != '') return
    const phoneReg = /^1[3-9]\d{9}$/
    codeShow.value = !(phoneReg.test(newPhone) && newPhone.length === 11)
},{ immediate: true, deep: true })
const codeClick = () => {
    // ...
    // 60秒倒计时
    let num = 60
    code.value = num + 's'
    codeShow.value = true
    const timer = setInterval(() => {
        num--
        code.value = num + 's'
        if (num === 0) { 
            clearInterval(timer)
            codeShow.value = false
            code.value = ''
        }
    }, 1000)
}

</script>

<style lang="scss" scoped>
.prefix {
    color: var(--el-text-color-primary)
}

</style>
