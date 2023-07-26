<template>
  <transition name="FadeOut">
    <Loading v-if="IsLoaded" />
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