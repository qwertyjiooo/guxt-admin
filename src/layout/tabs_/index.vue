<template>
    <el-tabs v-model="editableTabsValue" type="card" @tab-click="tabClick" class="demo-tabs" closable
        @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs" :key="item.path" :label="item.title" :name="item.path"
            :closable="true">
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

const removeTab = (targetName) => {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value

    // 找到目标标签页
    const index = tabs.findIndex(tab => tab.name === targetName);
    if (index !== -1) {
        // 如果删除的是当前活动的标签页，选择下一个或前一个
        if (activeName === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            activeName = nextTab ? nextTab.name : '';
        }

        // 删除该标签页
        tabs.splice(index, 1);
    }

    // 更新活动标签页
    editableTabsValue.value = activeName;
}
const tabClick = (tab) => {
    console.log(tab);
    router.push(tab.props.name)
}
// 初始化 数据
const initTabs = () => {
    tabsStore.initTabs()
}

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