<template>
    <div>
     <div class="header"  @click="goto">
              <img class="img" src="../../public/image/login.svg" alt="">
               <span class="login1">立即登录</span>
               <img class="more" src="../../public/image/more.svg" alt="">
     </div>
     <template>
          <ul class="message">
              <li>
                  <img src="../../public/image/person.svg" alt="">
                  <span>个人资料</span>
                  <img style="position:absolute;width:30px;height:30px;right:20px;top:7.5px" src="../../public/image/more.svg" alt="">
              </li>
              <li>
                  <img src="../../public/image/money.svg" alt="">
                  <span>咖啡钱包</span>
                  <img style="position:absolute;width:30px;height:30px;right:20px;top:7.5px" src="../../public/image/more.svg" alt="">
              </li>
                <li>
                  <img src="../../public/image/youhui.svg" alt="">
                  <span>优惠券</span>
                  <img style="position:absolute;width:30px;height:30px;right:20px;top:7.5px" src="../../public/image/more.svg" alt="">
              </li>
               <li>
                  <img src="../../public/image/youhui1.svg" alt="">
                  <span>兑换优惠</span>
                  <img style="position:absolute;width:30px;height:30px;right:20px;top:7.5px" src="../../public/image/more.svg" alt="">
              </li>
               <li>
                  <img src="../../public/image/love.svg" alt="">
                  <span>我的收藏</span>
                  <img style="position:absolute;width:30px;height:30px;right:20px;top:7.5px" src="../../public/image/more.svg" alt="">
              </li>
               <li style="margin-top:10px; border-bottom:none">
                  <img src="../../public/image/help.svg" alt="">
                  <span>帮助反馈</span>
                  <img style="position:absolute;width:30px;height:30px;right:20px;top:7.5px" src="../../public/image/more.svg" alt="">
              </li>
          </ul>
     </template>
       <template>
             <img style="width:100%;height:170px;margin-top:10px;margin-bottom:10px" src="https://imgsa.baidu.com/baike/pic/item/8d5494eef01f3a297801d3239725bc315d607c15.jpg" alt="">
       </template>
   </div>
</template>
<script>
export default {
       data() {
           return {
               
           }
       },
       methods: {
           goto(){
                this.$router.push('/register')
           }
       },
}
</script>

<style>
     *{
         margin: 0;
         padding: 0;
     }
    .header{
        width: 100%;
        height:170px;
        background: rgb(187, 175, 170);
        position: relative;
    }
    .img{
        width: 50px;
        height: 50px;
        position: absolute;
        left: 20px;
        top: 60px;
    }
    .login1{
        width:70px;
        height:20px;
        position: absolute;
        left: 85px;
        top: 75px;
        color: white
    }
    .more{
        width:30px;
        height:30px;
        position: absolute;
        right:20px;
        top: 70px
    }
    .message>li{
        box-sizing: border-box;
        width:100%;
        height:45px;
        padding:15px;
        background: white;
        position: relative;
        list-style: none;
        border-bottom: 1px solid gainsboro
    }
    .message{
        background: rgb(248, 245, 245);
    }
   
    .message>li>img{
           width:25px;
           height:20px;
           position: absolute;
           top:12px;
    }
    .message>li>span{
        width: 80px;
        position: absolute;
        left: 50px;
        height: 20px;
        top:12px
    }
</style>

