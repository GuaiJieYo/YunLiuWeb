<template>
    <!-- 纯属整活 -->
    <div class="fullscreen">
        <transition name="Fade">
            <div v-show="load">
                <h1>你被骗了LOL</h1>
                <video ref="video" loop controls>
                    <source src="https://vdse.bdstatic.com/192d9a98d782d9c74c96f09db9378d93.mp4" type="video/mp4" />
                </video>
                <router-link to="/">退出</router-link>
            </div>
        </transition>
        <div style="margin: auto;width: fit-content;" v-show="!load">
            <h1>是否查看惊喜?🤡</h1>
            <button @click="enter">进入</button>
            <router-link to="/">退出</router-link>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

const Toast = useToast({position: 'top'})
const video = ref()
let load = ref(false)

function enter() {
    load.value = true
    video.value.play() // 播放视频
    document.title = '你被骗了LOL'
    Toast.success('你被骗了 LOL')
}
</script>
<style lang="less" scoped>
.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #f9f9f9;
    z-index: 999;

    h1 {
        margin-top: 10px;
        text-align: center;
    }

    video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
    }

    button,
    a {
        color: #080808;
        margin: 10px;
        font-size: 3rem;
        transition: all .3s;

        &:hover {
            color: #30a9de;
        }
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }
}
</style>