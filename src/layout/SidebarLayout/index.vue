<template>
    <div class="common-layout">
        <el-container>
            <el-header style="display: flex;">
                <Logo  style="width: var(--aside_width);"/>
                <Aside style="height: var(--header_height);" :horizontal="'horizontal'"/>
                <Header />
            </el-header>
            <el-container>
                <el-container>
                    <Tabs_ />
                    <el-main class="main-content"><Main /></el-main>
                    <el-footer><Footer /></el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import Aside from '../components/Aside/index.vue'
import Header from '../components/Header/index.vue'
import Main from '../components/Main/index.vue'
import Footer from '../components/Footer/index.vue'
import Tabs_ from '../components/Tabs_/index.vue'
import Logo from '../components/Logo/index.vue'
</script>
<style lang="scss" scoped>
.common-layout {
    width: 100vw;
    height: 100vh;
}

.main-content {
    background-color: var(--main-background);
}

.el-main {
    box-sizing: border-box;
    padding: 10px 12px;
    overflow-x: hidden;
    background-color: var(--el-bg-color-page);
}

:deep(.el-header) {
    padding: 0 !important;
    height: var(--header_height);
}

:deep(.el-footer) {
    padding: 0 !important;
    height: var(--footer_height);
}
</style>