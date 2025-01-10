<template>
    <!-- 扫码登录 -->
    <div class="scan-container">
        <div class="title">打开格致APP</div>
        <div class="desc">在 [我的页面] 右上角打开扫一扫</div>
        <div class="qrcode">
            <!-- 二维码 -->
            <img class="qrcode-img" src="@/assets/img/erweima.png" alt="qrcode">
            <!-- 扫描成功 -->
            <div class="success-img" v-show="false">
                <img src="@/assets/img/Check.png" alt="scan_success">
                <div class="success-text">扫描成功</div>
                <div style="font-size: 12px; color: #373A40; margin-top: 12px;">请在手机端 [确认登录]</div>
            </div>
            <div class="success-img" style="cursor: pointer;" v-show="false">
                <img src="@/assets/img/Refresh.png" alt="scan_success">
                <!-- <div class="success-text">扫描成功</div> -->
                <div style="font-size: 12px; color: #373A40; margin-top: 12px;">二维码已过期，请刷新</div>
            </div>
        </div>
        <a class="login-btn" href="http://www.gezhipro.com/home">下载格致APP</a>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.scan-container {
    // flex: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #f5f5f5;

    .title {
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
    }

    .desc {
        font-size: 14px;
        color: #373A40;
        padding: 8px 0 24px 0;
    }

    .qrcode {
        width: 140px;
        height: 140px;
        border: 1px solid #ccc;
        border-radius: 5px;
        position: relative;

        .qrcode-img {
            width: 100%;
            height: 100%;
        }

        .success-img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            position: absolute;
            top: 0;
            background-color: rgba(255, 255, 255, 0.9);
            box-sizing: border-box;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 40%;
            }
        }
    }

    .login-btn {
        margin-top: 24px;
        border: 1px solid #ccc;
        padding: 8px 8px;
        border-radius: 15px;
        cursor: pointer;
        color: #373A40;
        font-size: 14px;
        box-sizing: border-box;
        // 去除a标签默认的下划线
        text-decoration: none;
    }
}
</style>
