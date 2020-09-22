import {request} from './request'

// 通过 token 获取用户信息
export function getUserInfo() {
  return request({
    url: '/user/get',
    method: 'post',
    headers: {}
  })
}

// 退出登录
export function logout() {
  return request({
    url: '/user/logout',
    method: 'get',
    headers: {}
  })
}