<template>
    <div class="flex_column content content_box_shadow gap-6 py-6" v-loading="loading">
        <!-- 搜索与操作 -->
        <div class="flex gap-6">
            <el-input v-model="form.name" placeholder="请输入名称" style="width: 300px"/>
            <span>是否精选：<el-switch v-model="form.is_featured"/></span>
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button type="primary" @click="init">重置</el-button>
            <el-button type="primary" style="margin-left: auto" @click="openDialog()">新增</el-button>
        </div>

        <!-- 表格 -->
        <div class="flex_column flex-1 overflow-auto">
            <el-table :data="getTableList.results" border style="flex:1;width:100%">
                <el-table-column fixed type="index" width="50" align="center"/>
                <el-table-column fixed prop="name" label="姓名" width="200" align="center"/>
                <el-table-column prop="content" label="内容" align="center"/>
                <el-table-column prop="image" label="图片" width="200" align="center">
                    <template #default="scope">
                        <ImageViewer :src="scope.row.image"/>
                    </template>
                </el-table-column>
                <el-table-column prop="read_count" label="阅读量" width="120" align="center"/>
                <el-table-column label="排序" width="210" align="center">
                    <template #default="scope">
                        <span v-if="scope.row.is_featured">{{ scope.row.order }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="是否精选" width="100" align="center">
                    <template #default="scope">
                        <span :class="['text-gray-500', { 'text-pc': scope.row.is_featured }]">
                          {{ scope.row.is_featured ? '已精选' : '未精选' }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间" width="180" align="center"/>
                <el-table-column fixed="right" label="操作" width="200" align="center">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="openDialog(scope.row)">编辑</el-button>
                        <el-button type="danger" size="small" @click="deleteData(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 分页 -->
        <div class="flex_center mt-[10px]">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="getTableList.count || 0"
                @current-change="fetchData"
                v-model:current-page="form.page"
                v-model:page-size="form.page_size"
            />
        </div>

        <!-- 弹窗 -->
        <el-dialog :title="isEditMode ? '修改信息' : '新增信息'" v-model="dialogVisible" width="600px">
            <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="formData.name" placeholder="请输入名称"/>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <el-input v-model="formData.content" type="textarea" :rows="4" placeholder="请输入内容"/>
                </el-form-item>
                <el-form-item label="图片" prop="image">
                    <ImageUpload v-model="formData.image" @success="handleUploadSuccess"/>
                </el-form-item>
                <el-form-item label="是否精选">
                    <el-switch v-model="formData.is_featured"/>
                </el-form-item>
                <el-form-item label="排序" prop="order" v-if="formData.is_featured">
                    <el-input v-model.number="formData.order" style="width:100px"/>
                </el-form-item>
                <el-form-item>
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="submitForm">确定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {api} from '@/api/index.js'
import {ElMessage} from 'element-plus'
import {ImageUpload, ImageViewer} from '@/components/index.js'

// 数据状态
const loading = ref(false)
const dialogVisible = ref(false)
const isEditMode = ref(false)
const getTableList = ref({})
const form = ref({
    name: undefined,
    is_featured: false,
    page: 1,
    page_size: 10,
})
const formData = ref({
    id: undefined,
    name: '',
    content: '',
    image: '',
    is_featured: false,
    order: undefined,
})
const formRef = ref()
const rules = {
    name: [
        {required: true, message: '请输入名称', trigger: 'blur'},
        {min: 2, max: 50, message: '长度在2~50字符之间', trigger: 'blur'}
    ],
    image: [{required: true, message: '请上传图片', trigger: 'change'}],
    content: [
        {required: true, message: '请输入内容', trigger: 'blur'},
        {min: 2, max: 50, message: '长度在2~50字符之间', trigger: 'blur'}
    ]
}

// 获取数据
const fetchData = () => {
    loading.value = true
    api.constructList(form.value).then(res => {
        getTableList.value = res.data
        loading.value = false
    })
}

// 搜索/重置
const search = () => {
    form.value.page = 1
    fetchData()
}
const init = () => {
    form.value = {
        name: undefined,
        is_featured: false,
        page: 1,
        page_size: 10
    }
    fetchData()
}

// 打开对话框
const openDialog = (row = null) => {
    isEditMode.value = !!row
    if (row) {
        Object.assign(formData.value, row)
    } else {
        formData.value = {
            id: undefined,
            name: '',
            content: '',
            image: '',
            is_featured: false,
            order: undefined
        }
    }
    dialogVisible.value = true
}

// 提交表单
const submitForm = () => {
    formRef.value.validate().then(() => {
        const request = isEditMode.value ? api.constructUpdate(formData.value) : api.constructCreate(formData.value)
        request.then(() => {
            ElMessage.success(isEditMode.value ? '修改成功' : '新增成功')
            fetchData()
            dialogVisible.value = false
        })
    }).catch(() => false)
}

// 删除
const deleteData = async (data) => {
    await api.constructDelete(data.id)
    ElMessage.success('删除成功')
    fetchData()
}

// 文件上传成功回调
const handleUploadSuccess = (res) => {
    formData.value.image = res.data.url
}

onMounted(() => {
    fetchData()
})
</script>