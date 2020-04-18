import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'
import Login     from '../views/Login.vue'
import Register  from '../views/Register.vue'
import Edit      from '../views/Edit.vue'
import Work      from '../views/Work.vue'
import List      from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/home/list',
        name: 'list',
        component: List
      },
      {
        path: '/home/work',
        name: 'work',
        component: Work
      },
      {
        path: '/home/edit',
        name: 'edit',
        component: Edit
      },
      {
        path:'/home',
        redirect:'/home/list'
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
