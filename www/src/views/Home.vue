<template>
  <div class="mt-5">
    <Carousel />
    <Profile />
    <Timeline />
    <Service />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Timeline from '@/components/Timeline.vue'
import Profile from '@/components/Profile.vue'
import Service from '@/components/Service.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Timeline,
    Profile,
    Service
  },
  data() {
    return {}
  }
}
</script>


