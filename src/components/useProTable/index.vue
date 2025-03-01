<!-- 表格组件 -->
<template>
    <div class="flex_column flex-1 overflow-auto">
        <el-table :data="tableColumns" border style="width: 100%;box-sizing: border-box;">
            <el-table-column fixed prop="date" label="Date" width="100" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="" />
            <el-table-column prop="address" label="Address" width="240" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default>
                    <el-button link type="primary" size="small">
                        Detail
                    </el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
defineProps({
    tableColumns: { // 表格数据
        type: Array,
        default: () => [],
    },
    // tableData: { // 表格数据
    //     type: Array,
    //     default: () => [],
    // },
})
</script>

<style lang="less" scoped></style>
