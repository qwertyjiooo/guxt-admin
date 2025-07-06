import {get, post, put, del} from '../serve'

// 处理知识库数据

const Api = {
    construct: 'knowledge/construct/',
}

// 施工知识库
// 列表（支持查询参数）
const constructList = params => get(Api.construct, params);
// 创建
const constructCreate = data => post(Api.construct, data);
// 修改（id 是路径参数）
const constructUpdate = (data) => put(`${Api.construct}${data.id}/`, data);
// 删除（id 是路径参数）
const constructDelete = (id) => del(`${Api.construct}${id}/`);

export const knowledgeApi = {
    constructList,
    constructCreate,
    constructUpdate,
    constructDelete,
}