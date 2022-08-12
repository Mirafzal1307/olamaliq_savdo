<template>
  <div>
    <div class="flex justify-between mb-4 mt-4">
      <h3 class="text-black font-bold font-sans">Ommabop Mahsulotlar</h3>
      <router-link to="#" class="text-green border-b text-sm font-semibold">
        Barcha Mahsulotlar
      </router-link>
    </div>
    <VueSlickCarousel
      :arrows="false"
      :dots="false"
       class="slider"
        v-bind="settings"
    >
      <div v-for="i in 2" :key="i">
        <div class="flex justify-between gap-2">
          <PopularProductComponent
            class="w-full"
            v-for="(item, idx) in productItems"
            :key="idx"
            :item="item"
          />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import PopularProductComponent from './PopularProductComponent.vue'

export default {
  name: 'PopularProductsComponent',
  components: {
    VueSlickCarousel,
    PopularProductComponent,
  },
  props: {
    productItems: Array,
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
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

<style scoped>
</style>