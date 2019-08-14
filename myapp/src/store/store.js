import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

const store=new vuex.Store({
    state:{
        token:window.localStorage.getItem('token'),
    },
    mutations:{
        LOGIN:(state,data)=>{
            state.token=data;
            window.localStorage.setItem('token',data)
        }
    },

})
export default store;