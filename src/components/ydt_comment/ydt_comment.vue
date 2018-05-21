<style scoped>
  .comment{
    margin-top:0.1rem ;
    background-color: #ffffff;
  }
  .commentlist .title{
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.26rem;
    border-top: 1px solid #e6e6e6;
    /*border-bottom: 1px solid #e6e6e6;*/
    color: #333333;
    font-size: 0.3rem;
  }
  .commentlist .title span{
    color: #c01920;
  }
  .commentlist .all{
    width: 22%;
    font-size: 0.22rem;
    color: #999999;
    text-align: center;
    margin: 0 auto;
    background-color: #ffffff;
    margin-top: -0.18rem;
    font-weight: 300;
  }
  .commentitem{
    /* padding:0.1rem 0rem; */

  }
  .commentitem .wrap{
    padding:0.1rem;
    margin-left: 0.26rem;
    padding-right: 0.26rem;
    border-bottom: 1px solid #e6e6e6;

  }
  .commentitem .top>img{
    width: 0.58rem;
    height:0.58rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.1rem;
    border: 1px solid #e6e6e6;
  }
  .commentitem .top span{
    font-size: 13px;
    color: #333333;
  }
  .commentitem .top .comtime{
    float: right;
    font-size: 11px;
    color: #999999;
  }
  .comtime img{
    /*position: absolute;*/
    width: 0.4rem;
    vertical-align: middle;
    /*height: 1.5rem;*/
  }
  .comcontent{
    padding-left: 0.78rem;
    color: #666666;
    font-size: 12px;
  }
  .hui{
    float: right;
  }
  .bottomcom{
    border-top: 1px solid #e6e6e6;
    /*width: 100%;*/
    height: 1rem;
    padding-left: 0.26rem;
    /*padding: 0 0.26rem;*/
    /*background-color: rgb(239,239,239);*/
    background-color: #ffffff;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #e6e6e6;
  }
  .bottomcom .left{
    font-size: 0.26rem;
    background-color: rgb(239,239,239);
    margin-top: 0.15rem;
    height: 0.7rem;
    line-height: 0.7rem;
    float: left;
    width: 83%;
    color: #999999;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    padding-left: 0.2rem;
  }
  .bottomcom img{
    vertical-align: middle;
    width: 0.58rem;
    margin-top: 0.21rem;
    margin-left: 0.2rem;

  }

  .childcom{

    margin-top: 0.1rem;
    background-color: #f7f7f7;
    margin-left: 0.78rem;
    padding: 0.05rem 0.1rem;
    color: #666666;
    font-size: 12px;
    border-radius: 5px;
  }
  .childcom span{
    color: #016dc8;
    margin-right: 3px;
  }

  .comspeak{


    padding:0 0.26rem;
    padding-bottom: 0.3rem;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*position: fixed;*/
    /*bottom: 0;*/
    z-index: 100;
    border-bottom: 1px solid #e6e6e6;
  }
  .comspeak .ping{
    width: 96%;
    -webkit-appearance: none;

    height: 1.3rem;
    line-height: 1.5;
    display: inline-block;
    /*background-color: #ffffff;*/
    background-color: rgb(239,239,239);
    color: #999999;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    font-size: 12px;
  }
  .comspeak *{
    vertical-align: middle;
  }
  .comspeak img{
    vertical-align: middle;
    width: 0.6rem;
    margin-right: 0.3rem;
  }
  .comspeak>div{
    /*text-align: right;*/
    margin-top: 0.1rem;
  }
  .comspeak button{
    border: 1px #e6e6e6 solid;
    background-color: #ffffff;
    width: 1rem;
    height: 0.5rem;
    border-radius: 5px;
    color: #999999;
    margin-top: 0.1rem;
    margin-right: 0.1rem;
    line-height: 0.5rem;
    float: right;
  }
  .comspeak  .send{
    background-color: #dbdbdb;
    color: #ffffff;
  }
  .comspeak .sendblue{
    background-color: #218aff;
    color: #ffffff;
  }

</style>

<template>
  <div class="comment" id="comment">

    <div class="commentlist">
      <p class="title">评论 （共 <span>{{comment.length}}</span> 条）</p>

      <div @click="bottomclick" v-show="bottombar" class="bottomcom">
        <div class="left">
          发表评论
        </div>
        <img  src="./biao.png" alt=""/>
      </div>

      <div  v-show="speakShow" class="comspeak"  id="comspeak">
        <textarea id="in" v-model="content"  :focus="focus" class="ping"></textarea>
        <div>
          <img src="./biao.png" @click="showEmoji = !showEmoji" alt="">

          <button @click="sendComment" :disabled="content==''" v-bind:class="{sendblue:isactive}"  class="send">发送</button>
          <button @click="cancel" >取消</button>
        </div>

        <div class="icon clearfix">
          <transition name="fade" mode="">
            <div class="emoji-box" v-if="showEmoji" >
              <vue-emoji
                @select="selectEmoji">
              </vue-emoji>
              <span class="pop-arrow arrow"></span>
            </div>
          </transition>
        </div>

      </div>

      <h2 class="all">全部评论</h2>


      <div class="commentitem" v-for="(item,index) in comment" :key="index">
        <div class="wrap">


        <div class="top">
          <img class="icon" :src="item.fromUser.uIcon" alt=""/>
          <span class="name">{{item.fromUser.uName}}</span>
          <span class="comtime">{{new Date(item.comtDt).Format("yyyy-MM-dd hh:mm:ss")}}
              <img @click="reply(item.comtId,item.fromUser.uId,item.fromUser.uName,index)" src="./icon2.jpg" alt=""></span>
        </div>
        <div v-html="emoji(item.comtInfo)" class="comcontent">
          {{item.comtInfo}}
        </div>
        <div class="childcom" v-if="item.replys!==null&&item.replys.length>0">
          <div v-for="(childitem,index2) in item.replys">
            <span>{{childitem.fromUser.uName}}</span>回复 <span>{{childitem.comtReplyUName}}</span>
            <span v-html="emoji(childitem.comtInfo)"> {{childitem.comtInfo}}</span>
          </div>
        </div>
        </div>
      </div>



    </div>




  </div>
</template>
<script>
  import vueEmoji from './emoji.vue'
  export default{
    data(){
      return {
        content:'',
        replyid:null,
        replyuid:null,
        replyindex:null,
        restatus:0,
        speakShow:false,
        scroll:'',
        bottombar:true,
        value: '',
        showEmoji: false,
        data: [],
        dis:false,
        isactive:false,
        focus:false,

      }
    },
    // props: ['comment','isLogin','isCollege','code'],
props:{
  comment:{
    type:Array,
    default:()=>[]
  },
  loginObj:{
    type:Object,
    default:()=>{
      return {
         isCollege:true,
         code:"winnti"
      }

    }
  }
},

//    props: ['comment','uid','crid','type'],
    watch:{
      content(){
        if(this.content==''){
          this.isactive=false
        }else if(this.content!=='') {
          this.isactive=true
        }
      }
    },
    mounted(){



      this.$on('gitReplyComment',()=>{

        document.getElementById('in').setAttribute('placeholder','')
        this.content='';
        this.replyid=null;
        this.replyuid=null;
        this.restatus=0
        this.speakShow=false
        this.bottombar=true

      })
    },
    methods: {

      sendComment(){
        this.$emit('setComment',{'content':this.content,'replyid':this.replyid,'replyuid':this.replyuid,'restatus':this.restatus,'replyindex':this.replyindex});
           document.getElementById('in').setAttribute('placeholder','')
                this.content='';
                this.replyid=null;
                this.replyuid=null;
                this.restatus=0
                this.speakShow=false
                this.bottombar=true
      },

      cancel(){
        document.getElementById('in').setAttribute('placeholder','')
        this.content='';
        this.replyid=null;
        this.replyuid=null;
        this.restatus=0
        this.speakShow=false
        this.bottombar=true
      },

      reply(id,uid,name,index){
        let baseUrl = window.location.href;
        let back = encodeURIComponent(baseUrl);
        if(this.loginObj.isCollege==true){
          let entid = localStorage.getItem('coEntid');
          let token = localStorage.getItem('token_entid'+entid);
          if(token==null||token==''){
            window.location.href = `${window.location.origin}/elogin/?back=${back}&&project=${this.loginObj.code}`;
            return;
          }
        }else{
          let token = localStorage.getItem('token');
          if(token==null||token==''){
            window.location.href = `${window.location.origin}/mlogin/?back=${back}`;
            return;
          }

        }


        let top = document.getElementById('comment').offsetTop
//        this.speakShow=true;
//        this.bottombar=false;
        this.speakShow=true
        this.bottombar=false
        window.scroll(0, top)
        this.$nextTick(()=>{
          // document.getElementById('in').focus()
          this.focus = true;
        })

        this.restatus=1
        this.replyid=id;
        this.replyuid=uid
        this.replyindex=index
        this.content='';
        document.getElementById('in').setAttribute('placeholder','回复'+' '+name)
//        window.location.hash = "#comspeak";
      },
//      menu() {
//        let top = document.getElementById('comment').offsetTop
//        console.log(top)
//        this.scroll = document.body.scrollTop+document.documentElement.clientHeight;
//        if(this.scroll>top){
//          this.bottombar=true;
////          this.speakShow=false
//        }else {
//          this.bottombar=false
//        }
//
//      },
      bottomclick(){
        if(this.loginObj.isCollege==true){
             let entid = localStorage.getItem('coEntid');
            let token = localStorage.getItem('token_entid'+entid);
            if(token==null||token==''){
              let baseUrl = window.location.href;
              let back = encodeURIComponent(baseUrl);
              window.location.href = `${window.location.origin}/elogin/?back=${back}&&project=${this.loginObj.code}`;
              return;
           }else{
            let top = document.getElementById('comment').offsetTop;
                    window.scroll(0, top);
                    this.speakShow=true;
                    this.bottombar=false;
                    this.$nextTick(()=>{
                      // document.getElementById('in').focus()
                      this.focus = true;
                                    })
           }
        }else{
              let token2 = localStorage.getItem('token');
              if(token2==null||token2==''){
              let baseUrl2 = window.location.href;
              let back2 = encodeURIComponent(baseUrl2);
              window.location.href = `${window.location.origin}/mlogin/?back=${back2}`;
              return;
           }else{
 let top = document.getElementById('comment').offsetTop;
        window.scroll(0, top);
        this.speakShow=true;
        this.bottombar=false;
        this.$nextTick(()=>{
          // document.getElementById('in').focus()
          this.focus = true;
        })
           }

        }



      },
//      map: function(data){
//        this.emotionsMap = data;
//      },
      selectEmoji (code) {
        this.showEmoji = false
        this.content += code
      },
      submit () {
        this.data.push(this.value)
        this.value = ''
      }
    },
    computed: {},

    components:{
      vueEmoji
    }
  }
</script>


