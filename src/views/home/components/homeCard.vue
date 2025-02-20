<template>
    <div :style="{ background: cardData.background }"
        class="card h-full flex flex-col justify-between rounded-[4px] p-[20px] cursor-pointer">
        <div :style="{ color: cardData.color }" class="flex items-center text-[16px]">
            <img class="w-[32px] h-[32px]" :src="cardData.icon" alt="">
            <span class="ml-[10px]">{{ cardData.title }}</span>
            <span class="ml-[auto]">{{ cardData.count }}</span>
        </div>
        <div :style="{ color: cardData.color }" class="flex items-center text-[16px] mt-[10px]">
            <span>{{ cardData.allTitle }}</span>
            <span class="ml-[auto]">{{ cardData.allCount }}</span>
        </div>
    </div>
</template>

<script setup>
// 引入 props
// import { defineProps } from 'vue'

// 定义 props
const props = defineProps({
    cardData: {
        type: Object,
        default: () => ({
            id: 1,
            title: '今日新增用户',
            count: 100,
            color: 'red',
            icon: '@/assets/img/geZhiLogo.png',
            background: '#64d572',
            allTitle: '总用户数',
            allCount: 1000
        })
    }
})

</script>

<style lang="less" scoped>
.card {
    transition: box-shadow 0.3s ease;
    overflow: visible;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    position: relative;
}
</style>
