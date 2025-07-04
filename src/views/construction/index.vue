<template>
    <!--知识列表管理-->
    <div class="flex_column content content_box_shadow gap-6 py-6" v-loading="loading">
        <!-- 搜索和新增区域 -->
        <div class="flex gap-6">
            <el-input v-model="form.name" placeholder="请输入名称" style="width: 300px"/>
            <span>
                是否精选：
                <el-switch v-model="form.is_featured" label-width="100px" label="是否精选"/>
            </span>
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button type="primary" @click="init">重置</el-button>
            <el-button type="primary" style="margin-left: auto;" @click="openDialog(null)">新增</el-button>
        </div>
        <!-- 表格区域 -->
        <div class="flex_column flex-1 overflow-auto">
            <el-table :data="getTableList.results" border style="width: 100%;box-sizing: border-box;flex: 1;">
                <el-table-column fixed type="index" width="50" align="center"/>
                <el-table-column fixed prop="name" label="姓名" width="200" align="center"/>
                <el-table-column prop="content" label="内容" align="center"/>
                <el-table-column prop="image" label="图片" width="200" align="center">
                    <template #default="scope">
                        <el-image
                            :src="scope.row.image"
                            style="width: 50px; height: 50px;"
                            :preview-src-list="[scope.row.image]"
                            :preview-zoom-rate="1.2"
                            :preview-infinite="true"
                            :preview-teleported="true"
                            alt=""/>
                    </template>
                </el-table-column>
                <el-table-column prop="area" label="面积" width="120" align="center"/>
                <el-table-column label="排序" width="210" align="center">
                    <template #default="scope">
                        <span v-if="scope.row.is_featured" style="width: 100px">{{ scope.row.order }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="is_featured" label="是否精选" width="100" align="center">
                    <template #default="scope">
                        <!--已加精（主题色）| 未加精（灰色）-->
                        <span v-if="scope.row.is_featured" class="text-pc">已加精</span>
                        <span v-else class="text-gray-500">未加精</span>
                    </template>
                </el-table-column>
                <el-table-column prop="create_time" label="创建时间" width="180" align="center"/>
                <el-table-column fixed="right" label="操作" width="200" align="center">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="openDialog(scope.row)"> 编辑</el-button>
                        <el-button type="danger" size="small" @click="deleteData(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 分页区域 -->
        <div class="flex_center mt-[10px]">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="getTableList.count"
                @current-change="fetchData"
                v-model:current-page="form.page"
                v-model:page-size="form.page_size"
            />
        </div>
        <!-- 对话框区域 -->
        <el-dialog :title="isEditMode ? '修改信息': '新增信息'" v-model="dialogVisible" width="600px">
            <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="formData.name" placeholder="请输入名称"/>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <el-input v-model="formData.content" type="textarea" :rows="4" placeholder="请输入内容"/>
                </el-form-item>
                <el-form-item label="图片" prop="image">
                    <el-upload
                        action="/api/uploads/images/"
                        list-type="picture-card"
                        :on-success="handleUploadSuccess"
                        :headers="{ Authorization: `Bearer ${userToken}` }"
                        :show-file-list="false"
                        name="images"
                    >
                        <img v-if="formData.image" :src="formData.image" class="w-full h-full" alt=""/>
                        <el-icon v-else>
                            <Plus/>
                        </el-icon>
                    </el-upload>
                </el-form-item>
                <el-form-item label="面积" prop="area">
                    <el-input v-model="formData.area" placeholder="请输入面积"/>
                </el-form-item>
                <el-form-item label="是否精选">
                    <el-switch v-model="formData.is_featured"/>
                </el-form-item>
                <el-form-item label="排序" prop="order" v-if="formData.is_featured">
                    <el-input v-model.number="formData.order" style="width: 100px"/>
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
import {ref, onMounted} from 'vue';
import utils from '@/utils/util.strotage.js';
import {Plus} from "@element-plus/icons-vue";
import {api} from "@/api/index.js";
import {ElMessage} from "element-plus";

// 获取token
const token = utils.get('token');
const userToken = token ? JSON.parse(token)?.token : null;

// 搜索表单
const form = ref({
    name: '',
    is_featured: false,
    page: 1,
    page_size: 4,
});
const search = () => {
    form.value.page = 1;
    fetchData();
};
// 对话框显示状态
const dialogVisible = ref(false);
// 表单数据
const formData = ref({
    id: undefined,
    name: '',
    content: '',
    image: '',
    area: '',
    is_featured: false,
    order: undefined,
});
// 是否为编辑模式
const isEditMode = ref(false);
// 表单引用
const formRef = ref();
// 表单验证规则
const rules = ref({
    name: [
        {required: true, message: '请输入名称', trigger: 'blur'},
        {min: 2, max: 50, message: '名称长度在2到50个字符', trigger: 'blur'},
    ],
    image: [
        {required: true, message: '请上传图片', trigger: 'change'},
    ],
    area: [
        {required: true, message: '请输入面积', trigger: 'blur'},
        {min: 2, max: 50, message: '面积长度在2到50个字符', trigger: 'blur'},
    ],
});

// 打开对话框
const openDialog = (data = null) => {
    if (data) {
        formData.value = {...data};
        isEditMode.value = true;
    } else {
        formData.value = {
            id: undefined,
            name: '',
            content: '',
            image: '',
            area: '',
            is_featured: false,
            order: undefined,
        };
        isEditMode.value = false;
    }
    dialogVisible.value = true;
};

// 表格数据
const getTableList = ref({});
// 加载中
const loading = ref(false);
// 获取数据
const fetchData = () => {
    loading.value = true;
    api.caseList(form.value).then(res => {
        loading.value = false;
        getTableList.value = res.data;
    }).catch(err => {
        loading.value = false;
        ElMessage.error(err.message);
    })
};

// 重置
const init = () => {
    form.value.name = '';
    form.value.is_featured = false;
    fetchData();
}

// 上传图片成功处理
const handleUploadSuccess = (res) => {
    formData.value.image = res.data.url;
};

// 提交表单
const submitForm = () => {
    formRef.value.validate().then(() => {
        const request = isEditMode.value ? api.updateCase(formData.value) : api.addCase(formData.value);
        request.then(() => {
            ElMessage.success(isEditMode.value ? '修改成功' : '新增成功');
            fetchData();
        });
        dialogVisible.value = false;
    }).catch(() => false);
};

// 删除数据
const deleteData = async (data) => {
    await api.deleteCase({id: data.id}).then(() => {
        ElMessage.success('删除成功');
        fetchData();
    });
};

// 页面挂载时获取数据
onMounted(() => {
    fetchData();
});
</script>

<style scoped lang="scss">

</style>