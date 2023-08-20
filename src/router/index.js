import { createRouter, createWebHistory } from 'vue-router'
import Progress from '../plugins/progress'
// 导入组件(动态导入)
const Home = () => import('../views/root.vue')
const Ban = () => import('../views/ban.vue')
const Rule = () => import('../views/rule.vue')
const FeedBack = () => import('../views/feedback.vue')
const Surprise = () => import('../views/surprise.vue')
const NotFound = () => import('../views/notfound.vue')

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
    component: Ban,
    meta: {
      title: '封禁列表'
    }
  },
  {
    path: '/rule',
    name: 'rule',
    component: Rule,
    meta: {
      title: '条约'
    }
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: FeedBack,
    meta: {
      title: '反馈'
    }
  },
  {
    path: '/surprise',
    name: 'surprise',
    component: Surprise,
    meta: {
      title: '惊喜'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '未知页面'
    },
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用的是历史记录模式 对SEO友善点
  routes
})

router.beforeEach((to, from, next) => {
  Progress.start() // 启用加载条
  window.document.title = `${to.meta.title} - YunLiuCraft`
  scrollTo({ top: 0, behavior: 'smooth' }) // 自动回滚到最顶部
  next()
})

router.afterEach(() => {
  // 关闭加载条
  Progress.close()
})

export default router