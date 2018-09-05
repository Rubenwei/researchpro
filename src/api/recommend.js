import jsonp from '../common/js/jsonp'
import {commonParams, options} from "./config";

import axios from 'axios'

//该科技事件
export function getItem() {
  const url = 'api/getinfodata?message=' + localStorage.query
  console.log(url)
  return axios.get(url).then((res)=>{
    return res.data
  })
}

//----------------------------------------------------------------------------------
//音乐推荐
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return res.data
  })

}
