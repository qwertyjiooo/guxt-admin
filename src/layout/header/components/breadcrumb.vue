<template>
    <div class="">
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in routeList" :key="index">
                <span style="color: #fff;">{{ item }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
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

<style lang="less" scoped>
.breadcrumb {
    height: 40px;
    display: flex;
    align-items: end;
    font-size: 18px;
}
</style>
