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
import err from '../views/err.vue';
import mylike from '../views/mylike.vue';

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
        },
        {
            path:'/err',
            component:err
        },
        {
            path:'/mylike',
            component:mylike
        }
    ]
})

export default router;