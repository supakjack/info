<template>
  <div>
    <Carousel />
    <Timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Timeline from '@/components/Timeline.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Timeline
  },
  data() {
    return {}
  },
}
</script>
