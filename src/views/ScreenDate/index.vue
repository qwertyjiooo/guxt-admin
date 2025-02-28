<template>
  <div class="home flex flex-col">
    <div class="flex items-center justify-between h-[120px]">
      <HomeCard v-for="item in cardList" :key="item.id" :cardData="item" class="w-[24%]" />
    </div>
    <div class="flex-1 flex justify-between pt-[10px]">
      <div class="w-[74.7%] flex flex-col justify-between">
        <div class="h-[40%] flex justify-between">
          <div class="shadow_bg_3 w-[32.3%] h-[100%] text-[#fff] rounded-[10px] p-[20px] bg-[var(--main-background)]">
            <div ref="chart1" id="chart1" class=""></div>
          </div>
          <div class="shadow_bg_3 w-[32.3%] h-[100%] text-[#fff] rounded-[10px] p-[20px] bg-[var(--main-background)]">
            <div ref="chart2" id="chart1"></div>
          </div>
          <div class="shadow_bg_3 w-[32.3%] h-[100%] text-[#fff] rounded-[10px] p-[20px] bg-[var(--main-background)]">
            <div ref="chart3" id="chart1"></div>
          </div>
        </div>
        <div class="shadow_bg_3 h-[58%] text-[#fff] rounded-[10px] p-[20px] bg-[var(--main-background)]">
          <div ref="chart4" id="chart1"></div>
        </div>
      </div>
      <div class="w-[24%] flex flex-col justify-between">
        <div class="shadow_bg_3 h-[49%] text-[#fff] rounded-[10px] p-[20px] bg-[var(--main-background)]">
          <div ref="chart5" id="chart1"></div>
        </div>
        <div class="shadow_bg_3 h-[49%] text-[#fff] rounded-[10px] p-[20px] bg-[var(--main-background)]">
          <div ref="chart6" id="chart1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, markRaw, onUnmounted } from 'vue';
import HomeCard from './components/homeCard.vue';
import { cardList, option } from './data';
import echarts from '@/libs/echarts';

// 图标的容器
// const chart1 = ref(null);
// const chart2 = ref(null);
// const chart3 = ref(null);
// const chart4 = ref(null);
// const chart5 = ref(null);
// const chart6 = ref(null);
// const chartA = ref(null);
// const chartB = ref(null);
// const chartC = ref(null);
// const chartD = ref(null);
// const chartE = ref(null);
// const chartF = ref(null);

// const init = () => {
//   chartA.value = markRaw(echarts.init(chart1.value));
//   chartB.value = markRaw(echarts.init(chart2.value));
//   chartC.value = markRaw(echarts.init(chart3.value));
//   chartD.value = markRaw(echarts.init(chart4.value));
//   chartE.value = markRaw(echarts.init(chart5.value));
//   chartF.value = markRaw(echarts.init(chart6.value));
//   chartA.value.setOption(option.option1);
//   chartB.value.setOption(option.option1)
//   chartC.value.setOption(option.option1)
//   chartD.value.setOption(option.option3)
//   chartE.value.setOption(option.option2)
//   chartF.value.setOption(option.option2)
//   window.addEventListener("resize", () => {
//     chartA.value.resize();
//     chartB.value.resize();
//     chartC.value.resize();
//     chartD.value.resize();
//     chartE.value.resize();
//     chartF.value.resize();
//   });
// }
// onMounted(() => {
//   init();
// });
// onUnmounted(() => {
//   // 卸载echarts实例
//   chartA.value.dispose();
//   chartB.value.dispose();
//   chartC.value.dispose();
//   chartD.value.dispose();
//   chartE.value.dispose();
//   chartF.value.dispose();
//   window.removeEventListener("resize", chartA.value);
//   window.removeEventListener("resize", chartB.value);
//   window.removeEventListener("resize", chartC.value);
//   window.removeEventListener("resize", chartD.value);
//   window.removeEventListener("resize", chartE.value);
//   window.removeEventListener("resize", chartF.value);
// });
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}

#chart1 {
  width: 100%;
  height: 100%;
}
</style>
