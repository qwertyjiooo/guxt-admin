<template>
  <div class="content content_box_shadow">
    <el-button type="primary" @click="handleClick">主要按钮</el-button>
  </div>
</template>

<script setup name="Home">
import { post, get } from '@/api/serve'

// const login = data => get('doughnutting/test/', data , { version: 'v2'})
const login = data => post('doughnutting/dou/', data, { version: 'v2'})

const handleClick = () => {
  login({type: 2, page: 2}).then(res => { console.log(res) })
}
// const login = data => post('account/register/', data )
// const login = data => post('account/login/', data )

// const handleClick = () => {
//   login({username: '15938650343', password: '123456'}).then(res => { console.log(res) })
// }
</script>

<style lang="less" scoped></style>
