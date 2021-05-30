<template>
  <div class="home">
    <b-img rounded="circle" alt="Circle image" src="../assets/profile.png"></b-img>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <b-button variant="info" class="m-1">
      Show dismissible alert )
    </b-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
    }
  },
}
</script>
