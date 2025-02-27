<template>
    <div class="flex-1 overflow-hidden">
        <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in routeList" :key="index" style="color: black;">
                <span>{{ item }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue'

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

<style lang="less" scoped>
.w-auto {
    color: var(--el-text-color-primary);
}

.breadcrumb {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 100%;
    width: 200px;
    span {
        font-weight: 600;
    }
}
:deep(.el-breadcrumb__separator) {
    color: var(--el-text-color-primary) !important;
}
</style>
