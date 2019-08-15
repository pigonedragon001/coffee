<template>
    <div>
         <p class="p22">
                  <img class="Pimg" @click="ret" src="../../public/image/return.svg" alt="">
                   <span class="meg1">我的收藏</span>
         </p>
         <ul class="mylikelist">
             <li v-for="good in mylikelist" :key="good.goodId">
                 <img :src="good.goodImgPath" alt="">
                 <span class="mylikename">{{good.goodName}}</span>
                 <span class="mylikeprice">￥{{good.goodPrice}}</span>
                 <span class="delmylike" @click="delmylike(good)">取消</span>
             </li>
         </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            mylikelist:[],
        }
    },
    methods: {
         ret(){
            this.$router.go(-1);
        },
        delmylike(good){
             for(let index in this.mylikelist){
                 if(good.goodId===this.mylikelist[index].goodId){
                    //  this.mylikelist.splice(index,1)
                     var goodName=good.goodName;
                     var userTel=localStorage.getItem('tel');
                     var token=localStorage.getItem('token');
                     axios.post('/lc/addcollect',{goodName,userTel,token}).then(result=>{
                         console.log(result.data)
                         if(result.data.code=="1"){
                             this.mylikelist.splice(index,1)
                         }
                     })
                 }
             }
        }
    },
    mounted() {
        var token=localStorage.getItem('token');
        var userTel=localStorage.getItem('tel');
        axios.post('/lc/selectcollect',{token,userTel}).then(result=>{
            console.log(result.data)
            this.mylikelist=result.data.response;
            this.goodName=result.data.goodName;
        })
    },
}
</script>

<style>
    .mylikelist>li{
        list-style: none;
        position: relative;
        border: 1px solid seashell;
    }
    .mylikelist>li>img{
        width: 1.5rem;
        height:1.5rem;
    }
    .mylikelist{
        padding: 0.25rem;
    }
    .mylikeprice{
        color: red;
        position: absolute;
        right: 1.8rem;
        top:0.5rem
    }
    .mylikename{
       position: absolute;
       left: 2rem;
       top:0.5rem
    }
    .delmylike{
        border: 1px solid skyblue;
        position: absolute;
        right: 0.6rem;
        top:0.5rem
    }
</style>