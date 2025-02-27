<template>
    <div class="main-container flex_column">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.main-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 20px - var(--header_height ) - var(--footer_height) - var(--tabs_height));
}
</style>
