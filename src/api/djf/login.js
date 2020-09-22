import {request} from './request'
import qs from 'qs'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data: qs.stringify({
      userName: username,
      password: password
    })
  })
}

export function testToken() {
  return request({
    url: '/user/test',
    method: 'post',
    headers: {}
  })
}