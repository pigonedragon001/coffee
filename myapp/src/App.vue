<template>
  <div class="project">
     <router-view></router-view>
     <ul class="footernav">
        <li @click="choice(0)"><router-link to="/index">
            <template v-if="flag[0]">
               <img class="navImg" src="../public/image2/huanban1.png" alt="">
            </template>
            <template v-else>
               <img class="navImg" src="../public/image2/bghuanban1.png" alt="">
            </template>
           首页
        </router-link></li>
        <li @click="choice(1)"><router-link to="/menu">
           <!-- <img class="navImg" src="../public/image2/huanban2.png" alt=""> -->
           <template v-if="flag[1]">
               <img class="navImg" src="../public/image2/huanban2.png" alt="">
            </template>
            <template v-else>
               <img class="navImg" src="../public/image2/bghuanban2.png" alt="">
            </template>
           菜单
        </router-link></li>
        <li @click="choice(2)"><router-link to="/order">
           <!-- <img class="navImg" src="../public/image2/huanban3.png" alt=""> -->
           <template v-if="flag[2]">
               <img class="navImg" src="../public/image2/huanban3.png" alt="">
            </template>
            <template v-else>
               <img class="navImg" src="../public/image2/bghuanban3.png" alt="">
            </template>
           订单
        </router-link></li>
        <li @click="choice(3)"><router-link to="/shoppingcar">
           <!-- <img class="navImg" src="../public/image2/huanban4.png" alt=""> -->
           <template v-if="flag[3]">
               <img class="navImg" src="../public/image2/huanban4.png" alt="">
            </template>
            <template v-else>
               <img class="navImg" src="../public/image2/bghuanban5.png" alt="">
            </template>
           购物车
         </router-link></li>
        <li @click="choice(4)"><router-link to="/center">
         <!-- <img class="navImg" src="../public/image2/huanban5.png" alt="" height="70"> -->
         <template v-if="flag[4]">
               <img class="navImg" src="../public/image2/huanban5.png" alt="">
            </template>
            <template v-else>
               <img class="navImg" src="../public/image2/bghuanban4.png" alt="">
            </template>
          <p>我的</p>
        </router-link></li>
     </ul>
  </div>
</template>

<script>


export default {
    data() {
       return {
          flag:[true,true,true,true,true,]   
       }
    },
    
    methods:{
      choice(index){
         console.log(index);
         for(let item in this.flag){
            // item=true;
            console.log(item);
            this.flag[item]=true;
         }
         this.flag[index]=false;
            console.log(this.flag);
            // this.$router.go(0);
            this.$forceUpdate();
      }
    },
    
}
</script>

<style>
   .project{
      width: 100vw;
      height: 100vh;
   }

*{
   padding: 0;
   margin: 0;
}
   .footernav{
     display: flex;
     bottom: 0;
     position: fixed;
     width: 100%;
     border-top: 2px solid rgb(207, 168, 132);
   }
   .footernav>li{
      text-align: center;
     list-style: none;
     width: 20%;
     height:1.1rem;
     background: white;
     font-size: 0.3rem;
     
   }
   .navImg{
      display: block;
      width: 50%;
      height: 0.57rem;
      margin-left: 25%;
      margin-top: 5px
   }
  a{
     text-decoration: none;
     color:black
  }
</style>
