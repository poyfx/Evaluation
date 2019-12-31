import Vue from 'vue'
import App from './App'
import './common/css/base.css'
import store from '@/store/index.js'
 import uniIcons from './components/uni-icons/uni-icons.vue'
 Vue.component('uniIcons',uniIcons)
 import titles from './components/title.vue'
 Vue.component('titles',titles)
 Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
