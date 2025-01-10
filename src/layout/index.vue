<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px" style="height: 100vh;background-color: pink;">
                <Aside />
            </el-aside>
            <el-container style="flex-direction: column;">
                <Header />
                <el-main>
                    <Main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import Aside from './aside/index.vue'
import Header from './header/index.vue'
import Main from './main/index.vue'
</script>
<style lang="less">
.common-layout {
    width: 100vw;
    height: 100vh;
}
</style>