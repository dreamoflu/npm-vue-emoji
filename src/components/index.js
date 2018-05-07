import VueYdtComment from './ydt_comment/index'
import { emoji } from '../common/emoji.js'
const components = [VueYdtComment]
const install = function(Vue) {

  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.emoji = emoji;
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {VueYdtComment}
// let  px2rem  = function() {
//   document.addEventListener('DOMContentLoaded', function() {
//     var html = document.documentElement;
//     var windowWidth = html.clientWidth;
//     html.style.fontSize = windowWidth / 7.5 + 'px';
//     // console.log(windowWidth)
//   }, false);
// };
// px2rem();
Date.prototype.Format = function(fmt) { //
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

module.exports.default = module.exports;
