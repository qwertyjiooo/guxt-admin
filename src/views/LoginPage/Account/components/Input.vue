<template>
  <div :class="{ 'npt': true, 'default': true  , 'large': true }">
    <span>
        {{ label }}
    </span>
    <input type="text" :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)"/>
    <span>
        
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    value: { // 输入框的值
        type: String,
        default: ''
    },
    placeholder: { // 输入框的占位符
        type: String,
        default: ''
    },
    label: { // 输入框的标签
        type: String,
        default: ''
    },
    type: { // 输入框的类型
        type: String,
        default: 'text'
    },
    size: { // 输入框的大小
        type: String,
        default: 'default'
    },
    suffix: { // 输入框的尾部图标
        type: String,
        default: ''
    }
})

</script>

<style lang="scss" scoped>
.npt {
    width: var(--account_width);
    display: flex;
    border-radius: 5px;
    align-items: center;
    border: 1px solid #ccc;
    justify-content: space-between;
    &> input {
        flex: 1;
        // 去除input默认样式
        border: none;
        outline: none;
        // 设置input框样式
        width: 100%;
        height: 100%;
        padding: 0 10px;
        font-size: 16px;
        color: var(--el-menu-text-color);
        background-color: transparent;
        border-radius: 5px;
    }
}
.large {
    padding: 12px 20px;
    font-size: 16px;
    &> input {
        font-size: 16px;
    }
}
.default {
    padding: 10px 15px;
    font-size: 14px;
    &> input {
        font-size: 14px;
    }
}
.small {
    padding: 8px 10px;
    font-size: 12px;
    &> input {
        font-size: 12px;
    }
}
</style>
