<template>
  <nav>
    <NavBar />
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
  import NavBar from './components/NavBar.vue'
</script>