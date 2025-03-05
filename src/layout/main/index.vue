<template>
    <div class="main-container flex_column">
        <router-view v-slot="{ Component,route }">
            <transition name="fade-transform" mode="out-in">
                <keep-alive :include="keepAliveStore.keepAliveList">
                    <component :is="Component" :key="route.fullPath"></component>
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { useKeepAliveStore } from '@/stores/keepAlive';
const keepAliveStore = useKeepAliveStore();

</script>

<style lang="less" scoped>
.main-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 20px - var(--header_height ) - var(--footer_height) - var(--tabs_height));
}
</style>
