<template>
  <div>
        <div class="flex justify-between gap-2">
          <AdvertisementProductVue
            class="w-full"
            v-for="(item, idx) in advertisementItems"
            :key="idx"
            :item="item"
          />
        </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import AdvertisementProductVue from './AdvertisementProduct.vue'

export default {
  name: 'AdvertisementProductsComponent',
  components: {
    VueSlickCarousel,
    AdvertisementProductVue
  },
  props: {
    advertisementItems: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
}
</script>