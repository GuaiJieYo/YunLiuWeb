<template>
  <Loading v-if="isloading" />
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
import { ref, onMounted } from 'vue'

const isloading = ref(true)

onMounted(() => {
  isloading.value = false
})
</script>