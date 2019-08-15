<template>
    <div class="allItems">
        <ul>
            <li @click="gotoDetail" v-for="(product, index) in items.products" :key="index">
                <p><span>自提订单: {{items.num}} </span>
                    <template v-if="product.orderPay==='true'">
                        <span>已支付</span>
                   </template> 
                   <template v-else>
                        <span>未支付</span>
                  </template> 
                </p>
                <div>
                    <p><span>{{items.address.place}}<br>{{product.orderIdGoodName}} 共{{product.orderGoodNumber}}件商品</span><span>{{items.time}}</span></p>
                    <p><span>￥{{product.orderIdUserId}}</span><span>再来一单</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                items: {
                    num:'122324121333312',
                    time:'2019-08-11 15:02',
                    total:6,
                    products: [
                       
                    ],
                    address: {user:'张三',place:'金融港店(NO.1591)',phone:'111111'}, 
                }
            }
        },
        mounted() {
            for(let product of this.items.products){
                this.items.total+=product.count
                // console.log(this.items.total);
            }
            let userTel = localStorage.getItem('tel');
            let token = localStorage.getItem('token');
            axios.post('/lc/allOrder', { userTel, token }).then((result) => {
                console.log(result.data);
                this.items.products=result.data;
            })
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
        margin-top: 0.2rem;
        margin-bottom: 1.5rem;
    }
    .allItems li{
        padding: 0 0.2rem;
        margin-bottom: 0.2rem;
        background: #fff;
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