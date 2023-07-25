<template>
    <transition name="FadeOut">
        <div v-if="IsLoaded" class="LoadingBox">
            <div class="Loading">
                <span v-for="item in 4" :key="item"></span>
            </div>
            <div class="Text">
                <h2>网页加载中</h2>
                <p>加载图片等资源需要较长时间,请耐心等待</p>
            </div>
        </div>
    </transition>
</template>
<script setup>
import { ref, onMounted } from 'vue'
let IsLoaded = ref(true)

onMounted(() => {
    document.body.style.overflow = 'hidden'
})

window.onload = () => {
    IsLoaded.value = false
    document.body.style.overflow = ''
}
</script>
<style lang="less" scoped>
.LoadingBox {
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #f9f9f9;

    .Text {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;

        h2 {
            font-weight: normal;
            font-size: 3rem;
            margin-bottom: 5px;
        }

        p {
            font-size: 1.5rem;
        }
    }

    .Loading {
        width: 76px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        top: 45%;
        margin: 0 auto;
        animation: rotate 3s linear infinite;

        span {
            width: 32px;
            height: 32px;
            margin: 3px;
        }

        span:nth-child(1) {
            background-color: #e5efc1;
            border-radius: 50% 50% 0 50%;
        }

        span:nth-child(2) {
            background-color: #a2d5ab;
            border-radius: 50% 50% 50% 0;
        }

        span:nth-child(3) {
            background-color: #39aea9;
            border-radius: 50% 0 50% 50%;
        }

        span:nth-child(4) {
            background-color: #557b83;
            border-radius: 0 50% 50% 50%;
        }
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }

}
</style>