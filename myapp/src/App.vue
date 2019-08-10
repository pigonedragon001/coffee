<template>
  <div>
     <router-view></router-view>
     <ul class="footernav">
        <li><router-link to="/index">
           <img class="navImg" src="../public/image/sy.svg" alt="">
           首页
        </router-link></li>
        <li><router-link to="/menu">
           <img class="navImg" src="../public/image/menu.svg" alt="">
           菜单
        </router-link></li>
        <li><router-link to="/order">
           <img class="navImg" src="../public/image/order.svg" alt="">
           订单
        </router-link></li>
        <li><router-link to="/shoppingcar">
           <img class="navImg" src="../public/image/car.svg" alt="">
           购物车
         </router-link></li>
        <li><router-link to="/center">
         <img class="navImg" src="../public/image/mine.svg" alt="">
          我的
        </router-link></li>
     </ul>
  </div>
</template>

<script>


export default {
    data() {
       return {
          
       }
    },
}
</script>

<style>
   .footernav{
     display: flex;
     bottom: 0;
     position: fixed;
     width: 100%;
   }
   .footernav>li{
      text-align: center;
     list-style: none;
     width: 20%;
     height:60px;
     background: white;
     font-size: 12px;
     
   }
   .navImg{
      display: block;
      width: 50%;
      height: 30px;
      margin-left: 25%;
      margin-top: 5px
   }
  a{
     text-decoration: none;
     color:black
  }
</style>
