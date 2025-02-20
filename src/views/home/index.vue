<template>
  <div class="home flex flex-col">
    <div class="flex items-center justify-between h-[150px]">
      <HomeCard v-for="item in cardList" :key="item.id" :cardData="item" class="w-[24%]" />
    </div>
    <div class="flex-1 flex justify-between pt-[20px]">
      <div class="w-[74.7%] flex flex-col justify-between">
        <div class="h-[40%] flex justify-between">
          <div class="w-[32.3%] h-[100%] bg-[#999] text-[#fff] rounded-[10px] p-[20px]">111</div>
          <div class="w-[32.3%] h-[100%] bg-[#999] text-[#fff] rounded-[10px] p-[20px]">222</div>
          <div class="w-[32.3%] h-[100%] bg-[#999] text-[#fff] rounded-[10px] p-[20px]">333</div>
        </div>
        <div class="h-[58%] bg-[#999] text-[#fff] rounded-[10px] p-[20px]">444</div>
      </div>
      <div class="w-[24%] flex flex-col justify-between">
        <div class="h-[49%] bg-[#999] text-[#fff] rounded-[10px] p-[20px]">555</div>
        <div class="h-[49%] bg-[#999] text-[#fff] rounded-[10px] p-[20px]">666</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeCard from './components/homeCard.vue';
import { cardList } from './data';
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
