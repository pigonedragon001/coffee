<template>
    <div class="productDetail">
        <div class="head"><button @click='gotoBack'>&lt;</button><span>订单详情</span></div>
        <div class="msg">
            <p>已取消</p>
            <p>欢迎你再次光临</p>
            <p><button>再来一单</button></p>
        </div>
        <div class="address">
            <p>{{items.address[0].place}}</p>
            <p style="color: rgb(122, 119, 119); font-size:.25rem;">江夏区流芳大道青年公寓二期五栋</p>
        </div>
        <div class="products">
            <p style="color: rgb(122, 119, 119); font-size:.25rem;"><span>自提订单: {{items.num}}</span><span>{{items.time}}</span></p>
            <ul>
                <li v-for="product in items.products" :key="product.id">
                   <p><span style="font-weight: bold;">{{product.name}}</span><span style="font-size: .25rem"><br>{{product.level}}/{{product.sugar}}/{{product.tem}}</span></p> <span>{{product.count}}&emsp;${{product.price}}</span>
                </li>
            </ul>
            <p><span>共{{items.sumCount}}件商品</span><span>实付￥{{items.total}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: {
                    num:'122324121333312',
                    time:'2019-08-11 15:02',
                    total:0,
                    sumCount:0,
                    products: [
                        { id: '1', name: '拿铁', tem: '热', sugar: '全糖', level: '大', price: 20, count: 1 },
                        { id: '2', name: '抹茶', tem: '冷', sugar: '少糖', level: '小', price: 17, count: 1 },
                        { id: '3', name: '焦糖', tem: '温', sugar: '多糖', level: '中', price: 47, count: 1 },
                        { id: '4', name: '焦糖', tem: '温', sugar: '多糖', level: '中', price: 47, count: 1 },
                        { id: '5', name: '焦糖', tem: '温', sugar: '多糖', level: '中', price: 47, count: 1 },
                    ],
                    address:[
                        {user:'张三',place:'金融港店(NO.1591)',phone:'111111'},
                    ]
                }
            }
        },
        methods: {
            gotoBack(){
                history.back();
            }
        },
        mounted() {
            for(let product of this.items.products){
                this.items.total+=product.count*product.price;
                this.items.sumCount+=product.count;
            }
            document.getElementsByClassName("footernav")[0].style.visibility='hidden';
        },
        beforeDestroy() {
            document.getElementsByClassName("footernav")[0].style.visibility='visible';
        },
    }
</script>

<style scoped>
    .productDetail{
        width: 100%;
        font-size:0.3rem;
        height: 100%;
        background: WhiteSmoke;
    }
    .head{
        display: flex;
        width: 100%;
        justify-content: center;
        height: 1rem;
        background: #fff;
        align-items: center;
        position: fixed;
        top: 0px;
        border-bottom: 1px solid #333;
    }
    .head button{
        width: 0.6rem;
        left: 0;
        font-size: 0.6rem;
        border: none;
        margin-left: 0.3rem;
        background: #fff;
        position: fixed;
    }

    .msg{
        margin-top: 1rem;
        padding: 0.2rem;
        height: 2.4rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .msg button{
        width: 2rem;
        font-size: 0.4rem;
    }

    .address{
        height: 1.6rem;
        margin-top: 0.2rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0.2rem 0.8rem 0.2rem 0.2rem;
    }
    /* .address p{
        
    } */

    .products{
        margin-top: 0.2rem;
        background: #fff;
        padding: 0 0.2rem;
    }
    .products>p{
        height: 1rem;
        background: #fff;
        line-height: 1rem;
        display: flex;
        justify-content: space-between;
    }
    .products ul{
        border-top: 1px solid #333;
        border-bottom: 1px solid black;
    }
    .products ul li{
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>