<template>
    <div title="回到顶部" @click="Back2Top" class="back2top">
        <img src="/imgs/back2top.png">
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// 设置滚动条滚动到最低的高度的元素
const props = defineProps(['elment'])

function Back2Top() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.querySelector('.back2top').style.right = '-150px'
}

function ShowButton() {
    const Back2TopEl = document.querySelector('.back2top')
    const El = document.querySelector(props.elment)
    const ScrollTop = window.pageYOffset || document.body.scrollTop

    if (ScrollTop > (El.offsetTop + El.offsetHeight)/2) {
        Back2TopEl.style.right = '0'
    } else {
        Back2TopEl.style.right = '-150px'
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
    z-index: 99999;
    opacity: .4;
    transition: all .3s;
    cursor: pointer;

    img {
        object-fit: cover;
        width: 150px;
        -webkit-user-drag: none;
    }

    &:hover {
        opacity: .6;
    }
}
</style>