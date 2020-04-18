import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from 'js-md5'
import axios from 'axios'
import {Field,Button} from 'vant'
Vue.use(Field).use(Button)

Vue.config.productionTip = false
Vue.prototype.$md5    = md5

Vue.prototype.$axios  = function(method,url,data={}){
  return axios({
    method,
    url,
    data,
    headers:{sessionId:localStorage.getItem('sessionId')}
  }).catch(err=>{
    alert(err)
  })
   
}



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
