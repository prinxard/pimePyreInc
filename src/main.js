import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import EasySlider from 'vue-easy-slider'
 
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(EasySlider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
