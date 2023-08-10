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
		<small>列表可左右滑动</small>
		<div class="search">
			<i @click="Search" class="iconfont icon-search"></i>
			<input @input="e => e.target.value == '' && resetSearch()" type="text" v-model="searchInput"
				@keyup.enter="Search" placeholder="输入名字来搜索吧~">
			<i :class="searchInput == '' ? 'show' : ''" @click="resetSearch" class="iconfont icon-x"></i>
		</div>
		<hr>
		<li v-if="!isLoaded" class="iconfont icon-loader"></li>
		<div class="table">
			<table ref="tableel" v-if="isLoaded">
				<tr class="head">
					<td>头像</td>
					<td>ID</td>
					<td>原因</td>
					<td>处理日期</td>
					<td>封禁时长</td>
					<td>封禁者</td>
				</tr>
				<tr v-if="isSearched" v-for="(sitem, sindex) in searchList" :key="sindex">
					<td><img :src="`https://minotar.net/helm/${sitem.uuid}/50`" :title="sitem.uuid"></td>
					<td>{{ sitem.name }}</td>
					<td>{{ sitem.reason }}</td>
					<td>{{ sitem.created }}</td>
					<td>{{ sitem.expires }}</td>
					<td>{{ sitem.source == 'Server' ? '控制台' : sitem.source }}</td>
				</tr>
				<tr v-if="!isSearched" v-for="( item, index) in BannedPlayerInfo" :key="index" :id="item.uuid">
					<td><img :src="`https://minotar.net/helm/${item.uuid}/50`" :title="item.uuid"></td>
					<td>{{ item.name }}</td>
					<td>{{ item.reason }}</td>
					<td>{{ item.created }}</td>
					<td>{{ item.expires }}</td>
					<td>{{ item.source == 'Server' ? '控制台' : item.source }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script setup>
import BackToTop from '../components/BackToTop.vue'
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'

// 使Toast插件位于页面右上角
const Toast = useToast({ position: 'top-right', pauseOnHover: false })
let isLoaded = ref(false)
let isSearched = ref(false)
// 初始化封禁列表数据
let BannedPlayerInfo = ref([])
var searchInput = ref('') // 初始化搜索输入为空
let searchList = ref([])

function Search() {
	if (!isLoaded.value) {
		Toast.warning('数据还未加载完毕，请稍后重试！')
		return
	}

	if (!searchInput.value) {
		Toast.info('搜索框不能为空！')
		return
	}

	// 根据输入搜索匹配的结果
	const result = BannedPlayerInfo.value.filter(a => new RegExp(searchInput.value, 'i').test(a.name))

	if (result.length) {
		isSearched.value = true
		searchList.value = result
	} else {
		Toast.error('未搜索到内容！请检查内容是否正确！')
	}
}

function resetSearch() {
	// 清空搜索结果
	searchList.value = []
	searchInput.value = ''
	isSearched.value = false
}

function handleTimes(time) {
	const t = new Date(time)
	const year = t.getFullYear()
	const month = t.getMonth() + 1
	const day = t.getDate()
	const hour = t.getHours().toString().padStart(2, '0') // 转换成两位数
	const minute = t.getMinutes().toString().padStart(2, '0') // 转换成两位数
	const second = t.getSeconds().toString().padStart(2, '0') // 转换成两位数

	// 返回格式化后的时间
	return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
}

async function getBannedPlayerInfo() {
	let data = await fetch('banned-players.json')
	data = await data.json()

	// 将数据格式化为需要的结构
	return data.map(item => ({
		"uuid": item.uuid,
		"name": item.name,
		"created": handleTimes(item.created),
		"source": item.source,
		"expires": item.expires,
		"reason": item.reason
	}))
}

onMounted(async () => {
	try {
		// 获取封禁数据
		BannedPlayerInfo.value = await getBannedPlayerInfo()
		isLoaded.value = true
	} catch (error) {
		Toast.error('数据获取失败，请检查网络是否连接正常！')
	}
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

	@media (max-width: 768px) {
		padding: 15px;
	}

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

			@media (max-width: 425px) {
				width: 100%;
				font-size: 1.2rem;
			}

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

			&.show {
				transform: translateX(-5px);
				opacity: 0;
				pointer-events: none;
			}

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

	.table {
		width: 100%;
		overflow: scroll;

		table {
			width: 100%;

			.head {
				font-size: 2rem;
			}

			tr {
				margin: 10px;
				text-align: center;
				font-size: 1.5rem;

				td {
					padding: 3px;
				}

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
}
</style>