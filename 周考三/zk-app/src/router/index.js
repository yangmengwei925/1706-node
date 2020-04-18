import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    children:[
      {
        path:'/home/my',
        name:'my',
        component:()=>import('../views/my.vue')
      }
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },{
    path: '/re',
    name: 're',
    component: () => import('../views/re.vue')
  },
  {
    path:'/',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
