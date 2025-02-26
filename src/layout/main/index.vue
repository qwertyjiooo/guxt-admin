<template>
    <div class="main-container flex_column">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
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
    height: calc(100vh - 80px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
