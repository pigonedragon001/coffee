<template>
    <div class="unfinishedItems">
        <ul>
            <li @click="gotoDetail" v-for="(product, index) in items.products" :key="index">
                <p style="color: rgb(192, 191, 191); font-size:.25rem;"><span>自提订单: {{items.num}}</span>
                    <span>未支付</span>
                </p>
                <div>
                    <p><span style="color:rgb(104, 104, 104)">{{items.address.place}}<br>
                        <span style=" font-size:.25rem; margin-top: .15rem; color: rgb(192, 191, 191);">
                            {{product.orderIdGoodName}} 共{{product.orderGoodNumber}}件商品
                        </span>
                        </span>
                        <span style="color: rgb(192, 191, 191); font-size:.25rem;">{{items.time}}</span>
                    </p>
                    <p>
                        <span style="color:rgb(226, 195, 95)">￥{{product.orderIdUserId}}</span>
                        <span style="border: 1px solid rgb(192, 191, 191); padding: .04rem .12rem; color:rgb(104, 104, 104)">再来一单</span>
                    </p>
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
                    num: '122324121333312',
                    time: '2019-08-11 15:02',
                    total: 6,
                    products: [

                    ],
                    address: 
                        { user: '张三', place: '金融港店(NO.1591)', phone: '111111' },
                    
                }
            }
        },
        mounted() {
            for (let product of this.items.products) {
                this.items.total += product.count
                // console.log(this.items.total);
            }
            let userTel = localStorage.getItem('tel');
            let token = localStorage.getItem('token');
            axios.post('/lc/unCompleteOrder', { userTel, token }).then((result) => {
                console.log(result.data);
                this.items.products = result.data;
            })
        },
        methods: {
            gotoDetail() {
                this.$router.push('/productDetail');
            }
        },
    }
</script>
<style scoped>
    .unfinishedItems {
        width: 100%;
        height: 100%;
        background: WhiteSmoke;
    }

    .unfinishedItems ul {
        margin-top: 0.2rem;
        margin-bottom: 1.5rem;
    }

    .unfinishedItems li {
        padding: 0 0.2rem;
        background: #fff;
        margin-bottom: 0.2rem;
    }

    p {
        display: flex;
        justify-content: space-between;
        /* background: red; */
    }

    span {
        display: block;
    }

    .unfinishedItems li>p:nth-of-type(1) {
        border-bottom: 1px solid rgb(206, 207, 209);
        height: 0.8rem;
        line-height: 0.8rem;
    }

    .unfinishedItems li>div>p {
        margin-top: 0.1rem;
    }

    .unfinishedItems li>div>p:nth-of-type(2) {
        padding-bottom: 0.2rem;
    }
</style>