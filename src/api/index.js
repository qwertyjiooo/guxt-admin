import {loginApi} from '@/api/path/account.js'
import {uploadedApi} from '@/api/path/uploaded.js'
import {caseApi} from "@/api/path/case.js";


export const api = {
    ...loginApi,
    ...uploadedApi,
    ...caseApi
}