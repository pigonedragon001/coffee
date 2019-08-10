import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);
import home from '../components/Center.vue';
import menu from '../components/Menu.vue';
import order from '../components/Order.vue';
import shoppingcar from '../components/Shoppingcar.vue';
import center from '../components/Center.vue';


const router=new VueRouter({
    routes:[
        {
            path:'/index',
            component:home
        },
        {
            path:'/menu',
            component:menu
        },
        {
            path:'/order',
            component:order
        },
        {
            path:'/shoppingcar',
            component:shoppingcar
        },
        {
            path:'/center',
            component:center
        },
    ]
})