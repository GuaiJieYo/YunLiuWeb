import NProgress from 'nprogress'
import '../styles/progress.less'

NProgress.configure({ 
    easing: 'ease',  // 动画方式    
    speed: 1000,  // 递增进度条的速度    
    showSpinner: true, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

export const Progress = {
    start: ()=>{// 打开进度条
        NProgress.start()
    },
    close: ()=>{// 关闭进度条
        NProgress.done()
    }
}