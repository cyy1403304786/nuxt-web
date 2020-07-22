import http from './http'

export const commonUrl = '/public'  //公共

export const allAticles = (data) => http(`${commonUrl}/hello`, data, 'GET'); //获取所有文章