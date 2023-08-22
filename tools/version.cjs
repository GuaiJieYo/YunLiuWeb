// 获取一些git信息
const git = require('git-rev-sync')
const fs = require('fs')
const path = require('path')

const CommitID = git.long() // 最新的commit id
const ShortCommitID = git.short() // 获取7位commit id
const Time = new Date(git.date()) // 获取提交的时间
Time.setUTCHours(Time.getUTCHours() + 8)// 转换为UTC+8时区
const FormattedDate = Time.toISOString().replace('T', ' ').slice(0, -5) // 格式化后的时间
const Message = git.message() // 获取提交的信息
const GithubUrl = 'https://github.com/GuaiJieYo/YunLiuWeb/commit/' + CommitID // Github的commit页

const env = 
`VITE_id=${CommitID}
VITE_sid=${ShortCommitID}
VITE_date=${FormattedDate}
VITE_message=${Message}
VITE_url=${GithubUrl}`

fs.writeFile(path.join(__dirname, '..', '.env'), env, (err) => {
    if (err) {
        console.error('环境变量写入错误:', err)
        return
    }
    console.log('环境变量写入成功')
}) // 将版本写入环境变量里