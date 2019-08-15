<template>
    <div class="allItems">
        <ul>
            <li @click="gotoDetail">
                <p><span>自提订单: {{items.num}}</span><span>已取消</span></p>
                <div>
                    <p><span>{{items.address[0].place}}<br>{{items.products[0].name}} 共{{items.total}}件商品</span><span>{{items.time}}</span></p>
                    <p><span>￥{{items.products[0].price*items.products[0].count}}</span><span>再来一单</span></p>
                </div>
            </li>
            <li>
                <p><span>自提订单:{{items.num}}</span><span>已取消</span></p>
                <div>
                    <p><span>{{items.address[0].place}}<br>{{items.products[0].name}} 共{{items.total}}件商品</span><span>{{items.time}}</span></p>
                    <p><span>￥{{items.products[0].price*items.products[0].count}}</span><span>再来一单</span></p>
                </div>
            </li>
            <li>
                <p><span>自提订单:{{items.num}}</span><span>已取消</span></p>
                <div>
                    <p><span>{{items.address[0].place}}<br>{{items.products[0].name}} 共{{items.total}}件商品</span><span>{{items.time}}</span></p>
                    <p><span>￥{{items.products[0].price*items.products[0].count}}</span><span>再来一单</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items: {
                    num:'122324121333312',
                    time:'2019-08-11 15:02',
                    total:6,
                    products: [
                        { id: '1', name: '拿铁', tem: '热', sugar: '全糖', level: '大', price: 20, count: 1 },
                        { id: '2', name: '抹茶', tem: '冷', sugar: '少糖', level: '小', price: 17, count: 1 },
                        { id: '1', name: '焦糖', tem: '温', sugar: '多糖', level: '中', price: 47, count: 1 },
                    ],
                    address:[
                        {user:'张三',place:'金融港店(NO.1591)',phone:'111111'},
                    ]
                }
            }
        },
        mounted() {
            for(let product of this.items.products){
                this.items.total+=product.count
                // console.log(this.items.total);
            }
        },
        methods: {
            gotoDetail(){
                this.$router.push('/productDetail');
            }
        },
    }
</script>
<style scoped>
    .allItems{
        width: 100%;
    }
    .allItems ul{
        margin-top: 0.1rem;
    }
    .allItems li{
        padding: 0 0.2rem;
        background: skyblue;
        margin-bottom: 0.2rem;
    }
    p{
        display: flex;
        justify-content: space-between;
        /* background: red; */
    }
    span{
        display: block;
    }
    .allItems li>p:nth-of-type(1){
        border-bottom: 1px solid #333;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    .allItems li>div>p{
        margin-top: 0.1rem;
    }
    .allItems li>div>p:nth-of-type(2){
        padding-bottom: 0.2rem;
    }
</style>