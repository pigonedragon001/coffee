<template>
    <div class="shoppingcar">
        <div class="head">购物车</div>
        <div class="banner"><img src="../../public/image/shopcar-top.jpg" alt="轮播图"></div>
        <div class="products">
            <ul>
                <li v-for="product in products" :key="product.id">
                  <p><input type="checkbox" :checked='product.flag' @click='changeFlag(product)'></p><p>{{ product.name }}<br>{{ product.tem }}/{{ product.sugar }}/{{ product.level }}</p><p>￥{{ product.price }} </p><div><button @click="reduceCount(product)">-</button><p>{{ product.count }}</p><button @click="addCount(product)">+</button></div><button @click='delProduct(product)'>×</button>
                </li>
            </ul>
        </div>
        <div class="choiceOther">
            <p><span>猜你喜欢</span><button>换一批</button></p>
            <div>
                <ul>
                    <li v-for="product in products" :key="product.id">
                        <img src="../../public/image/shopcar.jpg" alt="">
                        <p>{{product.name}}</p>
                        <p><span>￥{{product.price}}</span><button>+</button></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pay">
            <p>应付合计: <span>￥{{total}}</span></p><button @click='goToAccount'>去结算</button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                // total:0,
                products:[
                    {id:'1',name:'拿铁',tem:'热',sugar:'全糖',level:'大',price:20,count:1,flag:false},
                    {id:'2',name:'抹茶',tem:'冷',sugar:'少糖',level:'小',price:17,count:1,flag:false},
                    {id:'3',name:'焦糖',tem:'温',sugar:'多糖',level:'中',price:47,count:1,flag:true},
                ]
            }
        },
        computed:{
            total:function(){
                let total=0;
                for(let product of this.products){
                    if(product.flag){
                        total+=product.price*product.count;
                    }
                }
                return total;
            }
        },
        // mounted:function(){
        //     var checkedList=document.querySelectorAll('input');
        //     console.log(checkedList);
        // },
        methods:{
            addCount(product){
                // console.log(product);
                product.count++;
            },
            reduceCount(product){
                product.count--;
                // this.products.splice(1,1);
                // console.log(product.count);
                if(product.count<=0){
                        for(let index in this.products){
                            if(this.products[index].id==product.id){
                                this.products.splice(index,1);
                         }
                    }
                } 
            },
            goToAccount(){
                this.$router.push('/account');
            },
            changeFlag(product){
                // console.log(product);
                product.flag=!product.flag;
            },
            delProduct(product){
                for(let index in this.products){
                    if(this.products[index].id===product.id){
                        this.products.splice(index,1);
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .shoppingcar{
        width: 100%;
        position: relative;
        font-size: 0.3rem;
    }
    li{
        list-style: none;
    }

    .head{
        width: 100%;
        /* height: 50px; */
        background: yellow;
        height: 1rem;
        text-align: center;
        font-size: 0.4rem;
        line-height: 1rem;
    }

    .banner{
        height: 1.5rem;
    }
    .banner img{
        width: 100%;
        height: 100%;
    }

    .products{
        /* height: 600px; */
        /* background: skyblue; */
        margin-bottom: 20px;
    }
    .products ul{
        width: 100%;
    }
    .products ul li{
        font-size: 0.3rem;
        width: 100%;
        display: flex;
        height: 1.5rem;
        padding: 0 0.2rem;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        background: skyblue;
        border-bottom: 1px solid red;
        /* overflow: hidden; */
        
    }
    .products ul li div{
        display: flex;
        align-items: center;
        text-align: center;
    }
    .products ul li input{
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        /* border-radius: 50%; */
        /* border: none; */
    }
    .products ul li button{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: none;
        font-size: 0.3rem;
    }
    .products ul li p:nth-of-type(1){
        width: 60px;
        /* background: yellow; */
    }
    .products ul li p:nth-of-type(2){
        width: 200px;
        /* background: red; */
    }

    .choiceOther{
        height: 5rem;
        background: skyblue;
        margin-bottom: 2.5rem;
        /* padding: 0 10px; */
    }
    .choiceOther > p{
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        
    }
    .choiceOther > p button{
        font-size: 0.3rem;
    }
    .choiceOther ul{
        display: flex;
        justify-content: space-around;
    }
    .choiceOther ul li{
        height: 200px;
        background: yellow;
    }
    .choiceOther ul li p:nth-of-type(1){
        margin-top: 5px;
        padding: 0 5px;
        box-sizing: border-box;
    }
    .choiceOther ul li p:nth-of-type(2){
        margin-top: 10px;
        padding: 0 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .choiceOther ul li p:nth-of-type(2) button{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: none;
    }
    .choiceOther img{
        width: 2rem;
        height: 2rem;
    }

    .pay{
        height: 1.2rem;
        font-size: 0.3rem;
        width: 100%;
        background: white;
        position: fixed;
        bottom: 1rem;
        display: flex;
    }
    .pay p{
        width: 60%;
        line-height: 1.2rem;
        text-indent: 0.4rem;
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        box-sizing: border-box;
    }
    .pay p span{
        font-size: 0.4rem;
    }
    .pay button{
        width: 40%;
        font-size: 0.4rem;
        background: skyblue;
        border: none;
        outline: 0;
    }
</style>