<template>
    <div class="banner">
        <img src="/imgs/banner/banner3.jpg" alt="banner">
        <h1>群聊规则 | 玩家条约</h1>
        <p>{{ Txtlength }}</p>
        <p>此条约不一定为最新，部分信息可能已发生改变，请到QQ群内查看最新条约。</p>
    </div>
    <div class="content">
        <div class="toc">
            <p><i class="iconfont icon-folder"></i>文档目录</p>
            <ul ref="Folderel">
                <li @click="toggleDoc" class="active">1. 群聊规则</li>
                <li @click="toggleDoc">2. 玩家条约</li>
            </ul>
            <hr>
            <p><i class="iconfont icon-list"></i>目录</p>
            <ul>
                <li v-if="IsLoaded" class="iconfont icon-loader"></li>
                <li @click="tocScrollTo(index)" v-for="(item, index) in toclist" :key="index">{{ item }}</li>
            </ul>
        </div>
        <div class="mdcontent" v-html="Mdcontent"></div>
    </div>
    <BackToTop show=".banner" />
</template>
  
<script setup>
import BackToTop from '../components/BackToTop.vue'
import { ref, onMounted } from "vue"
import markdownIt from "markdown-it"
import '../styles/markdown.less'

let Mdcontent = ref(`<h1>文档读取中...</h1><div class="iconfont icon-loader" style="width: fit-content;margin: 10px auto;font-size: 5rem;animation: Roate 3s infinite linear;"></div>`)
let toclist = ref([])
let Folderel = ref(null)
let IsLoaded = ref(true)
let Docname = 'Group'
let Txtlength

const Mdrender = new markdownIt()

function renderMarkdown() {
    // 显示Loader 清空toc列表
    toclist.value = []
    Mdcontent.value = `<h1>文档读取中...</h1><div class="iconfont icon-loader" style="width: fit-content;margin: 10px auto;font-size: 5rem;animation: Roate 3s infinite linear;"></div>`
    IsLoaded.value = true
    // 异步加载文档文件
    fetch(`/rules/YunLiuCraft${Docname}Rules.md`)
        .then(response => response.text())
        .then((data) => {
            Txtlength = `本篇文档约 ${Math.round(data.replace(/\n|\r/gi, "").length / 100) / 10}K 字` // 四舍五入出文字数量
            Mdcontent.value = Mdrender.render(data)
            // 将字符串解析为DOM
            const MDdom = new DOMParser().parseFromString(Mdcontent.value, "text/html")
            for (let i = 0; i < MDdom.querySelectorAll('h2').length; i++) {
                toclist.value.push(i + 1 + '. ' + MDdom.querySelectorAll('h2')[i].innerHTML) // 推送DOM内容至toclist 
            }
            // 加载完毕隐藏loader
            IsLoaded.value = false
        })
}

// 滚动到某个元素处
function tocScrollTo(id) {
    document.querySelectorAll('#app > main > div.content > div.mdcontent > h2')[id].scrollIntoView({ behavior: 'smooth', block: "center" })
}

// 切换doc
function toggleDoc(e) {
    if (e.target.classList == 'active') {
        return
    }
    document.querySelector('.mdcontent').scrollIntoView(true,{ behavior: 'smooth'})
    Folderel.value.querySelector('.active').classList = ''
    if (Docname == 'Group') {
        Folderel.value.querySelectorAll('li')[1].classList = 'active'
        Docname = 'Game'
    } else {
        Folderel.value.querySelectorAll('li')[0].classList = 'active'
        Docname = 'Group'
    }
    renderMarkdown()
}

onMounted(() => {
    renderMarkdown()
})
</script>

<style lang="less" scoped>
.banner {
    width: 100vw;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-align: center;
    overflow: hidden;
    position: relative;

    h1,
    p {
        z-index: 5;
    }

    img {
        filter: brightness(60%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}

.content {
    width: 100vw;
    margin: 40px 0;
    display: flex;
    justify-content: center;
    position: relative;

    @media (max-width: 425px) {
        flex-wrap: wrap;
    }

    .toc {
        @media (max-width: 768px) {
            width: 100px;
        }

        @media (max-width: 425px) {
            position: unset;
            padding: 40px;
            width: 60vw;
            border-radius: 20px;
            margin-bottom: 20px;
        }

        transition: all .3s;
        position: sticky;
        top: 120px;
        left: 5px;
        width: 200px;
        height: fit-content;
        padding: 10px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);

        p {
            @media (max-width: 768px) {
                font-size: 1.1rem;
            }

            font-size: 1.5rem;

            i {
                margin-right: 5px;
            }
        }

        ul {
            list-style: none;

            li {
                border-radius: 5px;
                color: #000;
                transition: all .3s;
                margin: 5px 0;
                width: fit-content;
                cursor: pointer;

                &.icon-loader {
                    margin: 10px auto;
                    font-size: 5rem;
                    animation: Roate 3s infinite linear;
                }

                &.active {
                    color: #0366d6;
                    font-weight: 500;
                }

                &:not(.active, .icon-loader):hover {
                    color: #30a9de;
                    font-weight: 500;
                }
            }
        }
    }

    .mdcontent {
        margin: auto;
        border-radius: 20px;
        padding: 40px;
        width: 60vw;
        // 为了防止闪屏才设置的minheight
        min-height: 100vh;
        background-color: #fff;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
}

// Markdown渲染出来的HTML需要单独写样式scoped显示不出来 所以请移步至styles/markdown.css
</style>