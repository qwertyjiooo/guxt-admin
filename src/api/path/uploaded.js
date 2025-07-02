import {post, get} from '../serve'

const API = {
    uploadedUser: 'uploads/images/'
}

const uploadedUser = data => post(API.uploadedUser, data)

export const uploadedApi = {
    uploadedUser,
}