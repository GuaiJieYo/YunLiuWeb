<template>
    <div class="banner">
        <img src="/imgs/1.webp" alt="banner">
        <h1>群聊规则 | 玩家条约</h1>
        <p>此条约不一定为最新，部分信息可能已发生改变，请到QQ群内查看最新条约。</p>
    </div>
    <div class="content">
        <div class="toc">
            <p><i class="iconfont icon-list"></i>目录</p>
            <ul>
                <li @click="tocScrollTo(index)" v-for="(item, index) in toclist" :key="index">{{ item }}</li>
            </ul>
        </div>
        <div class="mdcontent" v-html="Mdcontent"></div>
        <div class="toc" style="right: 5px;left: 0;">
            <p><i class="iconfont icon-folder"></i>文档目录</p>
            <ul>
                <li @click="toggleDoc" class="active">1. 群聊规则</li>
                <li @click="toggleDoc">2. 玩家条约</li>
            </ul>
        </div>
    </div>
    <BackToTop show=".banner" />
</template>
  
<script setup>
import BackToTop from '../components/BackToTop.vue'
import { ref, onMounted } from "vue"
import markdownIt from "markdown-it"
import '../styles/markdown.less'

let Mdcontent = ref(`<h1>文档读取中...<h1>`)
let toclist = ref([])

const Mdrender = new markdownIt()

function renderMarkdown() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', '/rules/YunLiuCraftRules.md', true)
    xhr.onload = function () {
        if (xhr.status === 200) {
            var fileContent = xhr.responseText
            // console.log(Math.round(fileContent.replace(/\n|\r/gi, "").length/100)/10) // 四舍五入出文字数量
            Mdcontent.value = Mdrender.render(fileContent)
            // 将字符串解析为DOM
            const MDdom = new DOMParser().parseFromString(Mdcontent.value, "text/html");
            for (let i = 0; i < MDdom.querySelectorAll('h2').length; i++) {
                toclist.value.push(MDdom.querySelectorAll('h2')[i].innerHTML) // 推送DOM内容至toclist
            }
        }
    }
    xhr.send()
}

function tocScrollTo(id) {
    document.querySelectorAll('#app > main > div.content > div.mdcontent > h2')[id].scrollIntoView({ behavior: 'smooth',block: "center" })
}

function toggleDoc(name) {
    alert('网页施工中....')
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
    overflow: hidden;
    position: relative;

    h1,
    p {
        z-index: 5;
    }

    img {
        filter: brightness(60%);
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}

.content {
    width: 100vw;
    margin: 40px 0;
    display: flex;
    position: relative;

    .toc {
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
                cursor: pointer;

                &.active {
                    color: #0366d6;
                    font-weight: 500;
                }

                &:not(.active):hover {
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
        background-color: #fff;
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
}

// Markdown渲染出来的HTML需要单独写样式 所以请移步至styles/markdown.css
</style>