<template>
    <div class="account">
        <div class="head"><button @click='gotoBack'>&lt;</button><span>确认订单</span></div>
        <div class="getMeal">
            立即取餐 约11:30可取
        </div>
        <div class="getAdress">
            <div style="font-weight: bold"></div>
            <button @click='getAdress'>选择地址</button>
        </div>
        <div class="getProducts">
            <p>订单信息</p>
            <ul>
                <li v-for="product in products" :key="product.shoppingId">
                    <p style="font-weight: bold">{{ product.goodName }}</p>
                    <p><span style="margin-right: 20px;">×{{ product.shoppingGoodNumber }}</span><span
                            style="font-weight: bold">￥{{product.shoppingGoodPrice}}</span></p>
                </li>
            </ul>
            <p>合计 <span>￥{{total}}</span></p>
        </div>
        <div class="useMsg">
            <ul>
                <li>使用咖啡钱包</li>
                <li class="discount"><span>使用优惠券</span> <span>无</span></li>
                <li class="getMethod"><span>支付方式</span><p><span>微信<input style="width: 0.3rem;height: 0.3rem;" type="radio" name="pay"></span><span>支付宝<input checked style="width: 0.3rem;height: 0.3rem;" type="radio" name="pay"></span></p></li>
            </ul>
            <ul>
                <li>取餐方式:&emsp;商家配送</li>
                <li>备注特殊要求:&emsp;<input class="setMsg" type="text" placeholder="如有其它需要,请填写"> </li>
            </ul>
        </div>
        <div class="footPay">
            <p>还需支付<span style="font-weight: bold">￥{{total}}</span></p><button @click='pay'>去支付</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                total: 0,
                products: [

                ]
            }
        },
        methods: {
            gotoBack() {
                this.$router.push('/shoppingcar');
            },
            getAdress() {
                this.$router.push('/getAddress')
            },
            pay() {
                if (confirm("确认支付吗")) {
                    let token=localStorage.getItem("token")
                    for(let product of this.products){
                        product.orderPay="true";
                    }
                    console.log(this.products);
                    axios.post('lc/AddtoOrderTbServlet', { "list":this.products, "token":token }).then((result) => {
                        console.log(result);
                
                    })
                    this.$router.push('/shoppingcar');
                } else {
                    let token=localStorage.getItem("token")
                    for(let val of this.products){
                        val.orderPay="false";
                    }
                    this.$router.push('/shoppingcar');
                    console.log(this.products);
                    axios.post('lc/AddtoOrderTbServlet', { "list":this.products, "token":token }).then((result) => {
                        console.log(result.data);
                
                    })
                }
            }
        },
        // computed:{
        //     total:function(){
        //         let total=0;

        //         return total;
        //     }
        // },
        mounted() {

            let choicedAddress = JSON.parse(localStorage.getItem('choicedAdress'));
            // console.log(choicedAddress);
            if (choicedAddress) {
                document.querySelector('.getAdress div').innerHTML = `
                    <p>${choicedAddress.aAddress}</p>
                    <p><span>${choicedAddress.aTel}</span>&emsp;<span>${choicedAddress.aName}</span></p>
                `;
            }
            let userTel = localStorage.getItem('tel');
            let token = localStorage.getItem('token');
            axios.post('lc/SettleServlet', { userTel, token }).then((result) => {
                console.log(result.data);
                this.products = result.data;
                for (let product of this.products) {
                    this.total += Number(product.shoppingGoodPrice * product.shoppingGoodNumber);
                }
            })
            document.getElementsByClassName("footernav")[0].style.visibility = 'hidden';
        },
        beforeDestroy() {
            document.getElementsByClassName("footernav")[0].style.visibility = 'visible';
        },
    }
</script>
<style scoped>
    .account {
        position: relative;
        width: 100%;
        font-size: 0.3rem;
        background: WhiteSmoke;
    }

    .head {
        display: flex;
        width: 100%;
        justify-content: center;
        height: 1rem;
        background: #fff;
        align-items: center;
        position: fixed;
        top: 0px;
    }

    .head button {
        width: 0.6rem;
        left: 0;
        font-size: 0.6rem;
        border: none;
        margin-left: 0.3rem;
        background: #fff;
        position: fixed;
    }

    .getMeal {
        height: 1rem;
        background: #fff;
        margin-top: 1rem;
        border-top: 1px solid #333;
        text-align: center;
        line-height: 1rem;
        font-weight: bold
    }

    .getAdress {
        height: 1.6rem;
        width: 100%;
        background: #fff;
        text-align: center;
        /* line-height: 1.6rem; */
        margin-top: 0.2rem;
        border-bottom: 1px solid #333;
        display: flex;
        /* flex-direction: column; */
        justify-content: space-between;
        align-items: center;
    }

    /* .getAdress  p{
        height: 0.5rem;
        background: red;
    } */
    .getAdress button {
        width: 2.4rem;
        font-size: 0.4rem;
        border-radius: 0.1rem;
        background: #fff;
        /* outline: none; */
    }

    .getProducts {
        padding-left: 0.2rem;
        background: #fff;
        /* box-sizing: border-box; */
    }

    .getProducts>p:nth-of-type(1) {
        line-height: 0.8rem;
        font-weight: bold;

    }

    .getProducts ul li {
        height: 1.2rem;
        border-bottom: 1px solid #333;
        display: flex;
        justify-content: space-between;
        padding-right: 0.2rem;
        align-items: center;
    }

    .getProducts>p:nth-of-type(2) {
        height: 1rem;
        text-align: right;
        padding-right: 0.2rem;
        line-height: 1rem;
    }

    .getProducts>p:nth-of-type(2) span {
        /* font-size: 24px; */
        font-weight: bolder;
    }

    .useMsg {
        /* font-size: 18px; */
        margin-bottom: 1.6rem;
        margin-top: 0.2rem;
    }

    .useMsg ul {
        padding: 0 10px;
        margin-top: 0.3rem;
        background: #fff;
    }

    .useMsg li {
        height: 1rem;
        border-bottom: 1px solid #333;
        line-height: 1rem;
        font-size: 0.3rem;
    }
    
    .setMsg{
        height: 0.8rem;
        border: none;
    }

    .discount{
        display: flex;
        padding-right: 0.3rem;
        justify-content: space-between;
        align-items: center;
    }

    .getMethod{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footPay {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        bottom: 0;
        height: 1.2rem;
        background: white;
        padding-left: 0.2rem;
        border-top: 1px solid #333;
        box-sizing: border-box;
        width: 100%;
        /* font-size: 18px; */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .footPay button {
        font-size: 0.4rem;
        background: skyblue;
        height: 100%;
        width: 40%;
    }
</style>