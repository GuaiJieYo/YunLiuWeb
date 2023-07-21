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
    path: '/join',
    name: 'join',
    component: Home,
    meta: {
      title: '加入我们'
    }
  },
  {
    path: '/rule',
    name: 'rule',
    component: Home,
    meta: {
      title: '规则'
    }
  },
  {
    path: '/help',
    name: 'help',
    component: Home,
    meta: {
      title: '帮助'
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