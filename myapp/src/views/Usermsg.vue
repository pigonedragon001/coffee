<template>
        <div class="div1">
             <!-- {{datalist.userName}}
             {{datalist.userSex}}
             {{datalist.userTel}}
             {{datalist.userPurse}} -->
                <p class="p22">
                    <img class="Pimg" @click="ret" src="../../public/image/return.svg" alt="">
                     <span class="meg1">个人资料</span>
                </p>
                <ul class="Usermsg">
                    <li>
                       <span class="spann1">用户名</span>
                       <span class="spann"> {{datalist.userName}}</span>
                       <img src="../../public/image/more.svg">
                    </li>
                     <li>
                       <span class="spann1">性别</span>
                       <h4 class="spann"> {{datalist.userSex}}</h4>
                       <img src="../../public/image/more.svg">
                    </li>
                     <li>
                       <span class="spann1">绑定手机</span>
                       <span class="spann" style="color: rgb(150, 148, 145);font-size: .25rem; line-height: .5rem;"> {{datalist.userTel}}</span>
                       <img src="../../public/image/more.svg">
                    </li>
                     <li>
                       <span class="spann1">我的钱包</span>
                       <span class="spann" style="color: rgb(207, 168, 132);"> ￥{{datalist.userPurse}}</span>
                       <img src="../../public/image/more.svg">
                    </li>
                     <li>
                       <span class="spann1">收货地址</span>
                       <!-- <span class="spann"> {{datalist.userName}}</span> -->
                       <img src="../../public/image/more.svg">
                    </li>
                </ul>
                <el-button type="primary" class="ddl" @click="returnlogin">退出登陆</el-button>
        </div>
  </template>
  <script>
  export default {
      data() {
          return {
               datalist:''
          }
      },
      mounted() {
               var ul=document.getElementsByClassName("footernav")[0];
               ul.style.visibility="hidden";
               this.datalist=this.$route.query;
      },
      beforeDestroy() {
                 var ul=document.getElementsByClassName("footernav")[0];
                 ul.style.visibility="visible";
      },
      methods: {
          returnlogin(){
              localStorage.removeItem('token');
              localStorage.removeItem('tel');
               this.$router.go(-1);
          },
          ret(){
              this.$router.go(-1);
          }
      },
  }
  </script>
  
  <style>
      *{
          padding:0;
          margin:0;
      }
      .spann{
          position: absolute;
          right: 1.2rem;
          top:0.175rem;
          /* color: rgb(150, 148, 145); */
      }
  
      .spann1{
          position: absolute;
          height: 0.5rem;
          top:0.175rem
      }
      
      .Pimg{
          width: 0.5rem;
          height: 0.5rem;
          margin-left: 0.2rem;
          margin-top: 0.15rem
      }
      .p22{
          width: 100%;
          height: 0.8rem;
          background:rgb(62, 76, 156);
          color: #fff;
          display: flex;
          position: relative;
          margin-bottom: 0.3rem
      }
      .meg1{
          display: block;
          font-size:0.35rem;
          height: 0.5rem;
          width: 30%;
          margin-top: 0.15rem;
          position: absolute;
          right: 35%;
          text-align: center
      }
      .Usermsg{
          padding: 0.2rem;
      }
      .Usermsg>li{
          width: 100%;
          height: 0.85rem;
          border-bottom: 1px solid rgb(157, 157, 165);
          position: relative;
          background: white;
          list-style: none;
      }
      .Usermsg>li>img{
          width: 0.5rem;
          height: 0.5rem;
          position: absolute;
          right: 0.3rem;
          top:0.175rem
      }
  </style>