<template>
    <div>
     <div class="header"  @click="goto">
              <img class="img" v-if="jyan" src="../../public/image/login.svg" alt="">
              <img class="img" v-if="!jyan" src="../../public/image/smile.svg" alt="">
               <span class="login1" v-if="jyan">立即登录</span>
               <span class="login1" v-if="!jyan">欢迎光临</span>
               <img class="more"  src="../../public/image/more.svg" alt="">
     </div>
     <template>
          <ul class="message">
              <li @click="togo">
                  <img src="../../public/image/person.svg" alt="">
                  <span  class="span2">个人资料</span>
                  <img style="position:absolute;width:0.6rem;height:0.6rem;right:0.4rem;top:0.15rem" src="../../public/image/more.svg" alt="">
              </li>
              <li>
                  <img src="../../public/image/money.svg" alt="">
                  <span class="span2">咖啡钱包</span>  
                  <img style="position:absolute;width:0.6rem;height:0.6rem;right:0.4rem;top:0.15rem" src="../../public/image/more.svg" alt="">
              </li>
                <li>
                  <img src="../../public/image/youhui.svg" alt="">
                  <span class="span2">优惠券</span>
                  <img style="position:absolute;width:0.6rem;height:0.6rem;right:0.4rem;top:0.15rem" src="../../public/image/more.svg" alt="">
              </li>
               <li>
                  <img src="../../public/image/youhui1.svg" alt="">
                  <span class="span2">兑换优惠</span>
                  <img style="position:absolute;width:0.6rem;height:0.6rem;right:0.4rem;top:0.15rem" src="../../public/image/more.svg" alt="">
              </li>
               <li @click="gomylike">
                  <img src="../../public/image/love.svg" alt="">
                  <span class="span2" @click="gomylike">我的收藏</span>
                  <img style="position:absolute;width:0.6rem;height:0.6rem;right:0.4rem;top:0.15rem" src="../../public/image/more.svg" alt="">
              </li>
               <li style="margin-top:10px; border-bottom:none">
                  <img src="../../public/image/help.svg" alt="">
                  <span class="span2">帮助反馈</span>
                  <img style="position:absolute;width:0.6rem;height:0.6rem;right:0.4rem;top:0.15rem" src="../../public/image/more.svg" alt="">
              </li>
          </ul>
     </template>
       <template>
             <img style="width:100%;height:3.4rem;margin-top:0.2rem;margin-bottom:0.2rem" src="../../public/image/adv.jpg" alt="">
       </template>
   </div>
</template>
<script>

import axios from 'axios';

export default {
       data() {
           return {
               jyan:true,
           }
       },
       methods: {
           goto(){
                if(localStorage.getItem('token')===null){
                     this.$router.push('/register')
                }
           },
           togo(){
                var token=localStorage.getItem('token');
                var userTel=localStorage.getItem('tel');
                 console.log(token,userTel)
                axios.post('/lc/usermess',{token,userTel}).then(result=>{
                    console.log(result.data)
                    if(result.data.errMsg){
                        this.$router.push('/err')
                    }
                   else{
                       var userName=result.data.userName;
                       var userSex=result.data.userSex;
                        var userTel=result.data.userTel;
                        var  userPurse=result.data.userPurse;
                     this.$router.push({path:'/usermsg',query:{userName,userSex,userTel,userPurse}})
                    }
                })
           },
         gomylike(){
              if(localStorage.getItem('token')!==null){
                  this.$router.push('/mylike')
              }
              else{
                  this.$router.push('/err')
              }
         }
       },
       mounted() {
             if(localStorage.getItem('token')!==null){
                   this.jyan=false
             }
       },
}
</script>

<style>
     *{
         margin: 0;
         padding: 0;
     }
     body{
         font-size: 0.3rem
     }
    .header{
        width: 100%;
        height:3.3rem;
        background: rgb(187, 175, 170);
        position: relative;
    }
    .img{
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        left: 0.2rem;
        top: 1.35rem;
    }
    .login1{
        width:1.2rem;
        height:0.5rem;
        position: absolute;
        left: 1rem;
        top: 1.4rem;
        color: white
    }
    .more{
        width:0.6rem;
        height:0.6rem;
        position: absolute;
        right:0.4rem;
        top: 1.4rem
    }
    .message>li{
        box-sizing: border-box;
        width:100%;
        height:0.9rem;
        padding:0.3rem;
        background: white;
        position: relative;
        list-style: none;
        border-bottom: 1px solid gainsboro
    }
    .message{
        background: rgb(248, 245, 245);
    }
   
    .message>li>img{
           width:0.5rem;
           height:0.4rem;
           position: absolute;
           top:0.25rem;
    }
    .span2{
        width: 1.6rem;
        position: absolute;
        left: 1rem;
        height: 0.4rem;
        top:0.24rem
    }
   /* .span1{
        position: absolute;
        width: 1rem;
        right:1rem;
        color: red
    } */
</style>

