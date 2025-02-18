<template>
  <div class="container">
    <el-menu class="menu-vertical-demo" :collapse="appSidebarStore.appSidebarStatus" :default-active="currentRoute">
      <logo />
      <div class="menu-list">
        <div v-for="(item, index) in routeList" :key="index">
          <!-- 一级路由的显示 -->
          <el-menu-item :class="{ 'menu-item-active': currentRoute === item.path }" v-if="!item.children"
            :index="item.path" @click="handleClick(item.path)">
            <el-icon>
              <location />
            </el-icon>
            <template #title>
              {{ item.meta.title }}
            </template>
          </el-menu-item>
          <!-- 二级路由的显示 -->
          <el-sub-menu :index="item.path" v-else>
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <div v-for="(child, index) in item.children" :key="index">
              <el-menu-item :index="child.path" @click="handleClick(child.path)"
                :class="{ 'menu-item-active': currentRoute === child.path }">{{ child.meta.title }}</el-menu-item>
            </div>
          </el-sub-menu>
        </div>
      </div>
      <colorPicker class="colorPicker" />
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import logo from "./components/logo.vue";
import colorPicker from "./components/colorPicker.vue";
import { Location } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import routes from "@/router/routes";
// 引入 store 切换侧边栏状态
import { useAppSidebarStore } from "@/stores/AppSidebar";
// 获取 store
const appSidebarStore = useAppSidebarStore();
// 获取路由实例
const router = useRouter();
const route = useRoute();
// 获取到的路由列表
const routeList = ref([]);
// 获取当前路由
const currentRoute = ref("");
// 获取侧边栏是否折叠
const isCollapse = ref(false);
onMounted(() => {
  // 遍历路由列表
  routes.forEach((item) => {
    // 判断 meta-> isShow 是否为 true
    if (item.meta.isShow) {
      // 判断 是否是 一级路由
      if (item.meta.isOnlyOneMenu) {
        // 添加子级路由
        routeList.value.push(...item.children);
      } else {
        // 添加一级路由
        routeList.value.push(item);
      }
    }
  });
  // console.log(routeList.value);
  currentRoute.value = route.path;
});

// 点击菜单项
const handleClick = (path) => {
  currentRoute.value = path;
  router.push(path);
};

// 监听路由变化
router.afterEach(() => {
  currentRoute.value = route.path;
});
</script>

<style lang="less" scoped>
:deep(.el-aside) {
  width: auto !important;
}

.container {
  overflow: hidden;
}

.menu-list {
  height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 40px;
  background-color: var(--menu-background);
}

.el-menu-item {
  span {
    font-size: 16px;
  }
}

.menu-item-active {
  border-right: 3px solid var(--menu-active-text);
  background-color: var(--el-menu-hover-bg-color);
}
</style>
