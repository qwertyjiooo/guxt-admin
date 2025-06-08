<template>
    <div class="search flex_center">
        <el-icon size="20" @click="dialogVisible = true">
            <Search/>
        </el-icon>
        <el-dialog title="" v-model="dialogVisible" width="30%" :show-close="false">
            <el-input v-model="searchInput" placeholder="菜单搜索：支持菜单名称和路径" size="large" :prefix-icon="Search"
                      clearable></el-input>
            <el-empty v-show="searchList.length === 0" description="暂无数据" :image-size="100"/>
            <el-menu style="max-height: 500px;overflow: auto;" :default-active="currentRoute">
                <el-menu-item v-for="item in searchList" :index="item.path" :key="item.path"
                              @click="handleClick(item.path)">{{ item.meta.title }}
                </el-menu-item>
            </el-menu>
        </el-dialog>
    </div>
</template>

<script setup>
import {ref, watch, onMounted} from "vue";
import {Search} from "@element-plus/icons-vue";
import routes from "@/router/routes";
import {useRouter} from "vue-router";
import {useDebounce} from '@vueuse/core';

const dialogVisible = ref(false); // 搜索框弹窗
const searchInput = ref(""); // 搜索框输入内容
const searchList = ref([]); // 搜索结果列表
const routeList = ref([]); // 路由列表
const router = useRouter(); // 路由实例
const currentRoute = ref(router.currentRoute.value.path); // 当前路由
// 路由扁平化操作
const initTabs = () => {
    const flatRoutes = (item) => { // 扁平化路由
        if (item.children) {
            item.children.map(child => {
                flatRoutes(child)
            })
        } else routeList.value.push(item); // 用于是否固定标签页
    }
    // 过滤出 meta.isShow 为true的项
    routes.forEach(item => item.meta.isShow && flatRoutes(item));
}
onMounted(() => {
    initTabs();
});

// input 防抖
const debouncedSearchInput = useDebounce(searchInput, 300);
// 模糊查询 路由名称 和 路由路径
const search = () => {
    if (searchList.value.length > 0) searchList.value = [];
    if (searchInput.value === "") return;
    searchList.value = routeList.value.filter(item => {
        return item.meta.title.includes(searchInput.value) || item.path.includes(searchInput.value);
    })
};
watch(debouncedSearchInput, (val) => {
    search();
});

const handleClick = (path) => {
    dialogVisible.value = false;
    router.push(path);
}

</script>

<style lang="scss" scoped>
.search {
    cursor: pointer;

    :deep(.el-dialog__header) {
        display: none;
    }
;

    :deep(.el-menu) {
        border: none;
    }
;

    :deep(.el-menu-item) {
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        // 底部虚线边框
        border-bottom: 1px dashed #ccc;
    }
;
}
</style>
