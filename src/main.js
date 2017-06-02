import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/scss/reset.scss"
import "./assets/scss/common.scss"
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
