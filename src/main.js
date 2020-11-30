import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import filter from './filter/filter'
import toast from './components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'


Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

FastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: require("assets/images/common/placeholder.png")
})
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

import 'swiper/swiper-bundle.css'
import './plugins/vant.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')