<template>
  <div class="home">
    首页
    <!-- {{ level }},
    {{ chargingTime }},
    {{ dischargingTime }},
    {{ charging }} -->
  </div>
</template>

<script setup>
// import { useBattery } from '@vueuse/core'
// const { charging, chargingTime, dischargingTime, level } = useBattery()
import axios from 'axios'
// axios.get('http://192.168.1.28:4000/api/user/json').then(res => {
//   console.log(res)
// })
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
