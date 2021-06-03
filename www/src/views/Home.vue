<template>
  <div>
    <Carousel />
    <Profile />
    <Timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Timeline from '@/components/Timeline.vue'
import Profile from '@/components/Profile.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Timeline,
    Profile
  },
  data() {
    return {}
  }
}
</script>
