<template>
    <el-tabs v-model="editableTabsValue" type="card" @tab-click="tabClick" class="demo-tabs" @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs" :key="item.path" :label="item.title" :name="item.path"
            :closable="!item.close" :lazy='true'>
            <template #label>
                {{ item.title }}
            </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useTabsStore } from '@/stores/tabs.js'
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const tabsStore = useTabsStore()

const editableTabsValue = ref(route.fullPath)
const editableTabs = tabsStore.tabsMenuList

onMounted(() => {
    initTabs()
})

// 删除标签页
const removeTab = (path) => {
    // 先获取当前选中的 tab 的路径
    const currentTabPath = editableTabsValue.value;

    // 调用 store 中的 removeTabs 方法
    tabsStore.removeTabs(path);

    // 检查删除的 tab 是否是当前选中的 tab
    if (currentTabPath === path) {
        // 获取删除 tab 后的 tabs 列表
        const remainingTabs = tabsStore.tabsMenuList;

        // 如果仍然有剩余的 tabs，选择最后一个标签页，或选择第一个
        if (remainingTabs.length > 0) {
            // 自动跳转到最后一个标签页（也可以根据需求选择其他策略）
            editableTabsValue.value = remainingTabs[remainingTabs.length - 1].path;
            router.push(remainingTabs[remainingTabs.length - 1].path);
        } else {
            // 如果没有剩余的标签页，可以选择跳转到一个默认路由
            editableTabsValue.value = '/'; // 或者您定义的任何默认路径
            router.push('/'); // 这里指定默认路由
        }
    }
}

const tabClick = (tab) => {
    router.push(tab.props.name);
}

// 初始化 数据
const initTabs = () => {
    tabsStore.initTabs()
}

// 监听路由变化
watch(
    () => route.fullPath,
    (newVal) => {
        editableTabsValue.value = newVal
        tabsStore.addTabs(route)
    },
    { immediate: true }
)
</script>


<style scoped lang="less">
:deep(.el-tabs__header) {
    margin: 0 !important;
    padding: 0 20px !important;
    height: var(--tabs_height);
    // 禁止文本选中
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;

    .el-tabs__nav {
        border: none !important;
    }

    .el-tabs__content {
        display: none !important;
    }

    .el-tabs__item {
        border: none !important;
    }

    .is-active {
        border-bottom: 2px solid var(--el-color-primary) !important;
    }
}
</style>