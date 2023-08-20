// 这个文件是用来存放彩蛋的
// (如果是开发者 你可以自行修改彩蛋,如果是普通访客 希望你不要通过这个作弊:D)
import { useToast } from 'vue-toast-notification'
import router from '../router'

const Toast = useToast({ position: 'top', pauseOnHover: false, duration: 5000 })
let keyCount = 0 // 计数器
// 对应按键 上上下下左右左右BA(魂斗罗秘籍 哈哈XD)
const keyCodeSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function handleKeyDown(e) {
    if (keyCount == 9) {
        keyCount = 0
        Toast.success('恭喜你找到一个彩蛋！')
        setTimeout(() => {
            // 跳转到Never Gonna Give You Up页面 
            router.push('/surprise')
            window.removeEventListener('keydown', handleKeyDown)
        }, 500)
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
`恭喜你找到个彩蛋！回到当前访问的页面依次按下 上 上 下 下 左 右 左 右 B A 即可解锁彩蛋！
https://www.yunliucraft.cn/surprise
这个链接里面有惊喜！
`

console.log(log)