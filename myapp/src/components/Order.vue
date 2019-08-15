<template>
    <div class="order">
        <div class="head">订单列表</div>
        <div class="items">
            <ul>
                <li><router-link to="/all">全部</router-link></li>
                <li><router-link to="/unfinished">未完成</router-link></li>
                <li><router-link to="/finished">已完成</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
        <!-- <div class="test">
            <p>测试</p>
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // items: {
                //     num:'12232412112',
                //     time:'2019-08-11 15:02',
                //     products: [
                //         { id: '1', name: '拿铁', tem: '热', sugar: '全糖', level: '大', price: 20, count: 1 },
                //         { id: '2', name: '抹茶', tem: '冷', sugar: '少糖', level: '小', price: 17, count: 1 },
                //         { id: '3', name: '焦糖', tem: '温', sugar: '多糖', level: '中', price: 47, count: 1 },
                //     ],
                //     address:[
                //         {user:'张三',place:'武汉',phone:'111111'},
                //         {user:'李四',place:'武汉',phone:'111111'},
                //         {user:'王五',place:'武汉',phone:'111111'},
                //     ]
                // }
            }
        }
    }
</script>

<style scoped>
    .order {
        width: 100%;
        font-size: 0.3rem;
        background: WhiteSmoke;
    }

    li {
        list-style: none;
    }

    .head {
        width: 100%;
        height: 1rem;
        text-align: center;
        font-size: 0.4rem;
        line-height: 1rem;
        background: #fff;
    }

    .items>ul{
        height: 1.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        border-top: 1px solid #333;
    }

</style>