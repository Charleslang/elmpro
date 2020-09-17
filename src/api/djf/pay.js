import {request} from './request'

export function pay() {
  return request({
    url: '/pay/topay'
  })
}