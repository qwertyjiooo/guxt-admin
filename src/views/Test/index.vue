<template>
  <div class="flex_column content content_box_shadow">
    <div>测试页面适配</div>
    <div class=" flex-1 overflow-hidden flex_column">
      <useProTable :tableColumns="tableColumns"/>
    </div>
  </div>
</template>

<script setup name="Test">
import useProTable from '@/components/useProTable/index.vue'
import { ref } from 'vue'
const tableColumns = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
const tableData = [];
</script>

<style lang="less" scoped></style>
