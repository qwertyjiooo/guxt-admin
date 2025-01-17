<template>
    <div class="h-full flex items-center justify-center">
        <el-dropdown>
            <div class="flex items-center">
                <span class="cursor-pointer pr-2 text-white">书中枫叶</span>
                <img class="wh-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="">
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped></style>
