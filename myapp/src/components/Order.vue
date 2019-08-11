<template>
    <div class="order">
        <div class="head">订单列表</div>
        <div class="items"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: {
                    products: [
                        { id: '1', name: '拿铁', tem: '热', sugar: '全糖', level: '大', price: 20, count: 1 },
                        { id: '2', name: '抹茶', tem: '冷', sugar: '少糖', level: '小', price: 17, count: 1 },
                        { id: '3', name: '焦糖', tem: '温', sugar: '多糖', level: '中', price: 47, count: 1 },
                    ],
                    address:[
                        {user:'张三',place:'武汉',phone:'111111'},
                        {user:'李四',place:'武汉',phone:'111111'},
                        {user:'王五',place:'武汉',phone:'111111'},
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .order {
        width: 100%;
    }

    li {
        list-style: none;
    }

    .head {
        width: 100%;
        height: 50px;
        text-align: center;
        font-size: 24px;
        line-height: 50px;
        background: yellow;
    }
</style>