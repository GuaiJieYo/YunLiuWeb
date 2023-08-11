<template>
  <nav>
    <NavBar />
  </nav>
  <main>
    <router-view />
  </main>
  <footer>
    <Foot />
  </footer>
  <Loading />
</template>
<script setup>
import NavBar from './components/NavBar.vue'
import Foot from './components/Foot.vue'
import Loading from './components/Loading.vue'
import './plugins/surprise.js'
</script>