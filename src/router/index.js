import { createRouter, createWebHashHistory } from 'vue-router'
// 导入组件(动态导入)
const Home = () => import('../views/main.vue')

// 路由列表
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/ban',
    name: 'banlist',
    component: Home,
    meta: {
      title: '封禁列表'
    }
  },
  {
    path: '/rule',
    name: 'rule',
    component: Home,
    meta: {
      title: '条约'
    }
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Home,
    meta: {
      title: '反馈'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Home,
    meta: {
      title: '未知页面'
    },
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = `${to.meta.title} - YunLiuCraft`
  next()
})

export default router