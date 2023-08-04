import { createApp } from 'vue'
import router from './router'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import './styles/base.less'
import './styles/iconfont.css'
import App from './App.vue'

const app = createApp(App)
app.use(router) // 使用 Vue Router
app.mount('#app') // 挂载#app

// 申明信息
console.log(
    `%c Made By GuaiJie `,
    'color: white; background: #0078E7; padding:5px 0;'
)