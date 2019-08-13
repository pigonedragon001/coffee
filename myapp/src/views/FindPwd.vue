<template>
   <div>
     <h2 class="dl">找回</h2>
     <el-input v-model="Phone" placeholder="请输入手机号" class="kuang"></el-input>
     <el-button type="primary" class="ddl" @click="commit">提交</el-button>
      <div class="kuang">{{this.qus}}</div>
     <el-input v-model="ma"  class="kuang" placeholder="请输入密保答案"></el-input>
     <el-button type="primary" class="ddl" @click="commit1">提交</el-button>
     <div class="kuang" style="color:red">{{this.ts}}</div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            Phone:'',
            qus:'',
            ma:'',
            ma1:'',
            ts:''
        }
    },
    methods: {
        commit(){
             var userTel=this.Phone;
             axios.post('http://192.168.52.95:8080/lc/pwdFind',{userTel}).then(result=>{
                 console.log(result.data)
                 if(result.data.code==="1"){
                     this.qus=result.data.response.userQuestion;
                 }else{
                     this.ma="你的手机号未注册！！！！！"
                 }
             })
        },
        commit1(){
             var userTel=this.Phone;
             var userQuestion=this.qus;
             var userAnswer=this.ma;
         axios.post('http://192.168.52.95:8080/lc/quesCheck',{userTel,userQuestion,userAnswer}).then(result=>{
             console.log(result.data)
             if(result.data.code==="1"){
                 this.$router.push('/login')
             }else{
                    this.ts=result.data.errMsg
             }
         })
        }
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
  
    .ddl{
       width: 70%;
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
</style>