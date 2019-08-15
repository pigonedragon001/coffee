<template>
    <div> 
    <div class="register-wrapper"> 
      <div id="register">
        <p class="title">注册</p>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-ruleForm"
        > 
          
           <el-form-item prop="username">
            <el-input v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
          </el-form-item>

          <el-form-item prop="tel">
            <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
          </el-form-item>
            
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>

          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
           
           <el-form-item prop="mb">
            <el-input  v-model="ruleForm2.mb" auto-complete="off" placeholder="请输入密保"></el-input>
          </el-form-item>
          
           <el-form-item prop="ma">
            <el-input v-model="ruleForm2.ma" auto-complete="off" placeholder="密保答案"></el-input>
          </el-form-item>


          <el-form-item>
                <label style="font-size:0.3rem;margin-right:2.4rem" @click="clickUser">
                  <span style="color: silver">用户</span>  <input ref="uInp" style="width: 0.3rem;height: 0.3rem;" type="radio" name="selitem" value="用户"/>
                </label>
                <label style="font-size:0.3rem" @click="clickshop">
                <span style="color: silver">商家</span>  <input ref="sInp"  style="width: 0.3rem;height: 0.3rem;" type="radio" name="selitem" value="商家"/>
                </label>  
          </el-form-item>
          
            <el-form-item>
                <label style="font-size:0.3rem;margin-right:2.8rem" @click="clickman">
                 <span style="color: silver">男</span><input ref="uInp1" style="width: 0.3rem;height: 0.3rem;" type="radio" name="selitem1" value="男"/>
                </label>
                <label style="font-size:0.3rem" @click="clickgirl">
                  <span style="color: silver">女</span><input ref="sInp1"  style="width: 0.3rem;height: 0.3rem;" type="radio" name="selitem1" value="女"/>
                </label>  
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;">注册</el-button>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>
    
        </el-form>
      </div>
    </div>
  </div>
  
</template>


<script>
 import 'element-ui/lib/theme-chalk/index.css';
 import axios from 'axios';

export default {
  name: "Register", 
  data() {
    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('手机号码不合法'))
      } else {
        callback()
      }
    }
     
     let checkusername=(rule,value,callback)=>{
          if(value===""){
            callback(new Error('请输入用户名'))
          }else if(!this.checkUsername(value)){
              callback(new Error('用户名不可以数字开头'))
          }else{
            callback()
          }
     }
    
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
      } else {
        callback()
      }
    }

    let checkmb=(rule,value,callback)=>{
         if(value===''){
           callback(new Error('请输入密保'))
         }else{
           callback()
         }
    }

    let checkma=(rule,value,callback)=>{
      if(value===''){
        callback(new Error('请输入密保答案'))
      }else{
        callback()
      }
    }


    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback()
      }
    }
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {  
      ruleForm2: {
        pass: "",
        checkPass: "",
        tel: "",
        username:'',
        mb:'',
        ma:''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        tel: [{ validator: checkTel, trigger: 'blur' }],
        username:[{validator:checkusername,trigger:'blur'}],
        mb:[{validator:checkmb,trigger:'blur'}],
        ma:[{validator:checkma,trigger:'blur'}]
      },

      userType:'',
      ts1:'',
      userSex:''
    }
  }, 
  methods: {
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
         var userName=this.ruleForm2.username;
         var userTel=this.ruleForm2.tel;
         var userPwd=this.ruleForm2.pass;
         var userSex=this.userSex;
         var userType=this.userType;
         var userQuestion=this.ruleForm2.mb;
         var userAnswer=this.ruleForm2.ma;

        if (valid) {
          axios.post('/lc/regist',{userName,userTel,userPwd,
          userSex,userType,userQuestion,userAnswer}).then(result=>{
            console.log(result.data)
            if(result.data.code==="1"){
                 this.$router.push('/login')
            }else{
               alert('手机号已注册!!!!!!')
            }
          })

        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    // 验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    
    checkUsername(str){
        let username=/^[^\d]/;
        if(username.test(str)){
          return true;
        }else{
          return false;
        }
    },

    gotoLogin() {
        this.$router.push('/login')
    },
   clickUser(){
  console.log(this.$refs.uInp.value)
      this.userType=this.$refs.uInp.value
  },
   clickshop(){
  console.log(this.$refs.sInp.value)
    this.userType=this.$refs.sInp.value
  },
  clickman(){
    console.log(this.$refs.uInp1.value)
    this.userSex=this.$refs.uInp1.value
  },
  clickgirl(){
    console.log(this.$refs.sInp1.value)
    this.userSex=this.$refs.sInp1.value
  }
  }
};
</script>

<style>
   .el-tabs__item{
        font-size: 0.4rem
    }
    .navimg{
        width: 100%;
        height: 4rem;
    }
    *{
        padding: 0;
        margin: 0;
    }

    .loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-wrapper img {
  position: absolute;
  z-index: 1;
}
.register-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
   height: 100%;
}
#register {
  max-width: 6.8rem;
  margin: 0px auto;
  background: #fff;
  padding: 0.4rem 0.4rem;
  border-radius: 0.2rem;
  position: relative;
  z-index: 9;
  height: 100%;
}
.title {
  font-size: 0.52rem;
  line-height: 1rem;
  font-weight: bold;
  margin: 0.2rem;
  text-align: center;
}

.el-form-item {
  text-align: center;
}

.login {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  line-height: 0.44rem;
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 0.16rem;
  width: 3.2rem;
}
.login:hover {
  color: #2c2fd6;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 0.4rem;
  width: 2.8rem;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
   .demo-ruleForm{
      width: 4.5rem;
      height: 5.38rem;
      margin-left: 15%
   }
   .el-form-item el-form-item--feedback{
      width: 6.7rem;
      margin-left: 0.4rem
   }
   .el-input__inner{
     font-size: 0.3rem;
     height: 0.8rem;
   }

   .el-radio__label{
     font-size: 0.3rem
   }
   .el-input{
     width: 4.5rem;
     margin-bottom: 0.2rem
   }
   .el-button--primary{
     font-size: 0.3rem
   }
   .el-form-item__error{
     font-size: 0.25rem;
     padding-top:0;
     top:88%
   }

  
</style>