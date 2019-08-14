<template>
<div class="a">
    <div style="height: 3rem">
        <van-swipe :autoplay="3000" indicator-color="white" style="height: 3rem;">
            <van-swipe-item><img src="../assets/092256pfabb5dfx4aic2jt.jpg" alt="" class="lunboimg" style="height: 3rem;"></van-swipe-item>
            <van-swipe-item><img src="../assets/5bc0575c5ef17.jpg" alt="" class="lunboimg" style="height: 3rem;"></van-swipe-item>
            <van-swipe-item><img src="../assets/20180920161429_Jh8FP.jpeg.jpg" alt="" class="lunboimg" style="height: 3rem;"></van-swipe-item>
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
      <li :key="product.id" v-for="product in value.content.products" @click="jiarugouwuche(product)">
          <div class="food-item" :v-for="product in value.content.products">
            <div class="icon">
                <img width=".6rem" height=".6rem" :src="product.image">
            </div>
            <div class="content">
              <span>{{product.name}}</span>
              <p>Mocha</p>
              <div class="jiage">
                <h5>￥{{product.price}}</h5>
                <p><img width="30" height="35" src="../../public/image/tianjia.svg"></p>
              </div>
            </div>
          </div>
      </li>
    </ul>



    </nut-tab-panel>
</nut-tab>
  </div>
  <div> 
    <div class="xiangqing"  style="font-size: .25rem;">
      <div class="xiangqing-shoucang" @click="xiangqingyinchang"><img src="../../public/image/shoucang.svg" class="shoucang"></div>
      <div class="xiangqingyinchang" @click="xiangqingyinchang"><img src="../../public/image/chacha2.svg" class="cha"></div>
      <div class="xiangqingtu"><img src="../assets/092256pfabb5dfx4aic2jt.jpg" class="xiangqingtu"></div>
      <div class="xiangqing-leirong">
        <div class="gundong">
          <div class="xiangqing-guige">
            <ul>
              <li class="guige">
                 <p>规格</p>
                <button @click="choice">大</button>
                <button @click="choice">小</button>
              </li>
              <li class="wendu">
                 <p>温度</p>
                <button @click="choice2">冰</button>
                <button @click="choice2">热</button>
              </li>
              <li class="tangdu">
                 <p>糖度</p>
                <button @click="choice3">全糖</button>
                <button @click="choice3">半糖</button>
              </li>
              <li class="naiyou">
                 <p>奶油</p>
                <button @click="choice4">默认奶油</button>
                <button @click="choice4">无奶油</button>
              </li>
              <li>
                 <p>奶油</p>
                <button>默认奶油</button>
                <button>无奶油</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="xiangqing-jiarugouwuche">
          <div class="jiarugouwuche">
            <button class="maierzengyi" style=" background-color: #fff;">充2赠1</button>
            <button class="jiarugouwuche2" style="border: 0; background-color: rgb(67, 111, 255); color: #fff;">加入购物车</button>
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
          
          current:0,
          index:1,
        activeKey: 0,
        positionNavCurr:'top',
        editableTabs:[
        {
          tabTitle:'人气Top',
          content:{
            products:[{
            name:"摩卡",
            price:999,
            image:'../assets/092256pfabb5dfx4aic2jt.jpg'
            },{
            name:"草莓芝士茉香茶",
            price:27,
            }]
          }
        },
        {
          tabTitle:'大师咖啡',
          content:{
            products:[{
                name:"香草拿铁",
                price:27,
            },
            {
                name:"焦糖拿铁",
                price:27,
            },
            {
                name:"标准美式",
                price:21,
            }]
          }
        },
        {
          tabTitle:'小鹿茶',
          content:{
              products:[{
                name:"大红袍寒天牛乳茶",
                price:21,
              }]
          }
        },
        {
          tabTitle:'瑞纳冰',
          content:{
              products:[{
                name:"小雪荔枝瑞纳冰",
                price:21,
              }]
          }
        },
        {
          tabTitle:'鲜榨果蔬汁',
          content:{
              products:[{
                name:"NFC鲜榨橙汁",
                price:24,
              }]
          }
        },
        {
          tabTitle:'经典饮品',
          content:{
              products:[{
                name:"纯牛奶",
                price:21,
              }]
          }
        },
        {
          tabTitle:'健康轻食',
          content:{
              products:[{
                name:"夏威夷菠萝火腿卷",
                price:21,
              }]
          }
        },
         {
          tabTitle:'幸运小食',
          content:{
              products:[{
                name:"经典有机甘栗仁",
                price:9.9,
              }]
          }
        },
      ]
        };
        
    },
    methods: {
      jiarugouwuche(product){
        document.getElementsByClassName("xiangqing")[0].style.display="block";
        console.log(product)
      },
      xiangqingyinchang(){
        document.getElementsByClassName("xiangqing")[0].style.display="none"
      },
      choice(e){
        console.log(e);
        var btnList=document.querySelectorAll('.guige button');
        for(let item of btnList){
          item.removeAttribute('class');
        }
        e.target.setAttribute("class",'active');
        console.log(btnList);
      },
      choice2(e){
        console.log(e);
        var btnList=document.querySelectorAll('.wendu button');
        for(let item of btnList){
          item.removeAttribute('class');
        }
        e.target.setAttribute("class",'active');
        console.log(btnList);
      },
      choice3(e){
        console.log(e);
        var btnList=document.querySelectorAll('.tangdu button');
        for(let item of btnList){
          item.removeAttribute('class');
        }
        e.target.setAttribute("class",'active');
        console.log(btnList);
      },
      choice4(e){
        console.log(e);
        var btnList=document.querySelectorAll('.naiyou button');
        for(let item of btnList){
          item.removeAttribute('class');
        }
        e.target.setAttribute("class",'active');
        console.log(btnList);
      },
      tabSwitch(e){
        axios.post('http://192.168.52.95:8080/lc/goodsmess',).then(result=>{
            console.log(result.data)
        })
      }
  },
  mounted(){
    
  }
}
</script>

<style>
.a{
  width: 100%;
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
      height: 8rem;
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
      background-color: red;
      z-index: 111;
      display: none;
  }
  .xiangqingtu{
      width: 100%;
      height: 3rem;
      
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
  }
  .xiangqing-jiarugouwuche{
    width: 100%;
    height: 2.4rem;
    position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgb(117, 117, 117);
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
  </style>
