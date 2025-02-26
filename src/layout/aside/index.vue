<template>
  <div class="flex flex-col h-[100vh]">
    <Logo />
    <el-menu 
      :default-active="currentRoute" 
      class="menu_container" width="200"
      :collapse="appSidebarStore.appSidebarStatus"
      :unique-opened="true"
    >
      <template v-for="(item, index) in asideRoutesList" :key="index">
        <!-- 二级路由的显示 -->
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 0"
          :class="{ 'sub-menu-item-active': isActive(item) }">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item v-for="(child, i) in item.children" :key="i" :index="child.path"
            @click="handleClick(child.path)" :class="{ 'menu-item-active': currentRoute === child.path }">{{
              child.meta.title }}</el-menu-item>
        </el-sub-menu>
        <!-- 一级路由的显示 -->
        <el-menu-item v-else :index="item.path" @click="handleClick(item.path)" :class="{ 'menu-item-active': currentRoute === item.path }">
          <el-icon>
            <location />
          </el-icon>
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </template>
    </el-menu>
    <colorPicker />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Logo from './components/logo.vue';
import colorPicker from './components/colorPicker.vue';

import { Location } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import routes from "@/router/routes";

// 引入 store 切换侧边栏状态
import { useAppSidebarStore } from "@/stores/AppSidebar";
// 获取 store 判断是否折叠
const appSidebarStore = useAppSidebarStore();

const router = useRouter(); // 获取路由实例
const route = useRoute(); // 获取当前路由信息
const currentRoute = ref(""); // 获取当前路由
const asideRoutesList = ref([]); // 筛选侧边展示的导航
const asideRoutes = () => {
  const filterRoutes = routes.filter((item) => item.meta.isShow);
  asideRoutesList.value = filterRoutes[0].children;
  currentRoute.value = route.path;
  // console.log(filterRoutes[0].children);
}

const handleClick = (path) => {
  currentRoute.value = path;
  router.push(path);
}

// 判断父级菜单是否应该被激活
const isActive = (item) => {
  // 如果当前路由是子路由或当前路由是该父级的子路由之一
  return item.children && item.children.some(child => currentRoute.value === child.path);
};

onMounted(() => {
  asideRoutes();
})

// 监听路由变化
router.afterEach(() => {
  currentRoute.value = route.path;
});

</script>

<style lang="less">
.menu_container:not(.el-menu--collapse) {
  width: 180px;
}

.menu_container {
  height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: auto;
}

.menu-item-active {
  box-sizing: border-box;
  border-right: 3px solid var(--menu-active-text);
  background-color: var(--el-menu-hover-bg-color);
}

.sub-menu-item-active {
  background-color: var(--el-menu-hover-bg-color);
}
</style>
