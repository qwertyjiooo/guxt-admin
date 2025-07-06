<template>
    <el-upload
        :action="uploadUrl"
        list-type="picture-card"
        :on-success="handleSuccess"
        :headers="headers"
        :show-file-list="showFileList"
        :name="fileName"
    >
        <img v-if="modelValue" :src="modelValue" class="w-full h-full" alt=""/>
        <el-icon v-else>
            <Plus/>
        </el-icon>
    </el-upload>
</template>

<script setup>
import {defineEmits, computed} from 'vue'
import utils from '@/utils/util.strotage.js'
import {Plus} from "@element-plus/icons-vue"; // 引入工具类获取 token

defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    uploadUrl: {
        type: String,
        default: '/api/uploads/images/'
    },
    showFileList: {
        type: Boolean,
        default: false
    },
    fileName: {
        type: String,
        default: 'images'
    }
})

const emit = defineEmits(['update:modelValue', 'success'])

// 自动从本地存储获取 token
const token = utils.getToken()

const headers = computed(() => {
    return {
        Authorization: `Bearer ${token}`
    }
})

const handleSuccess = (res) => {
    emit('success', res)
    if (res.code === 200) {
        emit('update:modelValue', res.data.url)
    }
}
</script>
