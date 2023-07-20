<template>
  <div style="font-size: 2rem;width:100vw;position:fixed;bottom: 0;background: #00000050;text-align: center;z-index: 99999999;color: #fff;">目前还为测试版,所有的bug可以反馈至<a style="color:#fff;border-bottom: solid 5px;" href="https://github.com/GuaiJieYo/YunLiuWeb/issues">Github Issues</a></div>
  <transition name="FadeOut">
    <Loading v-if="isloading" />
  </transition>
  <nav>
    <NavBar />
  </nav>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Foot />
  </footer>
</template>

<script setup>
import Loading from './components/Loading.vue'
import NavBar from './components/NavBar.vue'
import Foot from './components/Foot.vue'
import { ref,onMounted } from 'vue'

const isloading = ref(true)

onMounted(()=>{
  document.body.style.overflow = 'hidden'
})

window.onload = () => {
  isloading.value = false
  document.body.style.overflow = ''
}
</script>