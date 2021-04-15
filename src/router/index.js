import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import Recover from '../views/Recover.vue'
import Code from '../views/Code.vue'
import axios from 'axios'

Vue.use(VueRouter)

function AdminAuth(to, from, next) {
  if (localStorage.getItem('token') != undefined) {
    let request = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }

    axios.post("http://localhost:8686/validate", {}, request).then(response => {
      console.log(response)
      next();

    }).catch(error => {
      console.log(error.data)
      next("/login");

    })

  }else {
    next("/login");

  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },{
    path:'/recover',
    name:'Recover',
    component:Recover
  },
  {
    path:'/recover/code',
    name:'Code',
    component:Code
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    beforeEnter:AdminAuth
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
