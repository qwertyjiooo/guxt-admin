<template>
    <div class="flex_center_between tabs-content">
        <el-tabs v-model="editableTabsValue" type="card" @tab-click="tabClick" class="demo_tabs" @tab-remove="removeTab">
            <el-tab-pane v-for="item in editableTabs" :key="item.path" :label="item.title" :name="item.path"
                :closable="!item.close" :lazy='true'>
                <template #label>
                    {{ item.title }}
                </template>
            </el-tab-pane>
        </el-tabs>
        <el-dropdown class="dropdown" placement="bottom-end" size="large" trigger="click">
            <div class="dropdown_icon flex_center">
                <el-icon size="20"><MoreFilled /></el-icon>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="refresh"><el-icon><Refresh /></el-icon>刷新</el-dropdown-item>
                    <el-dropdown-item @click="fullScreen"><el-icon><FullScreen /></el-icon>最大化</el-dropdown-item>
                    <el-dropdown-item @click="remove"><el-icon><Remove /></el-icon>关闭当前</el-dropdown-item>
                    <el-dropdown-item @click="dArrowLeft"><el-icon><DArrowLeft /></el-icon>关闭左侧</el-dropdown-item>
                    <el-dropdown-item @click="dArrowRight"><el-icon><DArrowRight /></el-icon>关闭右侧</el-dropdown-item>
                    <el-dropdown-item @click="circleClose"><el-icon><CircleClose /></el-icon>关闭其他</el-dropdown-item>
                    <el-dropdown-item @click="removeAll"><el-icon><FolderDelete /></el-icon>关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import Sortable from "sortablejs";
import { useTabsStore } from '@/stores/tabs.js';
import { useKeepAliveStore } from '@/stores/keepAlive';
import { useRoute, useRouter } from "vue-router";
import { MoreFilled, Refresh, FullScreen, Remove, DArrowLeft, DArrowRight, CircleClose, FolderDelete } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const route = useRoute();
const router = useRouter();
const tabsStore = useTabsStore();
const keepAliveStore = useKeepAliveStore();

const editableTabsValue = ref(route.fullPath)
const editableTabs = tabsStore.tabsMenuList

// 删除标签页
const removeTab = (path) => {
    // 先获取当前选中的 tab 的路径
    const currentTabPath = editableTabsValue.value;
    tabsStore.removeTabs(path,currentTabPath);
}
// 标签页点击事件
const tabClick = (tab) => {
    router.push(tab.props.name);
}

// 初始化 数据
const initTabs = () => {
    tabsStore.initTabs()
}

// 刷新当前的页面
const refresh = () => {
    keepAliveStore.removeKeepAlive(route.name)
    tabsStore.setRefresh(false)
    nextTick(() => {
        keepAliveStore.addKeepAlive(route.name)
        tabsStore.setRefresh(true)
    })
}
// 全屏操作
const fullScreen = () => {
    ElMessage.warning('功能开发中')
}
// 关闭当前菜单
const remove = () => {
    removeTab(route.fullPath)
}
// 关闭左侧菜单
const dArrowLeft = () => {
    tabsStore.removeLeftTabs(editableTabsValue.value)
}
// 关闭右侧菜单
const dArrowRight = () => {
    tabsStore.removeRightTabs(editableTabsValue.value)
}
// 关闭其他菜单
const circleClose = () => {
    tabsStore.removeOtherTabs(editableTabsValue.value)
}
// 关闭所有菜单
const removeAll = () => {
    tabsStore.removeAllTabs();
}

// 拖拽排序
const tabsDrop = () => {
    Sortable.create(document.querySelector('.el-tabs__nav'), {
        // draggable: ".el-tabs__item",
        animation: 300,
        onEnd: (evt) => {
            tabsStore.dragSort(evt.oldIndex, evt.newIndex)
        }
    })
}

onMounted(() => {
    initTabs();
    tabsDrop();
})
// 监听路由变化
watch(
    () => route.fullPath,
    (newVal) => {
        editableTabsValue.value = newVal
        tabsStore.addTabs(route)
        keepAliveStore.addKeepAlive(route.name)
    },
    { immediate: true }
)
</script>


<style scoped lang="scss">
.tabs-content {
    box-shadow: 0 1px 0 var(--main-border-color);
}
.dropdown{
    height: 100%;
    .dropdown_icon {
        height: 100%;
        padding:0 20px 0 20px;
        border-left: 1px solid var(--main-border-color);
        transition: all 0.3s ease;
        &:hover{
            background-color: var(--el-menu-hover-bg-color);
        }
    }
}
.demo_tabs {
    overflow: auto;
}
:deep(.el-tabs__header) {
    margin: 0 !important;
    padding: 0 10px !important;
    height: var(--tabs_height);
    border-bottom: none;
    // 禁止文本选中
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    //-o-user-select: none;

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