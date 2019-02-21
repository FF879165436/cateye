import Vue from 'vue'
import App from './App.vue'
import Observer from './observer';
Vue.prototype.Observer = Observer;
import './common/js/flexble';
import './common/css/reset.css';
// import '../static/iconfont/iconfont.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
