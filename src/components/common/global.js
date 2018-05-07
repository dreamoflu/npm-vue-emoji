/**
 * Created by ms on 2017/7/13.
 */


let SOCKETPORT
let url=window.location.href


// if(url.includes('www.medcircle.cn')){
//   SOCKETPORT = '//101.200.234.55:3001/';//生产端口
// }else {
//   SOCKETPORT = '//101.200.234.55:3002/';//测试端口
// }

if(url.includes('www.medcircle.cn')){
  SOCKETPORT = '//101.200.192.127:3001/';//生产环境
}else {
  SOCKETPORT = '//101.200.192.127:3002/';//测试环境
}

export default {
  SOCKETPORT
}
