<!-- 本页以后可能会重写 -->
<template>
  <BackToTop />
  <div class="banner">
    <img src="/imgs/banner/banner2.jpg" alt="banner">
    <h1>封禁列表</h1>
    <p>此页数据不一定为最新，请以实际为准</p>
  </div>
  <div class="content">
    <h1>封禁列表</h1>
    <div class="search">
      <i @click="Search" class="iconfont icon-search"></i>
      <input type="text" @input="Inputvalue" v-model="searchInput" @keyup.enter="Search" placeholder="输入名字来搜索吧~">
      <i @click="clearInput" class="iconfont icon-x"></i>
    </div>
    <hr>
    <li v-if="!IsLoaded" class="iconfont icon-loader"></li>
    <table ref="tableel" v-if="IsLoaded">
      <tr class="head">
        <td>头像</td>
        <td>ID</td>
        <td>原因</td>
        <td>处理日期</td>
        <td>封禁时长</td>
        <td>封禁者</td>
      </tr>
      <tr v-for="( item, index) in BannedPlayerInfo" :key="index" :id="item.uuid">
        <td><img :src="`https://minotar.net/helm/${item.uuid}/50`" :title="item.uuid"></td>
        <td>{{ item.name }}</td>
        <td>{{ item.reason }}</td>
        <td>{{ item.created }}</td>
        <td>{{ item.expires }}</td>
        <td>{{ item.source == 'Server' ? '控制台' : item.source }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import BackToTop from '../components/BackToTop.vue'
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'

// 默认使Toast位于右上角
const Toast = useToast({ position: 'top-right', pauseOnHover: false })
let IsLoaded = ref(false)
// 储存JSON数据
let BannedPlayerInfo = ref([])
var searchInput = ref('') // 是input的值默认为空
let tableel = ref() // 获取table dom

function Search() {
  if (IsLoaded.value == false) {
    Toast.info('数据还未加载完毕，请稍后重试！')
    return
  }

  if (searchInput.value == '') {
    Toast.info('搜索不能为空！')
    return
  }

  const object = BannedPlayerInfo.value.find(a => new RegExp(`^${searchInput.value}$`, 'i').test(a.name)) // 获取出名字对应的对象(忽略大小写)

  if (object == undefined) {
    Toast.info('没有搜索到此玩家，请输入正确的ID！')
    searchInput.value = ''
    return
  }

  const el = tableel.value.querySelectorAll('tr')
  // 遍历所有元素
  for (let i = 0; i < el.length; i++) {
	// 重置元素
	el[i].style.display = ''
    if (el[i].id !== object.uuid && el[i].className !== 'head') {
      // 隐藏元素
      el[i].style.display = 'none'
    }
  }
}

function clearInput() {
  searchInput.value = '' // 清空input框
  const el = tableel.value.querySelectorAll('[style="display: none;"]')
  // 遍历所有元素
  for (let i = 0; i < el.length; i++) {
    // 显示所有的元素
    el[i].style.display = ''
  }
}

// 判断input框是否为空 如果为空则显示被隐藏的元素
function Inputvalue(e) {
	if (e.target.value == '') {
		clearInput()
	}
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
  Toast.warning('警告: 本页面尚未完工,可能会出现未知的问题！')
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
      width: 300px;
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

  table {
    width: 100%;

    .head {
      font-size: 2rem;
    }

    tr {
      border: solid 1px #000;
      margin: 10px;
      text-align: center;
      font-size: 1.5rem;

      img {
        width: 50px;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2),
          0 5px 8px 0 rgba(0, 0, 0, .14);
      }
    }
  }
}
</style>