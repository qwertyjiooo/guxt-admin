<template>
    <div class="auth-container">
        <!-- 左侧品牌展示区 -->
        <div class="brand-section">
            <div class="brand-content">
                <h1 class="brand-title">欢迎使用</h1>
                <p class="brand-subtitle">安全可靠的平台</p>
                <div class="animated-logo">
                    <div class="logo-circle"></div>
                    <div class="logo-shield"></div>
                </div>
            </div>
        </div>
        <!-- 右侧登录表单 -->
        <div class="form-section">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.auth-container {
    display: flex;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
    overflow: hidden;
}

.brand-section {
    flex: 1;
    //background: linear-gradient(135deg, #3494e6 0%, #ec6ead 100%);
    background: var(--el-color-primary);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.brand-content {
    text-align: center;
    padding: 2rem;
    z-index: 10;
}

.brand-title {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    animation: fadeInDown 1s ease;
}

.brand-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s both;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 品牌logo动画 */
.animated-logo {
    position: relative;
    width: 160px;
    height: 160px;
    margin: 40px auto 0;
}

.logo-circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    position: absolute;
    top: 0;
    left: 0;
    animation: pulse 3s infinite;
}

.logo-shield {
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    animation: float 4s ease-in-out infinite;
}

.logo-shield::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    //background: linear-gradient(135deg, #3494e6 0%, #ec6ead 100%);
    background: var(--el-color-primary);
    border-radius: 50%;
}

@keyframes pulse {
    0% {
        transform: scale(0.8);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.7;
    }
    100% {
        transform: scale(0.8);
        opacity: 1;
    }
}

@keyframes float {
    0%, 100% {
        transform: translate(-50%, -50%) translateY(0);
    }
    50% {
        transform: translate(-50%, -50%) translateY(-15px);
    }
}
.form-section {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
</style>