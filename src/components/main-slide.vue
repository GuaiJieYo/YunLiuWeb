<template>
    <div class="slide">
        <div class="prev" @click="PrevSlide">&#10094;</div>
        <div class="text">
            <h1>YunLiuCraft</h1>
            <h2>一个温馨的服务器♥</h2>
        </div>
        <div>
            <img v-for="(image, index) in images" :src="image" :class="{ 'active': index === activeIndex }">
        </div>
        <div class="next" @click="NextSlide">&#10095;</div>
        <div class="start" @click="Start">&or;</div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)
// 图片在更目录的public文件夹的imgs文件夹里
const images = [
    '/imgs/1.webp',
    '/imgs/2.webp',
    '/imgs/3.webp'
]
let intervalId

onMounted(() => {
    startAutoPlay()
})

onUnmounted(() => {
    stopAutoPlay()
})

function PrevSlide() {
    stopAutoPlay(); // 停止自动轮播
    if (activeIndex.value === 0) {
        activeIndex.value = images.length - 1;
    } else {
        activeIndex.value--
    }
    startAutoPlay() // 重新启动自动轮播
}

function NextSlide() {
    stopAutoPlay(); // 停止自动轮播
    if (activeIndex.value === images.length - 1) {
        activeIndex.value = 0
    } else {
        activeIndex.value++
    }
    startAutoPlay() // 重新启动自动轮播
}

function startAutoPlay() {
    intervalId = setInterval(() => {
        NextSlide()
    }, 5000) // 每 5 秒切换一次轮播图
}

function stopAutoPlay() {
    clearInterval(intervalId)
}

function Start(e) {
    const ElParent = e.target.parentNode
    scrollTo({
        top: ElParent.offsetTop + ElParent.offsetHeight,
        behavior: 'smooth'
    }) // 移动到第一个部分
}
</script>

<style lang="less" scoped>
@slide-bg-color: #fff;
@slide-text-color: #fff;
@slide-button-color: rgba(255, 255, 255, 0.6);
@slide-button-hover-color: #fff;

.slide {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: @slide-bg-color;

    .text {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: @slide-text-color;
        text-align: center;

        h1 {
            @media (max-width: 600px) {
                font-size: 3.5rem;
            }

            @media (max-width: 425px) {
                font-size: 2.5rem;
            }

            font-size: 5rem;
        }

        h2 {
            @media (max-width: 425px) {
                font-size: 1.3rem;
            }

            font-size: 2rem;
        }
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        pointer-events: none;
        user-select: none;
        background: @slide-bg-color;
        filter: brightness(60%);
    }

    img.active {
        opacity: 1;
    }

    .prev,
    .next {
        position: absolute;
        top: 50%;
        font-size: 5rem;
        color: @slide-button-color;
        cursor: pointer;
        z-index: 2;
        transition: all 0.3s;

        &:hover {
            color: @slide-button-hover-color;
        }

        &.prev {
            @media (max-width: 600px) {
                left: 10px;
            } 
            left: 20px;
            transform: translateY(-50%);
        }

        &.next {
            @media (max-width: 600px) {
                right: 10px;
            } 
            right: 20px;
            transform: translateY(-50%);
        }
    }

    .start {
        position: absolute;
        left: 50%;
        bottom: 0;
        font-size: 4rem;
        transform: translateX(-50%);
        cursor: pointer;
        z-index: 1;
        animation: StartBtn 1.3s infinite ease;
        color: @slide-button-color;
        transition: all 0.3s;

        &:hover {
            color: @slide-button-hover-color;
        }
    }

}

@keyframes StartBtn {

    0%,
    100% {
        transform: translate(-50%, 0);
    }

    50% {
        transform: translate(-50%, -5px);
    }
}
</style>