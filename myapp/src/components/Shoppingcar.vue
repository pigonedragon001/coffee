<template>
    <div class="shoppingcar">
        <div class="head">购物车</div>
        <div class="banner"><img src="../../public/image/shopcar-top.jpg" alt="轮播图"></div>
        <div class="products">
            <ul>
                <li v-for="product in products" :key="product.id">
                    <p><input type="checkbox"></p><p>{{ product.name }}<br>{{ product.tem }}/{{ product.sugar }}/{{ product.level }}</p><p>￥{{ product.price }} </p> <button>-</button><p>{{ product.count }}</p><button>+</button> 
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
            <p>应付合计: <span>￥{{total}}</span></p><button>去结算</button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                // total:0,
                products:[
                    {id:'1',name:'拿铁',tem:'热',sugar:'全糖',level:'大',price:20,count:1},
                    {id:'2',name:'抹茶',tem:'冷',sugar:'少糖',level:'小',price:17,count:1},
                    {id:'3',name:'焦糖',tem:'温',sugar:'多糖',level:'中',price:47,count:1},
                ]
            }
        },
        computed:{
            total:function(){
                let total=0;
                for(let product of this.products){
                    total+=product.price*product.count;
                }
                return total;
            }
        }
    }
</script>

<style scoped>
    .shoppingcar{
        width: 100%;
        position: relative;
    }
    li{
        list-style: none;
    }

    .head{
        width: 100%;
        height: 50px;
        text-align: center;
        font-size: 24px;
        line-height: 50px;
    }

    .banner{
        height: 100px;
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
    .products ul li{
        display: flex;
        height: 80px;
        padding: 0 10px;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid red;
    }
    .products ul li input{
        display: block;
        width: 30px;
        height: 30px;
        /* border-radius: 50%; */
        /* border: none; */
    }
    .products ul li button{
        width: 30px;
        height: 30px;
        border-radius: 30px;
        border: none;
        font-size: 16px;
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
        height: 400px;
        padding: 0 10px;
    }
    .choiceOther > p{
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .choiceOther ul{
        display: flex;
        justify-content: space-between;
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
        width: 120px;
        height: 120px;
    }

    .pay{
        height: 80px;
        width: 100%;
        background: yellow;
        position: fixed;
        bottom: 60px;
        display: flex;
    }
    .pay p{
        width: 60%;
        line-height: 80px;
        text-indent: 20px;
        border-top: 1px solid red;
        box-sizing: border-box;
    }
    .pay p span{
        font-size: 24px;
    }
    .pay button{
        width: 40%;
        font-size: 24px;
        background: skyblue;
        border: none;
        outline: 0;
    }
</style>