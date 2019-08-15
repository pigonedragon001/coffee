<template>
    <div>
         <p class="p22">
                  <img class="Pimg" @click="ret" src="../../public/image/return.svg" alt="">
                   <span class="meg1">登陆</span>
         </p>
     <div class="vv">
        <el-input v-model="Phone" placeholder="请输入手机号" class="kuang"></el-input>
        <el-input v-model="Password" placeholder="请输入密码" class="kuang"></el-input>
        <el-button type="primary" class="ddl" @click="Goto">登陆</el-button>
        <p class="P1" @click="Findpwd">忘记密码？</p>
        <div class="kuang" style="color:red">{{this.ts}}</div>
     </div>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/store';

export default {
  data() {
      return {
          Phone:'',
          Password:'',
          ts:''
      }
  },
  methods: {
      Goto(){
           var userTel=this.Phone;
           localStorage.setItem('tel',this.Phone)
           var userPwd=this.Password;
           axios.post('/lc/login',{userTel,userPwd}).then(result=>{
               console.log(result.data)
               console.log(result.data.token)
               if(result.data.code==="1"){
                  this.$router.push('/index');
                  this.$store.commit("LOGIN",result.data.token)
               }else{
                   this.ts=result.data.errMsg
               }
           })
      },
      Findpwd(){
          this.$router.push('/findpwd')
      },
      ret(){
            this.$router.go(-1);
        },
  },
}
</script>

<style>
   .kuang{
       width: 70%;
       box-sizing: border-box;
       margin-top: 15px;
       margin-left: 15%
   }
   .dl{
       width: 50%;
       text-align: center;
       background: white;
       margin-top: 80px;
       margin-left: 25%
   }
   .ddl{
       width: 70%;
        margin-top: 15px;
       margin-left: 15%
   }
   .P1{
       color: skyblue;
       width: 50%;
      text-align: center;
      margin-top: 10px
   }
   .vv{
       width: 100%;
       margin-top: 1.5rem
   }
</style>