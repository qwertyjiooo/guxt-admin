<template>
    <div class="flex_column" style="flex: 1; overflow: auto;">
        <el-table :data="tableData" style="">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script setup name="useProTable">
const tableData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518, Jinshajiang Road, Putuo District',
    },
]
</script>

<style lang="less" scoped></style>
