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
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
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


      radio: '2'
    }
  }, 
  methods: {
    // <!--提交注册-->
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          setTimeout(() => {
            alert('注册成功')
          }, 400);
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
    }
  }
};
</script>

<style>
   .el-tabs__item{
        font-size: 20px
    }
    .navimg{
        width: 100%;
        height: 200px;
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
}
#register {
  max-width: 340px;
  margin: 0px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}

.el-form-item {
  text-align: center;
}

.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
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
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>