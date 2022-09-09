<template>
  <div class="mt-0.5 mb-0.5" >
    <Container  >
      <VueSlickCarousel :arrows="true" :dots="false" class="slider" v-bind="settings">
        <div class="text-center text-white z-0" v-for="i in 5" :key="i">
          <img src="~/assets/images/1-200x100.jpg" alt="rasm" class="w-full" />
        </div>
      </VueSlickCarousel>
    </Container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Container from '../Container.vue'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel, Container },
  data() {
    return {
      settings: {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 1000,
        "autoplaySpeed": 4000,
        "cssEase": "linear",
      },
    }
  },
}
</script>
<style >

</style>