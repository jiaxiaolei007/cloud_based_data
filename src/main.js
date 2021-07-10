import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios.defaults.baseURL='http://152.136.185.210:7878'
// axios.defaults.timeout=5000

// axios.all([axios({
//   url: "/api/m5/home/data",
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }),axios({
//   url:'/api/m5/home/multidata'
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1)
//   console.log(res2)
// }))

// axios({
//   url: 'http://127.0.0.1:5000/'
// }).then(
//   res => console.log(res.data)
// )
