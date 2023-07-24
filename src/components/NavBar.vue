<template>
    <header :class="headerBg">
        <div class="header">
            <div class="left">
                <router-link to="/" class="logo">
                    <i class="iconfont icon-cloud"></i>
                    <p>YunLiuCraft</p>
                </router-link>
                <i @click="toggleMenu" class="iconfont icon-list"></i>
            </div>
            <div ref="mask" @click="toggleMenu" class="mask"></div>
            <div :class="rightBg" class="right">
                <router-link exact-active-class="active" :to="item.link" v-for="(item, index) in navList" :key="index"
                    :href="item.link">
                    <i class="iconfont" :class="item.icon"></i>
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </header>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerBg = ref('') // 头部样式类名，用于控制头部背景
const rightBg = ref('') // 右边部分
const mask = ref(null)

const toggleMenu = () => {
    var el = document.querySelector('header .right')
    if (el.style.right == '-160px' || el.style.right == '') {
        el.style.right = '0'
        mask.value.style.display = 'block'
    } else {
        el.style.right = '-160px'
        mask.value.style.display = 'none'
    }
}

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.body.scrollTop // 获取页面滚动的距离（兼容不同浏览器）
    const windowWidth = window.innerWidth // 或区屏幕长度
    if (scrollTop > 0) {
        if (windowWidth < 768) {
            rightBg.value = 'right-bg'
        }
        headerBg.value = 'header-bg' // 当滚动距离大于0时，添加背景样式
    } else {
        headerBg.value = rightBg.value = '' // 当滚动距离为0时，移除背景样式
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
    { title: '封禁列表', link: '/ban', icon: 'icon-ban' },
    { title: '条约', link: '/rule', icon: 'icon-rule' },
    { title: '反馈', link: '/feedback', icon: 'icon-feedback' }
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

            .icon-list {
                color: #fff;
                font-size: 1.8rem;
                display: none;

                @media (max-width: 768px) {
                    display: block;
                }
            }
        }

        .mask {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 98;
        }

        .right {
            z-index: 99;

            @media (max-width: 768px) {
                position: absolute;
                top: 80px;
                right: -160px;
                width: fit-content;
                display: flex;
                flex-direction: column;
                transition: all .3s;
            }

            a {
                @media (max-width: 768px) {
                    margin-bottom: 10px;
                }

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

.header-bg,
.right-bg {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>