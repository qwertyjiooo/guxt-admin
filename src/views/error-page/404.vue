<template>
    <div class="not-found-container">
        <div class="not-found-content">
            <h1 class="not-found-title">404</h1>
            <p class="not-found-message">哎呀！您访问的页面不存在！</p>
            <button @click="goBack" class="not-found-link">返回上一页</button>
        </div>
    </div>
</template>

<script setup>
// 如果需要任何 JavaScript 功能可以在这里添加
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
    router.back();
}
</script>

<style lang="less" scoped>
.not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1e97f1, #7bc5fd);
    /* 渐变背景 */
    font-family: 'Arial', sans-serif;
}

.not-found-content {
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    /* 背景透明 */
    border-radius: 15px;
    padding: 40px 60px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.not-found-title {
    font-size: 6rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
    animation: bounce 1s infinite alternate;
    /* 动画效果 */
}

.not-found-message {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 30px;
}

.not-found-link {
    // 去除默认的按钮样式
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    padding: 12px 30px;
    background-color: #1e97f1;
    border-radius: 30px;
    transition: background-color 0.3s ease;
}

.not-found-link:hover {
    background-color: #7bc5fd;
}

/* Bouncing animation */
@keyframes bounce {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>