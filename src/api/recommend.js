import jsonp from '../common/js/jsonp'
import {commonParams, options} from "./config";

import axios from 'axios'

//科技事件 名称 国家 发明人 简介 等级
export function getItem() {
  const url = 'api/getinfodata?message=' + localStorage.query
  console.log('intro:' + url)
  return axios.get(url).then((res)=>{
    console.log(res)
    return res.data
  })
}

//科技事件 图片url，视频url
export function getResource() {
  const url = 'api/resource?message=' + localStorage.query
  console.log('resource:' + url)
  return axios.get(url).then((res) =>{
     return res.data
  })
}


