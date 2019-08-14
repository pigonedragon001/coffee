import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);
import home from '../components/Index.vue';
import menu from '../components/Menu.vue';
import order from '../components/Order.vue';
import shoppingcar from '../components/Shoppingcar.vue';
import center from '../components/Center.vue';
import register from '../views/Register.vue';
import login from '../views/Login.vue';
import findpwd from '../views/FindPwd.vue';
import usermsg from '../views/Usermsg.vue';

import allItems from '../children/allItems.vue';
import finishedItems from '../children/finishedItems.vue';
import unfinishedItems from '../children/unfinishedItems.vue';
import account from '../children/account.vue';
import myaddress from '../children/address.vue'
import paymoney from '../children/paymoney.vue'
import productDetail from '../children/productDetail.vue'
import getAddress from '../children/getAddress.vue'

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
            component:order,
            children:[
                {
                    path:'/all',
                    component:allItems
                },
                {
                    path:'/finished',
                    component:finishedItems
                },
                {
                    path:'/unfinished',
                    component:unfinishedItems
                },
                {
                    path:'/order',
                    redirect:'/all'
                },
            ]
                
        },
        
        {
            path:'/productDetail',
            component:productDetail
        },
        {
            path:'/shoppingcar',
            component:shoppingcar,
            // children:[
            //     {
            //         path:'/account',
            //         component:account,
            //     }
            // ]
        },
        {
            path:'/account',
            component:account,
        },
        {
            path:'/getAddress',
            component:getAddress
        },
        {
            path:'/myaddress',
            component:myaddress,
        },
        {
            path:'/paymoney',
            component:paymoney,
        },
        {
            path:'/center',
            component:center
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/findpwd',
            component:findpwd
        },
        {
            path:'/usermsg',
            component:usermsg
        }
    ]
})

export default router;