<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@1,200');
html,
body {
  font-family: 'Sarabun', sans-serif;
}

#app {
  font-family: 'Sarabun', sans-serif;
}
</style>
