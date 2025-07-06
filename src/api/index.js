import {loginApi} from '@/api/path/account.js'
import {uploadedApi} from '@/api/path/uploaded.js'
import {caseApi} from "@/api/path/case.js";
import {knowledgeApi} from "@/api/path/knowledge.js";


export const api = {
    ...loginApi, // 登录
    ...uploadedApi, // 上传
    ...caseApi, // 案例库
    ...knowledgeApi // 知识库
}