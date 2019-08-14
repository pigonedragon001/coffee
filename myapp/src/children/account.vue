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
                <li v-for="product in products" :key="product.id">
                   <p style="font-weight: bold">{{ product.name }}</p> <p><span style="margin-right: 20px;">×{{ product.count }}</span><span style="font-weight: bold">￥{{product.price}}</span></p>  
                </li>
            </ul>
            <p>合计 <span>￥{{total}}</span></p>
        </div>
        <div class="useMsg">
            <ul>
                <li>使用咖啡钱包</li>
                <li>使用优惠券</li>
                <li>支付方式</li>
            </ul>
            <ul>
                <li>取餐方式</li>
                <li>备注特殊要求</li>
            </ul>
        </div>
        <div class="footPay">
            <p>还需支付<span>￥{{total}}</span></p><button @click='pay'>去支付</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                products:[
                    {id:'1',name:'拿铁',tem:'热',sugar:'全糖',level:'大',price:20,count:1,flag:true},
                    {id:'2',name:'抹茶',tem:'冷',sugar:'少糖',level:'小',price:17,count:1,flag:true},
                    {id:'3',name:'焦糖',tem:'温',sugar:'多糖',level:'中',price:47,count:1,flag:true},
                ]
            }
        },
        methods: {
            gotoBack(){
                this.$router.push('/shoppingcar');
            },
            getAdress(){
                this.$router.push('/getAddress')
            },
            pay(){
                if(confirm("确认支付吗")){
                    this.$router.push('/paymoney?paymoney='+'2222');
                }else{
                    this.$router.push('/shoppingcar');
                }
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
        },
        mounted() {
            let choicedAddress=JSON.parse(localStorage.getItem('choicedAdress'));
            // console.log(choicedAddress);
            if(choicedAddress){
                document.querySelector('.getAdress div').innerHTML=`
                    <p>${choicedAddress.aAddress}</p>
                    <p><span>${choicedAddress.aTel}</span>&emsp;<span>${choicedAddress.aName}</span></p>
                `;
            }
            document.getElementsByClassName("footernav")[0].style.visibility='hidden';
        },
        beforeDestroy() {
            document.getElementsByClassName("footernav")[0].style.visibility='visible';
        },
    }
</script>
<style  scoped>
    .account{
        position: relative;
        width: 100%;
        font-size: 0.3rem;
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
    }
    .head button{
        width: 0.6rem;
        left: 0;
        font-size: 0.6rem;
        border: none;
        margin-left: 0.3rem;
        background:  #fff;
        position: fixed;
    }
    .getMeal{
        height: 1rem;
        background: #fff;
        margin-top: 1rem;
        border-top: 1px solid #333;
        text-align: center;
        line-height: 1rem;
        font-weight: bold
    }

    .getAdress{
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
    .getAdress button{
        width: 2.4rem;
        font-size: 0.4rem;
        border-radius: 0.1rem;
        background: #fff;
        /* outline: none; */
    }

    .getProducts{
        padding-left: 0.2rem;
        background: #fff;
        /* box-sizing: border-box; */
    }
    .getProducts>p:nth-of-type(1){
        line-height: 0.8rem;
        font-weight: bold;
        
    }
    .getProducts ul li{
        height: 1.2rem;
        border-bottom: 1px solid #333;
        display: flex;
        justify-content: space-between;
        padding-right: 0.2rem;
        align-items: center;
    }
    .getProducts>p:nth-of-type(2){
        height: 1rem;
        text-align: right;
        padding-right: 0.2rem;
        line-height: 1rem;
    }
    .getProducts>p:nth-of-type(2) span{
        /* font-size: 24px; */
        font-weight: bolder;
    }

    .useMsg{
        /* font-size: 18px; */
        margin-bottom: 1.6rem;
        margin-top: 0.2rem;
    }
    .useMsg ul{
        padding: 0 10px;
        margin-top: 0.3rem;
        background: #fff;
    }
    .useMsg li{
        height: 1rem;
        border-bottom: 1px solid #333;
        line-height: 1rem;
    }
    .footPay{
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
    .footPay button{
        font-size: 0.4rem;
        height: 100%;
        width: 40%;
    }
</style>