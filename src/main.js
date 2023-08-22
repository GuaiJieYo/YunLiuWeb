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

// 创建Vue应用程序实例
const app = createApp(App)

// 使用Vue Router插件
app.use(router)

// 使用Vue懒加载插件
app.use(VueLazyLoad, {
    loading: LoadingImg,
    error: ErrorImg
})

// 设置全局变量
app.config.globalProperties.$version = {
    id: import.meta.env.VITE_id,
    sid: import.meta.env.VITE_sid,
    date: import.meta.env.VITE_date,
    message: import.meta.env.VITE_message,
    url: import.meta.env.VITE_url
}

// 挂载应用程序到DOM元素上
app.mount('#app')

// 打印版本和信息
console.log(
    `%c Made By GuaiJie %c Version: ${import.meta.env.VITE_sid}`,
    'color: white; background: #0078E7; padding:5px 0;',
    'color: #000; padding:5px 0;'
)

console.log(
    `%c当前版本ID: ${import.meta.env.VITE_sid} \n` +
    `版本CommitID: ${import.meta.env.VITE_id} \n` +
    `更新内容: ${import.meta.env.VITE_message} \n` +
    `更新时间: ${import.meta.env.VITE_date} \n` +
    `项目地址: ${import.meta.env.VITE_url}`,
    'padding: 2px;',
)