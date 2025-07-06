<template>
    <el-image
        :src="src"
        style="width: 50px; height: 50px;"
        :preview-src-list="[src]"
        :preview-zoom-rate="1.2"
        :preview-infinite="true"
        :preview-teleported="true"
        alt=""
    />
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true
    }
});
</script>
