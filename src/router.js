import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:cat',
      name: 'category',
      component: Home
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: Home
    },
    {
      path: '/blog/:slug',
      name: 'blog',
      component: Blog
    }
  ]
})
