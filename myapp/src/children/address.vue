<template>
    <div class="addAddress">
        <div class="head"><button @click='gotoBack'>&lt;</button><span>添加地址</span></div>
        <div class="msg">
            <ul>
                <li><span>联系人</span><input ref="name" type="text" placeholder="用于取餐时对您的称呼"></li>
                <li><span>性别</span><input ref="sex" type="text" placeholder="男/女"></li>
                <li><span>手机号</span><input ref="tel" type="text" placeholder="手机号"></li>
                <li><span>地址</span><input  ref="address" type="text" placeholder="请输入您的地址"></li>
                <!-- <li><span>门牌号</span><input type="text" placeholder="例:5号楼203室"></li>
                <li><span>标签</span><input type="text" placeholder="公司/家/学校"></li> -->
            </ul>
        </div>
        <div class="keep">
            <button @click='keepData'>保存</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                myplace:{
                    userid:12121212121,
                    name:null,
                    sex:null,
                    tel:null,
                    address:null
                }
            }
        },
        methods: {
            gotoBack(){
                history.back();
            },
            keepData(){
                // console.log(this.myplace);
                let token='eyJjbGllbnQiOiIxOTIuMTY4LjUyLjk1IiwidXNlclRlbCI6IjE1NjI5MTk3NzExIiwiZGF0ZSI6MTU2NTY5OTExNjEwOX0';
                this.myplace.name=this.$refs.name.value;
                this.myplace.sex=this.$refs.sex.value;
                this.myplace.tel=this.$refs.tel.value;
                this.myplace.address=this.$refs.address.value;
                console.log(this.myplace);
                axios.post('http://192.168.52.95:8080/lc/addAddress',(this.myplace,token)).then((result)=>{
                    console.log(result.data);
                })
            }
        },
        mounted() {
            document.getElementsByClassName("footernav")[0].style.visibility='hidden';

            
        },
        beforeDestroy() {
            document.getElementsByClassName("footernav")[0].style.visibility='visible';
        },
    }
</script>

<style scoped>
    .addAddress{
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

    .msg{
        margin-top: 1rem;
        /* border-top: 1px solid #333; */
    }
    .msg ul{
        padding-left: 10px;
        border-bottom: 1px solid #333;
    }
    .msg ul li{
        height: 1.2rem;
        border-bottom: 1px solid #333;
        /* line-height: 50px; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .msg ul li span{
        display: block;
        width: 1.6rem;
        margin-right: 0.2rem;
    }
    .msg ul li input{
        border: none;
        outline: 0;
        height: 1rem;
        font-size: 0.3rem;
    }

    .keep{
        border-top:1px solid #333; 
        height: 1.2rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: skyblue;
        padding: 0 5%;
        line-height: 1.2rem;
    }
    .keep button{
        height: 0.8rem;
        background: yellow;
        font-size: 0.5rem;
        width: 90%;
        border: none;
    }
</style>