<template>
    <div>
         <p class="p22">
                  <img class="Pimg" @click="ret" src="../../public/image/return.svg" alt="">
                   <span class="meg1">我的收藏</span>
         </p>
         <ul class="mylikelist">
             <li>
                 <img src="http://img0.imgtn.bdimg.com/it/u=3485019702,472626870&fm=26&gp=0.jpg" alt="">
                 <span class="mylikename">朱一龙海报</span>
                 <span class="mylikeprice">￥98</span>
                 <span class="delmylike">取消</span>
             </li>

              <li>
                 <img src="http://img0.imgtn.bdimg.com/it/u=3485019702,472626870&fm=26&gp=0.jpg" alt="">
                 <span class="mylikename">朱一龙海报</span>
                 <span class="mylikeprice">￥98</span>
                 <span class="delmylike">取消</span>
             </li>

              <li>
                 <img src="http://img0.imgtn.bdimg.com/it/u=3485019702,472626870&fm=26&gp=0.jpg" alt="">
                 <span class="mylikename">朱一龙海报</span>
                 <span class="mylikeprice">￥98</span>
                 <span class="delmylike">取消</span>
             </li>

              <li>
                 <img src="http://img0.imgtn.bdimg.com/it/u=3485019702,472626870&fm=26&gp=0.jpg" alt="">
                 <span class="mylikename">朱一龙海报</span>
                 <span class="mylikeprice">￥98</span>
                 <span class="delmylike">取消</span>
             </li>
         </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            mylikelist:[]
        }
    },
    methods: {
         ret(){
            this.$router.go(-1);
        },
    },
    mounted() {
        var token=localStorage.getItem('token');
        var userTel=localStorage.getItem('tel');
        axios.post('/lc/selectcollect',{token,userTel}).then(result=>{
            console.log(result.data)
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