const fs = require('fs')
const path = require('path')

function RemoveDir(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            const curPath = `${path}/${file}`
            if (fs.lstatSync(curPath).isDirectory()) { // 判断是否为文件夹
                RemoveDir(curPath) // 递归删除子文件夹
            } else {
                fs.unlinkSync(curPath) // 删除文件
            }
        })

        fs.rmdirSync(path) // 删除空文件夹
        console.log('已删除:' + path)
    } else {
        console.log('文件不存在！')
    }
}

RemoveDir(path.join(__dirname, '..', './dist'))