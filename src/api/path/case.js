import {post} from '../serve'

const API = {
    caseList: 'case/featured/',
    addCase: 'case/add_case/',
    updateCase: 'case/update_case/',
}

const caseList = data => post(API.caseList, data)
const addCase = data => post(API.addCase, data)
const updateCase = data => post(API.updateCase, data)

export const caseApi = {
    caseList,
    addCase,
    updateCase
}