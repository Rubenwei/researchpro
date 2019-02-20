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

//评估结果信息
// export function getAssess() {
//   const url = 'api/assessinfomation?message=' + localStorage.query
//   console.log('AssessInformation:' + url);
//   return axios.get(url).then((res)=>{
//     return res.data
//   })
// }
//代码窗口信息
// export function getCodeInformation() {
//   const  url = 'api/codeinformation' + localStorage.query
//   console.log('CodeInformation:' + url);
//   return axios.get(url).then((res)=>{
//     return res.data
//   })
// }

