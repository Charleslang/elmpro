import {request} from './request'

export function register(user) {
  return request({
    url: '/user/register',
    method: 'post',
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    },
    data: JSON.stringify(user)
  })
}