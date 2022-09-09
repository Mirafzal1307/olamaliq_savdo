<template>
  <div class="xsm:px-2">
    <div class="flex justify-between mb-4">
      <h3 class="text-black font-bold font-sans">{{ $t('brands.brandKey') }}</h3>
      <router-link to="#" class="text-green border-b text-sm font-semibold"> {{ $t('brands.brandKeyLink') }} </router-link>
    </div>
    <VueSlickCarousel v-bind="settings" :arrows="false" :dots="false">
      <div v-for="i in 1" :key="i">
        <div>
          <div class="flex justify-between gap-2">
            <BrandComponent
              class="w-full grid-cols-12 grid"
              v-for="(item, idx) in brandItems"
              :key="idx"
              :item="item"
            />
          </div>
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
import BrandComponent from './BrandComponent.vue'
export default {
  name: 'Brands',
  components: {
    VueSlickCarousel,
    BrandComponent,
  },
  props: {
    brandItems: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 10000,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>