<template>
    <header :class="headerBg">
        <div class="header">
            <div class="left">
                <router-link to="/" class="logo">
                    <i class="iconfont icon-cloud"></i>
                    <p>YunLiuCraft</p>
                </router-link>
                <i ref="btn" @click="toggleMenu" class="iconfont icon-list btn"></i>
            </div>
            <div v-if="mask" @click="toggleMenu" class="mask"></div>
            <div class="right" :style="`right:${showRouter}`">
                <div style="width: fit-content" v-for="(item, index) in navList" :key="index">
                    <router-link exact-active-class="active" :to="item.link">
                        <i class="iconfont" :class="item.icon"></i>
                        {{ item.title }}
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerBg = ref('') // 头部样式类名，用于控制头部背景
const mask = ref(false)
let showRouter = ref('-160px') // 隐藏导航
let btn = ref()

function toggleMenu() {
    if (showRouter.value == '-160px') {
        showRouter.value = '0'
        mask.value = true
        btn.value.classList.remove('icon-list')
        btn.value.classList.add('icon-x')
    } else {
        showRouter.value = '-160px'
        mask.value = false
        btn.value.classList.remove('icon-x')
        btn.value.classList.add('icon-list')
    }
}

function handleScroll() {
    const scrollTop = window.pageYOffset || document.body.scrollTop // 获取页面滚动的距离（兼容不同浏览器）
    if (scrollTop > 0) {
        headerBg.value = 'header-bg' // 当滚动距离大于0时，添加背景样式
    } else {
        headerBg.value = '' // 当滚动距离为0时，移除背景样式
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll) // 在组件挂载后添加滚动事件的监听器
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll) // 在组件卸载前移除滚动事件的监听器
})

const navList = [
    { title: '首页', link: '/', icon: 'icon-index' },
    { title: '条约', link: '/rule', icon: 'icon-rule' },
    { title: '反馈', link: '/feedback', icon: 'icon-feedback' },
    { title: '封禁列表', link: '/ban', icon: 'icon-ban' }
]
</script>

<style lang="less" scoped>
header {
    width: 100vw;
    height: 80px;
    transition: all .3s;
    position: fixed;
    background: transparent;
    top: 0;
    left: 0;
    z-index: 99;

    .header {
        @media (max-width: 768px) {
            display: block;
            position: relative;
            margin: 0;
        }

        height: 100%;
        margin: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            @media (max-width: 768px) {
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: calc(100% - 20px);
            }

            padding: 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 99;

            .logo {
                @media (max-width: 768px) {
                    font-size: 1.8rem;
                }

                display: flex;
                align-items: center;
                color: #fff;
                font-size: 2.5rem;

                i {
                    margin-right: 6px;
                }
            }

            .btn {
                color: #fff;
                font-size: 1.8rem;
                display: none;

                @media (max-width: 768px) {
                    display: block;
                }
            }
        }

        .mask {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 98;
        }

        .right {
            z-index: 99;
            display: flex;

            @media (max-width: 768px) {
                position: absolute;
                top: 80px;
                right: -160px;
                width: fit-content;
                align-items: end;
                flex-direction: column;
                transition: all .3s;
                background: rgba(0, 0, 0, 0.5);
                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
                    0 2px 10px 0 rgba(0, 0, 0, 0.12);
            }

            div {
                @media (max-width: 768px) {
                    margin: 5px 0;
                }
            }

            a {
                color: #fff;
                margin: 0 10px;
                font-size: 1.6rem;
                vertical-align: middle;
                position: relative;

                i {
                    margin: 0 2px;
                }

                &.active:after {
                    display: block;
                    width: 90%;
                    background-color: #fff;
                    height: 2px;
                    position: absolute;
                    bottom: -3px;
                    left: 50%;
                    transform: translateX(-50%);
                }

                &:after {
                    display: block;
                    content: '';
                    width: 0;
                    height: 2px;
                    position: absolute;
                    bottom: -3px;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: all 0.3s;
                }

                &:hover:after {
                    display: block;
                    content: '';
                    width: 90%;
                    background-color: #fff;
                }
            }

        }
    }
}

.header-bg {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>