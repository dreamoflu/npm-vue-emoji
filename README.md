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
  <vue-ydt-comment :comment="comment"  @setComment="setComment"></vue-ydt-comment>
```
