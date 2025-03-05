<template>
    <div class="content content_box_shadow no_select draggable">
        <span v-for="item in List" :key="item.id" class="item" :style="{ backgroundColor: item.color,color: '#fff'}">
            {{ item.name }}
        </span>
    </div>
</template>

<script setup name="Draggable">
import Sortable from 'sortablejs'

const List = [
    // 加入随机颜色
    { id: 1, name: 'item1', color: '#87bba2' },
    { id: 2, name: 'item2', color: '#ff9b54' },
    { id: 3, name: 'item3', color: '#73628a' },
    { id: 4, name: 'item4', color: '#76c893' },
    { id: 5, name: 'item5', color: '#619b8a' },
    { id: 6, name: 'item6', color: '#55828b' },
    { id: 7, name: 'item7', color: '#427aa1' },
    { id: 8, name: 'item8', color: '#38a3a5' },
    { id: 9, name: 'item9', color: '#fcca46' },
]

onMounted(() => {
    const el = document.querySelector('.draggable')
    new Sortable(el, {
        animation: 150,
        // 拖拽结束后的回调函数
        onEnd: (evt) => { }
    })
})
</script>

<style lang="scss" scoped>
.draggable {
    // 子元素网格布局，三行三列
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
        border-radius: 5px;
        cursor: move;
    }
}
</style>