<template>
    <div class="not-found-container">
        <div class="not-found-content">
            <h1 class="not-found-title">404</h1>
            <p class="not-found-message">哎呀！您访问的页面不存在！</p>
            <el-button type="primary" size="large" @click="goBack" class="not-found-link">返回上一页</el-button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
    router.back();
}
</script>

<style lang="scss" scoped>
.not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.not-found-content {
    text-align: center;
    border-radius: 15px;
    padding: 40px 60px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.not-found-title {
    font-size: 6rem;
    font-weight: 700;
    color: var(--el-color-primary);
    margin-bottom: 20px;
    animation: bounce 1s infinite alternate;
    /* 动画效果 */
}

.not-found-message {
    font-size: 1.2rem;
    // color: #555;
    color: var(--el-color-primary);
    margin-bottom: 30px;
}

.not-found-link {
    border-radius: 30px;
}

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