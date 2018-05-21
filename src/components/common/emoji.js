import data from '@/components/common/data/emoji-data.js';
import  {chName} from '@/components/common/data/changeData.js';
let emojiData = {};
Object.values(data).forEach(item => {
  emojiData = { ...emojiData, ...item }
})

/**
 *
 *
 * @export
 * @param {string} value
 * @returns {string}
 */
// 原先的代码
// export function emoji (value) {
//   if (!value) return
//   Object.keys(emojiData).forEach(item => {
//     value = value.replace(new RegExp(item, 'g'), createIcon(item))
//   })
//   return value
// }


// 修改后的代码
export function emoji (value) {
  if (!value) return;
  var newValue = value.split(':');

  for(let i=0;i<newValue.length;i++){
    let newItem = ':'+newValue[i]+':';
    for(let cont of chName){
      for(let key in cont){
        if(newItem == cont[key]){
          newValue.splice(i,1,key)
        }
      }
    }
  }
  value = newValue.join("");
  Object.keys(emojiData).forEach(item => {
    value = value.replace(new RegExp(item, 'g'), createIcon(item));
  });
  return value
}


function createIcon (item) {
  const value = emojiData[item]
  const path = 'http://medcircle.cn/lib/emoji/'
  return `<img src=${path}${value} width="16px" height="16px">`
}
