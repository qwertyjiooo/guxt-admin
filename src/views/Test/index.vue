<template>
  <div class="flex_column content content_box_shadow">
    <div>测试页面适配</div>
    <div class=" flex-1 overflow-hidden flex_column">
      <useProTable :tableData="tableData" :tableColumns="tableColumns"/>
    </div>
    <div class="h-[250px] w-[100%] bg-orange-50">
      测试页面适配
    </div>
  </div>
</template>

<script setup>
import useProTable from '@/components/useProTable/index.vue'
import { ref } from 'vue'
const tableColumns = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  }, {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  }, {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  },
  {
    date: '2016-05-03',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  }, {
    date: '2016-05-04',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  },
  {
    date: '2016-05-01',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  },
  {
    date: '2016-05-03',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  }, {
    date: '2016-05-04',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  },
  {
    date: '2016-05-01',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  },
  {
    date: '2016-05-03',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',

  }, {
    date: '2016-05-04',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  }, {
    date: '2016-05-04',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  }, {
    date: '2016-05-04',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith', address: 'No.1518, 1 Road, 2 District',
  },
];
const tableData = [];
</script>

<style lang="less" scoped></style>
