import request from '@/utils/request'
import qs from 'qs'

export function login(formData) {
  return request({
    url: '/login',
    method: 'post',
    data: qs.stringify(formData)
  })
}

export function getInfo(userToken) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { userToken }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
