<template>
<div>
    <div style="height: 3rem">
    <mt-swipe :show-indicators="false">
        <mt-swipe-item><img src="../assets/092256pfabb5dfx4aic2jt.jpg" alt="" class="lunboimg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/5bc0575c5ef17.jpg" alt="" class="lunboimg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/20180920161429_Jh8FP.jpeg.jpg" alt="" class="lunboimg"></mt-swipe-item>
    </mt-swipe>
    <ul class="message1" style="font-size: .35rem;">
      
      <li>
        <div class="shouyelebiao">
          <p>金融港店</p>
          <span>距您645m</span>
        </div>
        <div class="kaiguan">
          <!-- <img style="position:absolute;width:30px;height:30px;right:20px;top:7.5px" src="../../public/image/more.svg" alt=""> -->
          <mt-switch v-model="value" style="margin-top: .3rem; width:1rem;"></mt-switch>
        </div>
      </li>
      <li>
        <router-link to="/menu">
        <div class="shouyelebiao">
          <p>现在下单</p>
          <span>ORDER NOW</span>
        </div>
        <div style="width:100%;">
          <img style="position:absolute;width:.6rem;height:.6rem;right:.4rem;top:.14rem" src="../../public/image/more.svg" alt="">
        </div>
        </router-link>
      </li>
      <li>
        <div class="shouyelebiao">
          <p>咖啡钱包</p>
          <span>COFFEE WALLET</span>
        </div>
        <div>
          <img style="position:absolute;width:.6rem;height:.6rem;right:.4rem;top:.14rem" src="../../public/image/more.svg" alt="">
        </div>
      </li>
      <li>
        <div class="shouyelebiao">
          <p>送他咖啡</p>
          <span>SEND COFFEE</span>
        </div>
        <div>
          <img style="position:absolute;width:.6rem;height:.6rem;right:.4rem;top:.14rem" src="../../public/image/more.svg" alt="">
        </div>
      </li>
      <li>
        <div class="shouyelebiao">
          <p>企业账户</p>
          <span>ENTERPRISE ACCOUNT</span>
        </div>
        <div>
          <img style="position:absolute;width:.6rem;height:.6rem;right:.4rem;top:.14rem" src="../../public/image/more.svg" alt="">
        </div>
      </li>
    </ul>
  </div>

</div>
  
</template>

<script>


export default {
 
}
</script>

<style>
  .lunboimg{
      width: 100%;
  }
  .message1>li{
        box-sizing: border-box;
        width:100%;
        height:1.5rem;
        padding:.15rem;
        background: white;
        position: relative;
        list-style: none;
        border-bottom: 1px solid gainsboro
    }
  .shouyelebiao{
    width: 50%;
    margin-top: .1rem;
    float: left;
  }
  .shouyelebiao>span{
    font-size: .2rem;
    color: rgb(141, 141, 141);
  }
  .mint-switch{
    
    float: right;
  }
</style>
