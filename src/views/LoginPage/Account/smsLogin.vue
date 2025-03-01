<template>
    <div class="sms_login">
        <Input />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue';
// 短信登录
const smsForm = ref({
    phone: '',
    code: '',
})
const smsOnSubmit = () => {
    console.log(smsForm.value)
}
</script>

<style lang="less" scoped></style>
