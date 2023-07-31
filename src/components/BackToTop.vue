<template>
    <div ref="back2top" title="回到顶部" @click="Back2Top" class="back2top">
        <img src="/imgs/back2top.webp">
    </div>
</template>

<script setup>
import { ref,onMounted, onUnmounted } from 'vue'

// 设置滚动条滚动到最低的高度的元素
const props = defineProps(['show'])
const back2top = ref(null)

function Back2Top() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    back2top.value.style.right = '-150px'
}

function ShowButton() {
    const El = document.querySelector(props.show)
    const ScrollTop = window.scrollY || document.body.scrollTop

    if (ScrollTop > (El.offsetTop + El.offsetHeight)/2) {
        back2top.value.style.right = '0'
    } else {
        back2top.value.style.right = '-150px'
    }
}

onMounted(() => {
    window.addEventListener('scroll', ShowButton)
})

onUnmounted(() => {
    window.removeEventListener('scroll', ShowButton)
})

</script>

<style lang="less" scoped>
.back2top {
    position: fixed;
    bottom: 0;
    right: -150px;
    z-index: 999;
    opacity: .4;
    transition: all .3s;
    cursor: pointer;

    img {
        @media (max-width: 425px) {
            width: 100px;
        }
        object-fit: cover;
        width: 150px;
        -webkit-user-drag: none;
    }

    &:hover {
        opacity: .6;
    }
}
</style>