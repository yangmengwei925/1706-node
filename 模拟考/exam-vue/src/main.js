import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//封装axios
import axios from 'axios'
Vue.prototype.$axios = (method,url,data={})=>{
  return axios({
    method,
    url,
    data,
    headers:{
      authorToken:localStorage.getItem('token')
    }
  })
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
