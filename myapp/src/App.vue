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
   .footernav{
     display: flex;
     position: relative;
     bottom: 0;
     width: 100%;
   }
   .footernav>li{
     list-style: none;
   }
</style>
