<template>
    <div class="password_login">
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue';
// 密码登录
const pasForm = ref({
    username: '',
    password: '',
})
const pasOnSubmit = () => {
    console.log(pasForm.value)
}
</script>

<style lang="less" scoped></style>
