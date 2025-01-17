<template>
  <div class="container">
    <logo />
    <menu-list />
    <colorPicker class="colorPicker" />
  </div>
</template>

<script setup>
import logo from "./components/logo.vue";
import menuList from "./components/menuList.vue";
import colorPicker from "./components/colorPicker.vue";
</script>

<style lang="less" scoped>
.container {
    position: relative;
    .colorPicker {
        position: absolute;
        bottom: 0;
        // right: 50%;
    }
}
</style>
