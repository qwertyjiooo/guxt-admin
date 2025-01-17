<template>
    <!-- 验证码/密码登录 rules 验证规则 -->
    <div style="padding: 20px;">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <!-- 验证码登录 -->
            <el-tab-pane label="验证码登录" name="code">
                <el-form ref="codeForm" :model="data" :rules="rules" :resetFields="true" @keydown.enter="login(codeForm)">
                    <el-form-item prop="phone">
                        <el-input size="large" placeholder="请输入手机号" v-model.trim="data.phone" />
                    </el-form-item>
                    <el-form-item prop="code" class="code-box">
                        <el-input size="large" placeholder="请输入验证码" v-model.trim="data.code" maxlength="6"></el-input>
                        <el-button type="primary" link size="small" class="code-btn">
                            <span style="color: #999;" v-show="!isGetCode" @click="sendCode">获取验证码</span>
                            <span style="color: #999;" v-show="isGetCode">{{ count }}秒后重发</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="large" @click="login(codeForm)"
                            style="width: 100%;margin-top: 40px;">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!-- 密码登录 -->
            <el-tab-pane label="密码登录" name="password">
                <el-form ref="passwordForm" :model="data" :rules="rules"  @keydown.enter="login(passwordForm)">
                    <el-form-item prop="phone">
                        <el-input size="large" placeholder="请输入手机号" v-model.trim="data.phone" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input size="large" placeholder="请输入密码" v-model.trim="data.password"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="large" @click="login(passwordForm)"
                            style="width: 100%;margin-top: 40px;">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
// 路由
const router = useRouter()

// 登录选项卡
const activeName = ref('code')
// 点击选项卡
const handleClick = (tab, event) => {
    // 点击当前选项卡不进行操作
    // clearValidate 用于清除表单验证
    if (activeName.value === tab.props.name) return;
    if (tab.props.name === 'code') {
        codeForm.value.clearValidate();
        // 重置验证码
        data.code = ''
    }
    if (tab.props.name === 'password') {
        passwordForm.value.clearValidate();
    }
}


// 是否 获取 验证码
const isGetCode = ref(false)
// 倒计时
const count = ref(0)
// 发送验证码
const sendCode = () => {
    // 根据验证规则 判断手机号是否合法
    codeForm.value.validateField('phone', err => {
        // rule 验证失败，后续操作不进行
        if (!err) return;
        ElMessage.success('验证码已发送，请注意查收！')
        count.value = 60
        // 设置倒计时
        isGetCode.value = true
        let timer = setInterval(() => {
            count.value--
            if (count.value === 0) {
                isGetCode.value = false
                clearInterval(timer)
            }
        }, 1000)
    })
}

// 验证码登录ref
const codeForm = ref();
// 密码登录ref
const passwordForm = ref();
// 登录数据
const data = reactive({
    phone: '',
    code: '',
    password: ''
})
// 验证规则
const rules = {
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ],
    code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 6, max: 6, message: '请输入6位验证码', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '密码长度在6到20个字符', trigger: 'blur' }
    ]
}

// 登录操作
const login = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (!valid) return;
        if (activeName.value == 'code') {
            // 跳转到 首页
            router.push('/')
        }
        if (activeName.value == 'password') {
            // 跳转到 首页
            router.push('/')
        }
    })
}
</script>

<style lang="less" scoped>
// .demo-tabs {}
.code-box {
    position: relative;
}

.code-btn {
    position: absolute;
    // top: 50%;
    bottom: 0;
    right: 0;
    transform: translateY(-50%);
}

:deep(.el-tabs__item) {
    font-size: 16px;
}

:deep(.el-tabs__content) {
    padding-top: 20px;
}

:deep(.el-tabs__nav-wrap:after) {
    display: none;
}

:deep(.el-input__wrapper) {
    box-shadow: none;
}

.el-input {
    border: none;
    /* 去除默认边框 */
    border-bottom: 1px solid #f0f3fa;
    /* 设置底部边框为横线 */
    box-shadow: none;
    /* 去掉默认阴影 */
    transition: all 0.3s;
    /* 增加动画效果 */
}

.el-input:hover {
    border-bottom: 1px solid #c4c6cb;
    /* 鼠标悬停时修改横线颜色 */
}

.el-input:focus-within {
    border-bottom: 1px solid var(--el-color-primary);
    /* 聚焦时修改横线颜色 */
}

.el-input .el-input__inner {
    border: none;
    /* 去掉内框的边框 */
    box-shadow: none;
    /* 去掉内框的阴影 */
    outline: none;
    /* 去掉输入框获得焦点时的轮廓 */
}

:deep(.el-form-item.is-error .el-input__wrapper) {
    // box-shadow: none;
    border-radius: 0;
    box-shadow: 0 1px 1px rgb(255, 0, 0);
}

:deep(.el-form-item__error) {
    padding: 3px 15px 0;
}
</style>
