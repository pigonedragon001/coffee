<template>
    <div class="shoppingcar">
        <div class="head">购物车</div>
        <div class="banner"><img src="../../public/image/shopcar-top.jpg" alt="轮播图"></div>
        <div class="products">
            <ul>
                <li v-for="product in products" :key="product.id">
                    <p><input type="checkbox" :checked='product.shoppingChecked' @click='changeFlag(product)'></p>
                    <p>{{ product.goodName }}<br>{{ product.shoppingGoodTemperture }}/{{ product.shoppingGoodSweet }}/{{ product.shoppingGoodSize }}
                    </p>
                    <p>￥{{ product.shoppingGoodPrice }} </p>
                    <div><button @click="reduceCount(product)">-</button>
                        <p>{{ product.shoppingGoodNumber }}</p><button @click="addCount(product)">+</button>
                    </div><button @click='delProduct(product)'>×</button>
                </li>
            </ul>
        </div>
        <div class="choiceOther">
            <p><span>猜你喜欢</span><button @click='changeProducts'>换一批</button></p>
            <div>
                <ul>
                    <li v-for="product in guessYouLike" :key="product.id">
                        <img :src="product.goodImgPath" alt="">
                        <p>{{product.goodName}}</p>
                        <p><span>￥{{product.goodPrice}}</span><button>+</button></p>
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
    import axios from 'axios';
    export default {
        data() {
            return {
                // total:0,
                products: [
                    // {id:'1',name:'拿铁',tem:'热',sugar:'全糖',level:'大',price:20,count:1,flag:false},
                    // {id:'2',name:'抹茶',tem:'冷',sugar:'少糖',level:'小',price:17,count:1,flag:false},
                    // {id:'3',name:'焦糖',tem:'温',sugar:'多糖',level:'中',price:47,count:1,flag:true},
                ],
                guessYouLike: [],
            }
        },
        computed: {
            total: function () {
                let total = 0;
                for (let product of this.products) {
                    if (product.shoppingChecked) {
                        total += product.shoppingGoodPrice * product.shoppingGoodNumber;
                    }
                }
                return total;
            }
        },
        mounted: function () {
            // var checkedList=document.querySelectorAll('input');
            // console.log(checkedList);
            let userTel = localStorage.getItem('tel');
            let token = localStorage.getItem('token');
            axios.post('/lc/clickShoppingCart', { userTel, token }).then((result) => {
                console.log(result.data);
                this.guessYouLike = result.data.guessYouLike;
                this.products = result.data.addToShopping;
            })
        },
        methods: {
            addCount(product) {
                console.log(product);
                product.shoppingGoodNumber++;
                let goodName=product.goodName;
                let shoppingGoodSize=product.shoppingGoodSize;
                let shoppingGoodSweet=product.shoppingGoodSweet;
                let shoppingGoodTemperture=product.shoppingGoodTemperture;
                let userTel = localStorage.getItem('tel');
                let token=localStorage.getItem('token');
                axios.post('/lc/addPlusShoppingCart',{userTel,token,goodName,shoppingGoodSize,shoppingGoodSweet,shoppingGoodTemperture}).then((result)=>{
                    console.log(result.data);
                })
            },
            reduceCount(product) {
                product.shoppingGoodNumber--;
                // this.products.splice(1,1);
                // console.log(product.count);
                if (product.shoppingGoodNumber <= 0) {
                    for (let index in this.products) {
                        if (this.products[index].shoppingId == product.shoppingId) {
                            this.products.splice(index, 1);
                        }
                    }
                }
                let goodName=product.goodName;
                let shoppingGoodSize=product.shoppingGoodSize;
                let shoppingGoodSweet=product.shoppingGoodSweet;
                let shoppingGoodTemperture=product.shoppingGoodTemperture;
                let userTel = localStorage.getItem('tel');
                let token=localStorage.getItem('token');
                axios.post('/lc/subPlusShoppingCartServlet',{userTel,token,goodName,shoppingGoodSize,shoppingGoodSweet,shoppingGoodTemperture}).then((result)=>{
                    console.log(result.data);
                })
            },
            goToAccount() {
                let tel=localStorage.getItem('tel');
                if(tel){
                    this.$router.push('/account');
                }else{
                    this.$router.push('/err');
                }
            },
            changeFlag(product) {
                product.shoppingChecked = !product.shoppingChecked;
                // console.log(product.shoppingChecked);
                let shoppingChecked=product.shoppingChecked;
                let goodName=product.goodName;
                let shoppingGoodSize=product.shoppingGoodSize;
                let shoppingGoodSweet=product.shoppingGoodSweet;
                let shoppingGoodTemperture=product.shoppingGoodTemperture;
                let userTel = localStorage.getItem('tel');
                let token=localStorage.getItem('token');
                axios.post('/lc/PitchOnGood',{userTel,token,goodName,shoppingGoodSize,shoppingGoodSweet,shoppingGoodTemperture,shoppingChecked}).then((result)=>{
                    console.log(result.data);
                })
            },
            delProduct(product) {
                for (let index in this.products) {
                    if (this.products[index].shoppingId === product.shoppingId) {
                        this.products.splice(index, 1);
                    }
                }
                let shoppingId=product.shoppingId;
                let userTel = localStorage.getItem('tel');
                let token=localStorage.getItem('token');
                axios.post('/lc/deleteShoppingCart',{shoppingId,token}).then((result)=>{
                    console.log(result.data);
                })
            },
            changeProducts() {
                let userTel = localStorage.getItem('tel');
                let token = localStorage.getItem('token');
                axios.post('/lc/GuessYouLike', { userTel, token }).then((result) => {
                    console.log(result.data);
                    this.guessYouLike=result.data;
                })
            }
        }
    }
</script>

<style scoped>
    .shoppingcar {
        width: 100%;
        position: relative;
        font-size: 0.3rem;
        background: WhiteSmoke;
    }

    li {
        list-style: none;
    }

    .head {
        width: 100%;
        /* height: 50px; */
        background: #fff;
        height: 1rem;
        text-align: center;
        font-size: 0.4rem;
        line-height: 1rem;
    }

    .banner {
        height: 1.5rem;
    }

    .banner img {
        width: 100%;
        height: 100%;
    }

    .products {
        /* height: 600px; */
        /* background: skyblue; */
        margin-bottom: 20px;
    }

    .products ul {
        width: 100%;
    }

    .products ul li {
        font-size: 0.3rem;
        width: 100%;
        display: flex;
        height: 1.5rem;
        padding: 0 0.2rem;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        background: #ffffff;
        border-bottom: 1px solid red;
        /* overflow: hidden; */

    }

    .products ul li div {
        display: flex;
        width: 2.5rem;
        justify-content: space-around;
        align-items: center;
        text-align: center;
    }

    .products ul li input {
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        /* border-radius: 50%; */
        /* border: none; */
    }

    .products ul li button {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: none;
        font-size: 0.3rem;
    }

    .products ul li>p:nth-of-type(1) {
        width: 1.2rem;
        /* background: yellow; */
    }

    .products ul li>p:nth-of-type(2) {
        width: 4rem;
        ;
        /* background: red; */
    }

    .choiceOther {
        height: 4.5rem;
        /* background: Gainsboro; */
        padding-bottom: 3rem;
        /* padding: 0 10px; */
    }

    .choiceOther>p {
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;

    }

    .choiceOther>p button {
        font-size: 0.3rem;
        border: none;
        background: none;
        outline: none;
        color: blue;
    }

    .choiceOther ul {
        display: flex;
        justify-content: space-around;
    }

    .choiceOther ul li {
        height: 3.8rem;
        background-color: #fff;
        border-radius: 5px;
    }

    .choiceOther ul li p:nth-of-type(1) {
        width: 2rem;
        height: 0.8rem;
        overflow: hidden;
        margin-top: 5px;
        padding: 0 5px;
        box-sizing: border-box;
    }

    .choiceOther ul li p:nth-of-type(2) {
        margin-top: 10px;
        padding: 0 5px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .choiceOther ul li p:nth-of-type(2) button {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: none;
        font-size: 0.3rem;
    }

    .choiceOther img {
        width: 2rem;
        height: 2rem;
    }

    .pay {
        height: 1.2rem;
        font-size: 0.3rem;
        width: 100%;
        background: white;
        position: fixed;
        bottom: 1rem;
        display: flex;
    }

    .pay p {
        width: 60%;
        line-height: 1.2rem;
        text-indent: 0.4rem;
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        box-sizing: border-box;
    }

    .pay p span {
        font-size: 0.4rem;
    }

    .pay button {
        width: 40%;
        font-size: 0.4rem;
        background: skyblue;
        border: none;
        outline: 0;
    }
</style>