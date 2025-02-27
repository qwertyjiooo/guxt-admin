<template>
    <div>
        <el-tabs v-model="editableTabsValue" type="card" class="demo-tabs" closable @tab-remove="removeTab">
            <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
                <template #label>
                    {{ item.title }}
                </template>
            </el-tab-pane>
        </el-tabs>
    </div>

</template>

<script setup>
import { ref } from 'vue'
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
    },
])

const addTab = (targetName) => {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
}
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

</script>

<style scoped lang="less">
:deep(.el-tabs__header) {
    margin: 0 !important;
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