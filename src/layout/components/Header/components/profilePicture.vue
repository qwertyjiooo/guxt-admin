<template>
    <div class="h-full flex items-center justify-center">
        <el-dropdown trigger="click">
            <div class="flex items-center">
                <span class="cursor-pointer pr-2 text-[16px]">{{user.nickname}}</span>
                <!-- <img class="wh-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/12345678?v=4" alt=""> -->
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import utils from '@/utils/util.strotage.js';
import { useRouter } from 'vue-router';
import {api} from '@/api/index.js'
const router = useRouter();
// 退出登录
const logout = () => {
    const timer = setTimeout(() => {
        utils.remove('token');
        router.push('/account/login');
        clearTimeout(timer);
    }, 500);
}

const user = ref({})
onMounted(() => {
    api.userinfo().then(res => {
       user.value= res.data
    })
})
</script>

<style lang="less" scoped></style>
