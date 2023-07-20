<template>
  <div style="position:fixed;top: 50%;left: 0;z-index: 99999999;color: #000;">目前还为测试版,所有的bug可以反馈至<a href="https://github.com/GuaiJieYo/YunLiuWeb/issues">Github Issues</a></div>
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