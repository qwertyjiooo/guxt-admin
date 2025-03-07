<template>
    <div class="common-layout">
        <el-container style="display: flex;">
            <el-aside width="auto" style="height: 100vh;">
                <Aside />
            </el-aside>
            <el-container style="flex-direction: column;">
                <Header />
                <Tabs_ />
                <el-main class="main-content">
                    <Main />
                </el-main>
                <Footer />
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import Aside from '../aside/index.vue'
import Header from '../header/index.vue'
import Main from '../main/index.vue'
import Footer from '../footer/index.vue'
import Tabs_ from '../tabs_/index.vue'
</script>
<style lang="less" scoped>
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
</style>