<template>
    <div class="getAddress">
        <div class="head"><button @click='gotoBack'>&lt;</button><span>我的地址</span></div>
        <div class="myaddress">
            <p><span>我的收货地址</span><button>管理我的地址</button></p>
            <template>
                <ul>
                    <li v-for="(item, index) in allAdress" :key="index" @click='choiceAdress(item)'>
                        <p>{{item.aAddress}}</p>
                        <p><span>{{item.aTel}}</span>&emsp;<span>{{item.aName}}</span></p>
                    </li>
                </ul>
            </template>

        </div>
        <div class="add">
            <button @click='addAddress'>添加地址</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                allAdress: [

                ],
            }
        },
        methods: {
            addAddress() {
                this.$router.push('myaddress');
            },
            gotoBack() {
                history.back();
            },
            choiceAdress(item){
                // console.log(item);
                localStorage.setItem('choicedAdress',JSON.stringify(item));
                this.$router.push('/account');
            }
        },
        mounted() {
            let token = localStorage.getItem('token');
            let userTel = localStorage.getItem('tel');
            axios.post('/lc/chooseAddress', { userTel, token }).then((result) => {
                // console.log(result.data);
                this.allAdress = result.data.response;
            })
            document.getElementsByClassName('footernav')[0].style.visibility = 'hidden';
        },
        beforeDestroy() {
            document.getElementsByClassName('footernav')[0].style.visibility = 'visible';
        },
    }
</script>

<style scoped>
    .getAddress {
        width: 100%;
        height: 100%;
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

    .myaddress {
        margin-top: 1rem;
        border-top: 1px solid #333;
    }

    .myaddress>p:nth-of-type(1) {
        height: 0.8rem;
        line-height: 0.8rem;
        display: flex;
        justify-content: space-between;
    }

    .myaddress>p:nth-of-type(1) button {
        font-size: 0.3rem;
        border: none;
        background: WhiteSmoke;
        color: blue;
        outline: 0;
    }

    .myaddress ul li {
        border-top: 1px solid #333;
        background: #fff;
    }

    .add {
        border-top: 1px solid #333;
        height: 1.2rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #fff;
        padding: 0 5%;
        line-height: 1.2rem;
    }

    .add button {
        height: 0.8rem;
        font-size: 0.5rem;
        background: yellow;
        line-height: 0.8rem;
        width: 90%;
        border: none;
    }
</style>