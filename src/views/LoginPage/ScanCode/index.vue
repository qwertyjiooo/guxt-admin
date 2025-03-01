<template>
    <div class="scan_code flex_column_center">
        <span class="scan_code_title">扫描二维码登录</span>
        <span class="scan_code_img">
            <img src="@/assets/img/erweima.png" alt="">
        </span>
        <span class="scan_code_text">
            请使用 <el-link type="primary">xxAPP</el-link> 扫码登录或扫码下载 APP
        </span>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.scan_code {
    width: 170px;
    .scan_code_title {
        height: 45px;
        font-size: 18px;
        color: var(--el-menu-text-color);
    }
    .scan_code_img {
        padding: 5px;
        border-radius: 10px;
        border: 1px solid #ccc;
    }
    .scan_code_text {
        margin-top: 18px;
        font-size: 13px;
        color: var(--el-menu-text-color);
        padding: 0 10px;
    }
}
</style>
