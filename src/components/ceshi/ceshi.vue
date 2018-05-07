<style scoped>


</style>
<template>
    <div>
<my-comment :comment="comment"  @setComment="setComment">

</my-comment>
    </div>
</template>
<script>
  import myComment from '../ydt_comment/index'
    export default {
        data() {
            return {
              comment:[],
              type:2,//1:动态2:会议资讯  3:会议直播 4:资源 5:会议
              infoId:'304',//资讯id
              uid:'',//会议id

            }
        },
        props: {},
        mounted() {
          this.getDetails()
          let user={"uFirstPy":null,"uLastPy":null,"uName":"孟木木木","uEmail":null,"uPhone":null,"uPwd":null,"uLanguage":null,"uRealname":"0","uId":261849,"uType":"6","uStatus":"0","uSalt":null,"uOrg":null,"uGender":"1","uDept":null,"uPosition":null,"uTitle":null,"uAddr":null,"uIcon":"http://wx.qlogo.cn/mmopen/PiajxSqBRaEJG94McWXFibkZicGYSicQc34GMoOwMRpOJqjFsQZNJKqibtE3tiaZFdxE7t8WfsXA5WAgmEKAT4mDWoiaA/0","uEntid":null,"uOrder":0,"uProvince":"北京","uCountry":"中国","uPostcode":null,"uCity":"朝阳","uDesc":null,"uPLevel":"0","uImei":null,"uKey":null,"uArea":null,"uSchool":null,"uFirstDept":null,"uWechat":"oC-ZbxA89C8lJwGTNT4vOApM6wCo","uSign":null,"uLevel":"1","uGrade":"1","uLng":null,"uLat":null,"uCreateDt":null,"uLoginDt":null,"uFollowNum":0,"uFansNum":0,"uSrc":null,"uDevice":null,"uGeoFl":null,"uNoticeFl":"1","uQrcode":null,"uSkill":null,"uResearch":null,"uConfNum":0,"uResourceNum":0,"uPy":null,"uPyInitial":null,"uEntOrgid":null,"uEntClass":null,"uTelCountry":null,"uAreacode":null,"uTel":null,"uCid":null,"uNation":null,"uCardType":null,"uCardNo":null,"uMobileCountry":null,"uMobileArea":null,"uMobile":null,"uArtiNum":0,"uOrgEn":null,"uDeptEn":null,"uTitleEn":null,"uDescEn":null,"uDeptName":null,"uFirstDeptName":null,"uIconOrig":null}
          this.uid=user.uId;
        },
        methods: {
          getDetails(){
            let param={
              'info_id':304,
            };
            axios.post('/medapp/api/con/info/get',param ).then((result) => {
              let data=result.data;
              console.log(data);
              if(result.data.code==0){
                setTimeout(()=>{
                  this.infoDate=new Date(data.info.infoDt).Format('yyyy年MM月dd日');
                  this.infoDate=new Date(data.info.infoDt).Format('yyyy年MM月dd日');

                  this.infoDetail=data.info;
                  this.comment=data.comments;
                  console.log(JSON.stringify(this.comment))
                  if(this.infoDetail.infoTitle!=''&&this.infoDetail.infoTitle!=''){
                    document.title=this.infoDetail.infoTitle;
                  }else{
                    document.title='资讯详情';
                  }

//                  weiXinShare2(title, desc, share_img, curUrl)
//                      var share_img=sessionStorage.getItem('info_icon');
                  const img = this.infoDetail.infoIcon;
                  const title=this.infoDetail.infoTitle;
                  const desc=this.infoDetail.infoSummary;
                  const curUrl = location.href;

                  this.$wxFn.share(title,desc,img,curUrl);
                  this.wShow=false;
                },1000)
              }
            })
          },

          setComment(obj){
            let param={
              'uid':this.uid,
              'type':this.type,
              'relid':this.infoId,
              'content':obj.content,
              'replyid':obj.replyid,
              'replyuid':obj.replyuid,

            }
            for(let key in param){
              if(param[key]==null){
                delete param[key]
              }
            }
            axios.post('/medapp/api/common/comment/add',param ).then((result) => {
              if(result.data.code==0){

                if(obj.restatus==0){
                  console.log(result.data.comment)
                  this.comment.unshift(result.data.comment)
                }else if(obj.restatus==1){
                  if( this.comment[obj.replyindex].replys==null){
                    this.comment[obj.replyindex].replys=[];
                  }
                  this.comment[obj.replyindex].replys.unshift(result.data.comment)
                }
//                document.getElementById('in').setAttribute('placeholder','')
//                this.content='';
////            alert(this.content)
//                this.replyid=null;
//                this.replyuid=null;
//                this.restatus=0
//                this.speakShow=false
//                this.bottombar=true



              }
            })
          },
          dataChange(data){
            alert(1)

          }


        },
        computed: {},
      components:{
        myComment
      }

    }
</script>
