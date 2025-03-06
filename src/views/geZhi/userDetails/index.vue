<template>
  <div class="userDetails flex_column">
    <!-- 搜索 -->
    <div class="Search content content_box_shadow flex_center_y">
      <span class="flex_center_y">用户信息：<el-input placeholder="请输入内容" v-model="input" class="input-with-select"></el-input></span>
      <span class="flex_center_y">用户信息：<el-input placeholder="请输入内容" v-model="input" class="input-with-select"></el-input></span>
      <span class="flex_center_y">用户信息：<el-input placeholder="请输入内容" v-model="input" class="input-with-select"></el-input></span>
      <span class="flex_center_y">用户信息：<el-input placeholder="请输入内容" v-model="input" class="input-with-select"></el-input></span>
    </div>
    <div class="content content_box_shadow">
      <el-tabs v-model="tabActive" class="demo-tabs">
        <el-tab-pane v-for="item in tabsList" :key="item.value" :label="item.label" :name="item.label"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup name="geZhiUserDetails">

const tabsList = [
  {
    label: '全部用户',
    value: 'basicInfo'
  },
  {
    label: '普通用户',
    value: 'certificationInfo'
  },
  {
    label: '认证用户',
    value: 'certificationRecord'
  },
  {
    label: '封禁用户',
    value: 'operationRecord'
  },
  {
    label: '异常用户',
    value: 'operationRecord'
  }
];
const tabActive = ref('全部用户');

</script>

<style lang="scss" scoped>
.userDetails {
  flex: 1;
  gap: 10px;
  .Search {
    flex: none;
    height: 100px;
    width: 100%;
  }
}
</style>
