<template>
<div class="a">
    <div style="height: 3rem">
        <van-swipe :autoplay="3000" indicator-color="white" style="height: 3rem;">
            <van-swipe-item><img src="../assets/lunbo5.jpg" alt="" class="lunboimg" style="height: 3rem;"></van-swipe-item>
            <van-swipe-item><img src="../assets/lunbo11.jpg" alt="" class="lunboimg" style="height: 3rem;"></van-swipe-item>
            <van-swipe-item><img src="../assets/lunbo9.png" alt="" class="lunboimg" style="height: 3rem;"></van-swipe-item>
        </van-swipe>
  </div>
  <div>
    <nut-tab @tab-switch="tabSwitch"  positionNav="left">
   
    <nut-tab-panel 
      v-for="value in editableTabs" 
      v-bind:key="value.tabTitle" 
      :tabTitle="value.tabTitle" 
      :iconUrl="value.tabUrl"
      >
    <ul>
      <li :key="product.goodId" v-for="product in value.content.products" @click="jiarugouwuche(product)">
          <div class="food-item" :v-for="product in value.content.products">
            <div class="icon">
                <img width="100" height="100" :src="product.goodImgPath2">
            </div>
            <div class="content">
              <span>{{product.goodName}}</span>
              <p>Mocha</p>
              <div class="jiage">
                <h5>￥{{product.goodPrice}}</h5>
                <p><img width="30" height="35" src="../../public/image/tianjia.svg"></p>
              </div>
            </div>

          </div>
      </li>
    </ul>
    </nut-tab-panel>
</nut-tab>
  </div>
  <div > 
    <div class="xiangqing"  style="font-size: .25rem;">
      <div @click="like" class="xiangqing-shoucang"><img src="../../public/image/shoucang.svg" class="shoucang"></div>
      <div class="xiangqingyinchang" @click="xiangqingyinchang(e)"><img src="../../public/image/chacha2.svg" class="cha"></div>
      <div class="xiangqingtu"><img :src="xiangqing.goodImgPath" class="xiangqingtu" height="250"></div>
      <div class="xiangqing-leirong">
        <div class="gundong">
          <div class="xiangqing-guige">
            <ul style="margin-bottom: .3rem;">
              <li class="guige">
                 <p>规格</p>
                <button @click="choice">大杯</button>
                <button @click="choice">小杯</button>
              </li>
              <li class="wendu">
                 <p>温度</p>
                <button @click="choice2">冷饮</button>
                <button @click="choice2">热饮</button>
              </li>
              <li class="tangdu">
                 <p>糖度</p>
                <button @click="choice3">全糖</button>
                <button @click="choice3">半糖</button>
              </li>
            </ul>
          </div>
          <div class="shangpingxiangqing">
              <h4 style="height: .6rem; line-height: .6rem; border-top: 1px solid rgb(207, 168, 132); padding-left: .2rem;">商品描述</h4>
              <p  style="line-height: .3rem; padding-left: .2rem; padding-right: .2rem; margin-botton: .2rem; color: rgb(114, 114, 114);">{{xiangqing.goodDec}}</p>
          </div>
          <div class="gao"></div>
        </div>
      </div>

      <div class="xiangqing-jiarugouwuche">
          
          <div class="shuliang"> 
            <div class="jiage"  style="float: left; line-height: .6rem;">
              <h4 style="float: left; padding-left: .2rem;">单价:￥</h4>
            <h4 style="padding-left: .05rem; color: rgb(207, 168, 132); float: left;">{{xiangqing.goodPrice}}</h4>
          </div>
            <nut-stepper :simple="false" :value.sync="count" min="1" style="height: .6rem; width: 2rem; background-color: #fff; color: rgb(207, 168, 132); float: right; margin-right: .28rem;"></nut-stepper>
            <!-- <button @click="reduceCount">-</button><input type="text" value="1"><button @click="addCount">+</button> -->

                        <!-- <div><button @click="reduceCount">-</button>
                        <input type="text" value="1"><button @click="addCount">+</button>
                        </div> -->

          </div>
          <div class="jiarugouwuche">
            <button class="maierzengyi" style=" background-color: #fff; margin: .4rem .1rem .2rem .5rem; float: left; border-radius: .1rem;" >充2赠1</button>
            <button class="jiarugouwuche2" style="border: 0; background-color: rgb(67, 111, 255); color: #fff; float: left; margin: .4rem 0 .2rem .1rem; border-radius: .1rem;" @click="dianjijiarugouwuche">加入购物车</button>
          </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
        // list: [
        //   { title: '规格', btnValue1: '大杯', btnValue: '小杯' },
        //   { title: '温度', btnValue1: '冷饮', btnValue: '热饮' },
        //   { title: '糖度', btnValue1: '全糖', btnValue: '半糖' }
        // ],
          xiangqing:{},
          count: 1,
          product:{
            shoppingGoodNumber:"",
            shoppingGoodSize:"",
            goodPrice:"",
            shoppingGoodTemperture:"",
            shoppingGoodSweet:""
          },
          current:0,
          index:1,
        activeKey: 0,
        positionNavCurr:'top',

        editableTabs:[
        {
          tabTitle:'人气Top',
          content:{
            products:[]
          }
        },
        {
          tabTitle:'大师咖啡',
          content:{
            products:[]
          }
        },
        {
          tabTitle:'小鹿茶',
          content:{
              products:[]
          }
        },
        {
          tabTitle:'瑞纳冰',
          content:{
              products:[]
          }
        },
        {
          tabTitle:'鲜榨果蔬汁',
          content:{
              products:[]
          }
        },
        {
          tabTitle:'经典饮品',
          content:{
              products:[]
          }
        },
        {
          tabTitle:'健康轻食',
          content:{
              products:[]
          }
        },
         {
          tabTitle:'幸运小食',
          content:{
              products:[]
          }
        },
      ]
        };

        msg:'k'
        
    },
    methods: {
      jiarugouwuche(product){
        document.getElementsByClassName("xiangqing")[0].style.display="block";
        this.xiangqing=product;
        console.log(this.xiangqing)
        console.log(product)
      },
      xiangqingyinchang(e){
        var e = e || window.event;
        if(e.stopPropagation){
          e.stopPropagation();
        } else{
          e.cancelBubble = true;
        }

        document.getElementsByClassName("xiangqing")[0].style.display="none";
        console.log('asdasdasd')
      },
      choice(e){
        // console.log(e.currentTarget);
        console.log(e);
        var btnList=document.querySelectorAll('.guige button');
        for(let item of btnList){
          item.removeAttribute('class');
          
        }
        e.target.setAttribute("class",'active');
        // console.log(btnList);

        console.log(e.currentTarget.innerHTML) //currentTarget指向事件绑定的元
        this.product.shoppingGoodSize=e.currentTarget.innerHTML;
        console.log(this.product.shoppingGoodSize)
      },
      choice2(e){
        console.log(e);
        var btnList=document.querySelectorAll('.wendu button');
        for(let item of btnList){
          item.removeAttribute('class');
        }
        e.target.setAttribute("class",'active');
        // console.log(btnList);
        console.log(e.currentTarget.innerHTML) //currentTarget指向事件绑定的元素
        this.product.shoppingGoodSweet=e.currentTarget.innerHTML;
      },
      choice3(e){
        console.log(e);
        var btnList=document.querySelectorAll('.tangdu button');
        for(let item of btnList){
          item.removeAttribute('class');
        }
        e.target.setAttribute("class",'active');
        // console.log(btnList);
        console.log(e.currentTarget.innerHTML) //currentTarget指向事件绑定的元素
        this.product.shoppingGoodTemperture=e.currentTarget.innerHTML;
      },
      tabSwitch(e){
        console.log(e);
        axios.post('/lc/goodsmess',).then(result=>{
            console.log(result.data)
            this.editableTabs[e].content.products = [];
            for(let item of result.data.response){
              if(item.goodKindId===e+1){
                this.editableTabs[e].content.products.push(item);
              }
            }
            console.log(this.editableTabs[0].content.products);
        })

      },

      /*******************添加购物车********************* */
      dianjijiarugouwuche(){
        var token=localStorage.getItem('token');
        var userTel=localStorage.getItem('tel');
        var goodName=this.xiangqing.goodName;
        // var goodPrice = this.xiangqing.goodPrice;
        var shoppingGoodTemperture = this.product.shoppingGoodTemperture;
        var shoppingGoodSweet = this.product.shoppingGoodSweet;
        var shoppingGoodSize = this.product.shoppingGoodSize;
        var shoppingGoodNumber = this.count;
        console.log(shoppingGoodSize)
        console.log(shoppingGoodSweet)
        axios.post('/lc/addshopping',{token,goodName,userTel,shoppingGoodTemperture,shoppingGoodSweet,shoppingGoodSize,shoppingGoodNumber}).then(result=>{
            console.log(result.data);
            if(result.data.code==="0"){
                  this.$router.push('/err')
            } else{
               document.getElementsByClassName("xiangqing")[0].style.display="none";
            }
           
        })
        // var 
      },

      like(){
          var token=localStorage.getItem('token');
          var userTel=localStorage.getItem('tel');
          var goodName=this.xiangqing.goodName;
          console.log(goodName);
          console.log(token);
          console.log(userTel)
          axios.post('/lc/addcollect',{token,goodName,userTel}).then(result=>{
            console.log(result.data)
          })
      },
      change(value){
        // console.log(e.currentTarget);
        console.log(value);
      }
  },
  blur(e){
    console.log(e)
  },
  mounted(){
    this.tabSwitch(0)
  }
}
</script>

<style>
.a{
  width: 100%;
}
.gao{
  height: 1rem;
}
.xiangqing-guige>ul>li>p{
  width: 1rem;
  height: .6rem;
  line-height: .6rem;
  text-align:center;
  float: left;
   margin: .5rem 0rem 0rem .5rem;
   
}
.xiangqing-guige>ul>li>button{
  height: .6rem;
  width: 1.5rem;
  border-radius: .4rem;
  border: 1px solid rgb(207, 168, 132);
  color: rgb(207, 168, 132);
  background-color: #fff;
  margin: .5rem 0rem 0rem .5rem;
  
}
  .lunboimg{
      width: 100%;
      
  }
  .cebl{
      /* position: absolute; */
      float: left;
      
  }
  .caidan{
      width: 70%;
      margin-left: 1.8rem;
  }
  .icon{
      float: left;
      width: 25%;
      height: 1.14rem;
  
  }
  .content{
      float: left;
      width: 60%;
      padding-left: .2rem;
  }
  .content>p{
    font-size: .2rem;
    color: rgb(141, 141, 141);
  }
  .food-item{
      width: 100%;
      overflow: hidden;
      font-size: .3rem;
      padding-top: .1rem;
      padding-bottom: .1rem;
       /* display: block;
      content: "";
      visibility: hidden;
      height: 0;
      clear: both;  */
  }
  .jiage{
      height: .4rem;
      line-height: .4rem;
      margin-top: 8px;
  }
  .jiage>h5{
      float: left;
  }
  .jiage>p{
      float: right;
      margin-right: 0;
  }
  .nut-tab-leftnav{
      padding: 0 !important;
      height: 9.2rem;
      margin-bottom: 1rem;
  }
  .nut-tab .nut-tab-item{
    height: 100%;
     overflow-y: scroll;
     overflow-x:hidden;
  }
  .a{
      position: relative;
  }
  .xiangqing{
      position: fixed;
      top: 50%;
      left: 50%;
        margin-left: -3rem;
        margin-top: -4.5rem;
      width: 6rem;
      height: 9rem;
      background-color: rgb(255, 255, 255);
      z-index: 111;
      display: none;
      border-radius: .2rem;
  }
  .xiangqingtu{
      width: 100%;
      height: 2.6rem;
      
  }
  .xiangqingyinchang{
    width: .6rem;
    height: .6rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 123;
  }
  .cha{
    width: .4rem;
    height: .4rem;
    padding-top: .1rem;
  }
  .xiangqing-shoucang{
    width: .6rem;
    height: .6rem;
    position: absolute;
    left: .1rem;
    top: 0;
    z-index: 123;
  }
  .shoucang{
    width: .45rem;
    height: .45rem;
    padding-top: .1rem;
  }
  .xiangqingtu{
    position: absolute;
      top: 0;
      left: 0;
      border-radius: .2rem .2rem 0 0;
  }
  .xiangqing-jiarugouwuche{
    width: 100%;
    height: 2.4rem;
    position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgb(240, 240, 240);
    border-radius: 0 0 .2rem .2rem;
    border-top: 1px solid rgb(207, 168, 132);
  }
  .xiangqing-leirong{
    width: 100%;
    background-color: #fff;
    position: absolute;
      top: 2.6rem;
      bottom: 2.4rem;
      left: 0;
  }
  .gundong{
    overflow-y:auto;
    width: 100%;
    height: 4.6rem;
  }
  .nut-tab-title-leftnav{
    width: 2.5rem !important;
  }
  .nut-tab-link{
    font-size: .3rem !important;
    
    
  }
  /* .xiangqing-guige>butto{

  } */
  .active{
    background: rgb(207, 168, 132)!important;
    color: #fff !important;
  }
.jiarugouwuche2{
    width: 2.5rem;
    height: .8rem;
  }
.maierzengyi{
  width: 2.5rem;
  height: .8rem;
  border: 1px solid rgb(252, 146, 47);
  color: rgb(252, 146, 47);
}
.shuliang{
  overflow: hidden;
  margin-top: .3rem;
}
  </style>
