<template>
    <div class="main-container">
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
    height: 100%;
    overflow: hidden;
    background-color: var(--main-background);
}

/* 1. 经典淡入淡出 */
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

/* 2. 滑动渐变 */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.2s ease;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(50px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-50px);
}

/* 3. 优雅缩放 */
.scale-fade-enter-active,
.scale-fade-leave-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
}

.scale-fade-enter-from {
    opacity: 0;
    transform: scale(0.95);
}

.scale-fade-leave-to {
    opacity: 0;
    transform: scale(1.05);
}

/* 4. 3D翻转效果 */
.flip-enter-active,
.flip-leave-active {
    transition: all 0.8s ease;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    backface-visibility: hidden;
}

.flip-enter-from {
    opacity: 0;
    transform: rotateY(180deg);
}

.flip-leave-to {
    opacity: 0;
    transform: rotateY(-180deg);
}

/* 5. 渐变滑入 */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

/* 6. 弹性缩放 */
.bounce-enter-active {
    animation: bounce-in 0.8s ease-in;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
}

.bounce-leave-active {
    animation: bounce-in 0.8s ease-in reverse;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
}

@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.1);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
