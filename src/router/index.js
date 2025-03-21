import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const Main = () => import('@/views/main/Main.vue')
const Home = () => import('@/views/main/home/Home.vue')
const Study = () => import('@/views/main/study/Study.vue')
const Community = () => import('@/views/main/community/Community.vue')
const User = () => import('@/views/main/user/User.vue')
const Login = () => import('@/views/login/Login.vue')

const routes = [
  {
    path: '/', 
    component: Main,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'study',
        name: 'study',
        component: Study,
      },
      {
        path: 'community',
        name: 'community',
        component: Community,
      },
      {
        path: 'user',
        name: 'user',
        component: User
      },
    ]
  },
  {
    path: '/login', 
    name: 'login', 
    component: Login
  },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router