<template>
  <Loading />
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
</script>