import Vue from 'vue'
import App from './App.vue'
import router from './route/router';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import ElementUI from 'element-ui';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
