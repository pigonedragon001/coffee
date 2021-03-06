import Vue from 'vue'
import vuex from 'vuex';
import App from './App.vue';
import router from './route/router';

//mintUI 配置引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


//Vant 配置引入
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//NUT UI 配置引入
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

NutUI.install(Vue);

import ElementUI from 'element-ui';
Vue.use(ElementUI);
import store from './store/store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
