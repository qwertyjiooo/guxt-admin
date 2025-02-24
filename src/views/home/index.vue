<template>
  <div class="home flex flex-col">
    <div class="flex items-center justify-between h-[120px]">
      <HomeCard v-for="item in cardList" :key="item.id" :cardData="item" class="w-[24%]" />
    </div>
    <div class="flex-1 flex justify-between pt-[20px]">
      <div class="w-[74.7%] flex flex-col justify-between">
        <div class="h-[40%] flex justify-between">
          <div class="shadow_bg_3 w-[32.3%] h-[100%] text-[#fff] rounded-[10px] p-[20px]">
            <div ref="chart1" id="chart1"></div>
          </div>
          <div class="shadow_bg_3 w-[32.3%] h-[100%] text-[#fff] rounded-[10px] p-[20px]">
            <div ref="chart2" id="chart1"></div>
          </div>
          <div class="shadow_bg_3 w-[32.3%] h-[100%] text-[#fff] rounded-[10px] p-[20px]">
            <div ref="chart3" id="chart1"></div>
          </div>
        </div>
        <div class="shadow_bg_3 h-[58%] text-[#fff] rounded-[10px] p-[20px]">
          <div ref="chart4" id="chart1"></div>
        </div>
      </div>
      <div class="w-[24%] flex flex-col justify-between">
        <div class="shadow_bg_3 h-[49%] text-[#fff] rounded-[10px] p-[20px]">
          <div ref="chart5" id="chart1"></div>
        </div>
        <div class="shadow_bg_3 h-[49%] text-[#fff] rounded-[10px] p-[20px]">
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
const chart1 = ref(null);
const chart2 = ref(null);
const chart3 = ref(null);
const chart4 = ref(null);
const chart5 = ref(null);
const chart6 = ref(null);
const charta = ref(null);
const chartb = ref(null);
const chartc = ref(null);
const chartd = ref(null);
const charte = ref(null);
const chartf = ref(null);

const init = () => {
  charta.value = markRaw(echarts.init(chart1.value));
  chartb.value = markRaw(echarts.init(chart2.value));
  chartc.value = markRaw(echarts.init(chart3.value));
  chartd.value = markRaw(echarts.init(chart4.value));
  charte.value = markRaw(echarts.init(chart5.value));
  chartf.value = markRaw(echarts.init(chart6.value));
  charta.value.setOption(option.option1);
  chartb.value.setOption(option.option1)
  chartc.value.setOption(option.option1)
  chartd.value.setOption(option.option3)
  charte.value.setOption(option.option2)
  chartf.value.setOption(option.option2)
  window.addEventListener("resize", () => {
    charta.value.resize();
    chartb.value.resize();
    chartc.value.resize();
    chartd.value.resize();
    charte.value.resize();
    chartf.value.resize();
  });
}
onMounted(() => {
  init();
});
onUnmounted(() => {
  // 卸载echarts实例
  charta.value.dispose();
  chartb.value.dispose();
  chartc.value.dispose();
  chartd.value.dispose();
  charte.value.dispose();
  chartf.value.dispose();
  window.removeEventListener("resize", charta.value);
  window.removeEventListener("resize", chartb.value);
  window.removeEventListener("resize", chartc.value);
  window.removeEventListener("resize", chartd.value);
  window.removeEventListener("resize", charte.value);
  window.removeEventListener("resize", chartf.value);
});
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
