// 这个文件是用来存放彩蛋的
// (如果是开发者 你可以自行修改彩蛋,如果是普通访客 希望你不要通过这个作弊:D)
import { useToast } from 'vue-toast-notification'

const Toast = useToast({ position: 'top', pauseOnHover: false, duration: 5000 })
let keyCount = 0 // 计数器
// 对应按键 上上下下左右左右BA(魂斗罗秘籍 哈哈XD)
const keyCodeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function handleKeyDown(e) {
    if (keyCount == 9) {
        Toast.success('恭喜你找到一个彩蛋！')
        setTimeout(()=>{
            // 跳转到Never Gonna Give You Up B站页面
            location.href = 'https://b23.tv/hyVVm46'
        },500)
        window.removeEventListener('keydown', handleKeyDown)
        return
    }

    if (keyCodeSequence[keyCount] === e.keyCode) {
        keyCount++
    } else {
        keyCount = 0
    }
}

window.addEventListener('keydown', handleKeyDown)

const log = 
`系统: 已加载(魂斗罗秘籍)
这是什么感觉怪怪的?
试试依次按下 上上下下左右左右BA 这几个键吧
`

console.log(log)