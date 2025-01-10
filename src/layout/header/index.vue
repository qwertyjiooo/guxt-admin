<template>
    <el-header class="header">
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in routeList" :key="index">
                <span style="color: #fff;">{{ item }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 右侧内容 -->
        <div class="right">
            <el-dropdown placement="bottom">
                <el-avatar class="user-avatar" src="https://avatars.githubusercontent.com/u/12345678?v=4"
                    alt="User Avatar" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const routeList = ref([]);
// 监听路由变化
watch(route, (newRoute, oldRoute) => {
    routeList.value = [];
    newRoute.matched.forEach(res => {
        if (res.meta.title !== '') {
            routeList.value.push(res.meta.title);
        }
    });
}, { immediate: true, deep: true });

</script>

<style lang='less' scoped>
.header {
    background-color: #1e97f1;
    width: 100%;
    display: flex;
    position: relative;
}

.breadcrumb {
    height: 40px;
    display: flex;
    align-items: end;
    font-size: 18px;
}

.right {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}

// 面包屑 separator 颜色
:deep(.el-breadcrumb__separator) {
    color: #fff;
}
</style>