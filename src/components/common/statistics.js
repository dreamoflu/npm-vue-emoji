/**
 * Created by ms on 2018/1/10.
 */


let getStatistic=function (type,url,cid,parameter) {
    let position=JSON.parse(sessionStorage.getItem('pos'))
    let param
   if(type==1){
     param = {
        uid: localStorage.getItem('uid'),
        fingerprint:localStorage.getItem('fingerprint'),
        cid:cid,
        type:type,
        // username: Math.random().toString(16).slice(2),
        location:position==null?null:position.address,
        lng:position==null?null:position.lng,
        lat:position==null?null:position.lat,
        url:location.href,
        ul_agent:navigator.userAgent,
        parameter:parameter
        
    }
   }else if(type==2){
     param = {
        uid: localStorage.getItem('uid'),
        fingerprint:localStorage.getItem('fingerprint'),
       
        type:type,
        // username: Math.random().toString(16).slice(2),
        location:position==null?null:position.address,
        lng:position==null?null:position.lng,
        lat:position==null?null:position.lat,
        url:location.href,
        ul_agent:navigator.userAgent,
        parameter:{
            shareUlr:url
        }
   }
   
    
   }

  axios.post('/medapp/api/common/user/log',param ).then((result) => {
    if(result.data.code==0){

      // this.uid=result.data.user.uId
    
    }
  })

}
export default getStatistic
