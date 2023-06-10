import { createApp } from 'vue'
import router from './scripts/router'
import './styles/base.css'
import './styles/iconfont.css'
import App from './App.vue'

const app = createApp(App)
app.use(router) // 使用 Vue Router
app.mount('#app')

// 在#app挂载之前引入脚本

window.$WebVersion = 0.1

// 申明信息
console.log(
    `%c Made By GuaiJie %c V${window.$WebVersion} `,
    'color: white; background: #0078E7; padding:5px 0;',
    'padding:4px;border:1px solid #0078E7;'
);