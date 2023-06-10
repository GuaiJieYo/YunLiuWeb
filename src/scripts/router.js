import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件
import Home from '../components/main.vue'

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
})

export default router
