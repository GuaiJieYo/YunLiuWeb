import { createApp } from 'vue'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import './styles/base.less'
import './styles/iconfont.css'
import App from './App.vue'
// 图片
import LoadingImg from './imgs/loading.svg'
import ErrorImg from './imgs/error.svg'

const app = createApp(App)
app.use(router) // 使用 Vue Router
app.use(VueLazyLoad, {
    loading: LoadingImg,
    error: ErrorImg
}) // 加载懒加载插件
app.mount('#app') // 挂载#app

// 申明信息
console.log(
    `%c Made By GuaiJie `,
    'color: white; background: #0078E7; padding:5px 0;'
)