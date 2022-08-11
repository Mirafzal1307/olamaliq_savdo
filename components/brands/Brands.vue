<template>
  <VueSlickCarousel v-bind="settings">
    <div v-for="i in 2" :key="i">
      <div class="flex justify-between" >
        
          <BrandComponent
            class="w-full"
            v-for="(item, idx) in brandItems"
            :key="idx"
            :item="item"
          />
      
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import BrandComponent from './BrandComponent.vue'
export default {
  name: 'Brands',
  components: {
    VueSlickCarousel,
    BrandComponent,
  },
  props: {
    brandItems: Array,
  },
  data() {
    return {
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 8000,
        cssEase: 'linear',
      },
    }
  },
}
</script>

<style scoped>
</style>