<template>
    <div class="getAddress">
        <div class="head"><button @click='gotoBack'>&lt;</button><span>我的地址</span></div>
        <div class="myaddress">
            <p><span>我的收货地址</span><button>管理我的地址</button></p>
            <ul>
                <li>地址1</li>
            </ul>
        </div>
        <div class="add">
            <button @click='addAddress'>添加地址</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            addAddress(){
               this.$router.push('myaddress');
            },
            gotoBack(){
                history.back();
            }
        },
        mounted() {
            document.getElementsByClassName('footernav')[0].style.visibility='hidden';
        },
        beforeDestroy() {
            document.getElementsByClassName('footernav')[0].style.visibility='visible';
        },
    }
</script>

<style scoped>
    .getAddress{
        width: 100%;
        font-size: 0.3rem;
    }
    .head{
        display: flex;
        width: 100%;
        justify-content: center;
        height: 1rem;
        background: yellow;
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
        background: yellow;
        position: fixed;
    }

    .myaddress{
        margin-top: 1rem;

    }
    .myaddress > p:nth-of-type(1){
        height: 0.8rem;
        line-height: 0.8rem;
        display: flex;
        justify-content: space-between;
        background: red;
    }
    .myaddress > p:nth-of-type(1) button{
        font-size: 0.3rem;
        border: none;
    }

    .add{
        border-top:1px solid #333; 
        height: 1.2rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: skyblue;
        padding: 0 5%;
        line-height: 1.2rem;
    }
    .add button{
        height: 0.8rem;
        font-size: 0.5rem;
        background: yellow;
        line-height: 0.8rem;
        width: 90%;
        border: none;
    }
</style>