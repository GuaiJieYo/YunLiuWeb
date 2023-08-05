<!-- 本页以后可能会重写 -->
<template>
    <div class="banner">
        <img src="/imgs/banner/banner2.jpg" alt="banner">
        <h1>封禁列表</h1>
        <p>此页数据不一定为最新，请以实际为准</p>
    </div>
    <div class="content">
        <h1>封禁列表</h1>
        <div class="search">
            <i class="iconfont icon-x"></i>
            <input type="text" v-model="searchInput" placeholder="输入名字来搜索吧~">
            <i @click="Search" class="iconfont icon-search"></i>
        </div>
        <hr>
        <li v-if="!IsLoaded" class="iconfont icon-loader"></li>
        <ul v-if="IsLoaded">
            <li class="head">
                <p>头像</p>
                <p>ID</p>
                <p>原因</p>
                <p>处理日期</p>
                <p>封禁时长</p>
                <p>封禁者</p>
            </li>
            <li v-for="( item, index) in BannedPlayerInfo" :key="index" :id="item.uuid">
                <p><img :src="`https://minotar.net/helm/${item.uuid}/50`" :title="item.uuid"></p>
                <p>{{ item.name }}</p>
                <p>{{ item.reason }}</p>
                <p>{{ item.created }}</p>
                <p>{{ item.expires }}</p>
                <p>{{ item.source == 'Server' ? '控制台' : item.source }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'

// 默认使Toast位于右上角
const Toast = useToast({ position: 'top-right', pauseOnHover: false })
let IsLoaded = ref(false)
// 储存JSON数据
let BannedPlayerInfo = ref([])
let searchInput = '' // 是input的值默认为空

function Search() {
    if (IsLoaded.value == false) {
        Toast.info('数据还未加载完毕，请稍后重试！')
        return
    }

    if (searchInput == '') {
        Toast.info('搜索不能为空！')
        return
    }

    // TODO 从数组中搜索符合条件的数据进行渲染 或者 将不符合的全部隐藏掉
}

async function getBannedPlayerInfo() {
    await fetch('banned-players.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const info = {
                    "uuid": data[i].uuid,
                    "name": data[i].name,
                    "created": handleTimes(data[i].created),
                    "source": data[i].source,
                    "expires": data[i].expires,
                    "reason": data[i].reason
                }
                BannedPlayerInfo.value.push(info) // 推送至BannedPlayerInfo
            }
            IsLoaded.value = true
        })
        .catch(error => {
            Toast.error('数据获取失败，请检查网络是否连接正常！')
        })

    function handleTimes(time) { // 处理时间格式
        const t = new Date(time)
        const year = t.getFullYear()
        const month = t.getMonth() + 1 // 日期默认是从0开始的所以要加1
        const day = t.getDate()
        const hour = t.getHours().toString().padStart(2, '0')
        const minute = t.getMinutes().toString().padStart(2, '0')
        const second = t.getSeconds().toString().padStart(2, '0') //转换成为两位数

        return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
    }
}

onMounted(() => {
    getBannedPlayerInfo()
    Toast.warning('警告: 本页面尚未完工,可能会出现未知的问题！', { duration: 10000 })
})
</script>

<style lang="less" scoped>
// banner的样式迁移到base.less了(63行)
.content {
    margin: 60px auto;
    padding: 30px;
    width: 80%;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);

    h1 {
        font-size: 3rem;
    }

    .search {
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        input {
            outline-style: none;
            border: none;
            border-bottom: solid 2px;
            background-color: transparent;
            padding: 0 3px;
            font-size: 1.5rem;
            transition: all .3s linear;

            &:focus {
                border-color: #0366d6;
            }

            &:hover {
                border-color: #30a9de;
            }
        }

        i {
            margin: 0 10px;
            font-size: 2rem;
            cursor: pointer;
            transition: all .3s linear;

            &:hover {
                color: #30a9de;
            }
        }
    }

    hr {
        margin: 20px 0;
    }

    .icon-loader {
        margin: 10px;
        font-size: 5rem;
        animation: Roate 3s infinite linear;
    }

    ul {
        .head {
            font-size: 2rem;
        }

        li {
            margin: 10px;
            display: flex;
            align-items: center;
            text-align: left;
            font-size: 1.5rem;

            img {
                width: 50px;
                object-fit: cover;
                border-radius: 5px;
                box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2),
                    0 5px 8px 0 rgba(0, 0, 0, .14);
            }

            p {
                width: 100%; // 设置成100%让他们自己平均分
            }
        }
    }
}
</style>