<template>
    <div>
         <p class="p22">
                  <img class="Pimg" @click="ret" src="../../public/image/return.svg" alt="">
                   <span class="meg1">萌小助</span>
         </p>
        
        <div class="errdiv">
             <img class="errImg" src="../../public/image/meg.svg" alt="">
             <p class="errlogin">你还没登陆哦</p>
             <p class="p33" @click="gotologin">去登陆</p>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        var ul=document.getElementsByClassName("footernav")[0];
         ul.style.visibility="hidden";
    },
    beforeDestroy() {
         var ul=document.getElementsByClassName("footernav")[0];
         ul.style.visibility="visible";
    },
    methods: {
         ret(){
            this.$router.go(-1);
        },
        gotologin(){
            this.$router.push('/login')
        }
    },
}
</script>

<style>
    .errdiv{
        width: 100%;
        position: relative;
        margin-top: 1.8rem;
        height: 80%;
    }
    .errImg{
        width: 40%;
        position: absolute;
        left: 30%;
    }
    .errlogin{
        position: absolute;
        width: 30%;
        bottom: -4rem;
        left: 35%;
        color: rgb(119, 112, 112);
        text-align: center
    }
    .p33{
        position: absolute;
        width: 30%;
        bottom: -4.8rem;
        left: 35%;
        text-align: center;
        color: skyblue;
        border: 1px solid skyblue;
        padding: 0.1rem
    }
</style>