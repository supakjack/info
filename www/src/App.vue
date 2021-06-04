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
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@500&display=swap');
html,
body {
  font-family: 'Athiti', sans-serif;
}

#app {
  font-family: 'Athiti', sans-serif;
}
</style>
