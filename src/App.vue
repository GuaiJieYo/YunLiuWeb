<template>
  <transition name="FadeOut">
    <Loading v-if="isloading" />
  </transition>
  <nav>
    <NavBar />
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import Loading from './components/Loading.vue'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'

const isloading = ref(true)

window.onload = () => {
  isloading.value = false
}
</script>