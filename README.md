评论插件使用说明
### 1、下载插件
   ```js
   npm install  vue-ydt-comment --save
   ```
### 2、引入插件
```js
import VueYdtComment from 'vue-ydt-comment'
import  'vue-ydt-comment/dist/comment.min.css'
Vue.use(VueYdtComment)
```
###3、使用说明
```js
   //传入评论的数组和获取全部评论的方法的方法
  <vue-ydt-comment :comment="comment" :loginObj="loginObj"  @setComment="setComment"></vue-ydt-comment>
```
###4、传入字段和方法的说明

```js
//comment 后台获取的评论内容列表
 comment:{
    type:Array,
    default:()=>[]
  },
  //公司有两个登录项目 
  // isCollege  true 跳转到学院登录 false 跳转到公共登录
  // code  isCollege=true 时传入，公司内部定义的不同学院的code值
  loginObj:{
    type:Object,
    default:()=>{
      return {
         isCollege:true,
         code:"winnti"
      }
    
    }
  }


  //setComment 是发表评论的方法 可以接收到一个obj的参数 此处调用后台接口
setComment(obj) {
  obj={
    'content':'', //你输入的评论内容
    'replyid':'', //回复的评论id
    'replyuid':'', //回复的评论用户id
    'restatus':'', //0为自己发表的评论 1回复其他人的评论
    'replyindex':'' //回复评论的下标
    ]
},
//调用接口成功后做如下处理
  if (obj.restatus == 0) {
      this.comment.unshift(data.comment)
     } else {
       if (this.comment[obj.replyindex].replys == null) {
          this.comment[obj.replyindex].replys = []
         };
         this.comment[obj.replyindex].replys.push(data.comment)
    }


```