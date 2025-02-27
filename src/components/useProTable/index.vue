<template>
    <div class="flex_column flex-1 overflow-auto">
        <el-table :data="tableColumns" height="">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script setup>
defineProps({
    tableColumns: { // 表格数据
        type: Array,
        default: () => [],
    },
    tableData: { // 表格数据
        type: Array,
        default: () => [],
    },
})
</script>

<style lang="less" scoped></style>
