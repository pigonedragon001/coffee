<template>
  <div>
     <router-view></router-view>
     <ul class="footernav">
        <li><router-link to="/index">首页</router-link></li>
        <li><router-link to="/menu">菜单</router-link></li>
        <li><router-link to="/order">订单</router-link></li>
        <li><router-link to="/shoppingcar">购物车</router-link></li>
        <li><router-link to="/center">我的</router-link></li>
     </ul>
  </div>
</template>

<script>


export default {
 
}
</script>

<style>

*{
   padding: 0;
   margin: 0;
}
   .footernav{
     display: flex;
     bottom: 0;
  padding: 0;
     position: fixed;
     bottom: 0;
     width: 100%;
     color: pink
   }
   .footernav>li{
     text-align:center;
     list-style: none;
      width: 25%;
   }
</style>
