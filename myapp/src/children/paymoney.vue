<template>
    <div>已付款{{pay}}元</div>
</template>

<script>
    export default {
        data() {
            return {
                pay:0
            }
        },
        mounted() {
            // console.log(this.$route.query.paymoney);
            this.pay=this.$route.query.paymoney;
        },
    }
</script>

<style scoped>
</style>