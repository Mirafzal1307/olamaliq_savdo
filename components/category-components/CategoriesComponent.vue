<template>
  <VueSlickCarousel :arrows="true" :dots="false" v-bind="settings" class="slider"  >
    <div v-for="i in 2" :key="i" >
      <div >
        <div class="flex justify-between mt-3 mr-2 gap-2 mb-4">
          <CategoryComponent
            class="bg-light-gray rounded"
            v-for="(item, idx) in categoryItems"
            :key="idx"
            :item="item"
          />
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import CategoryComponent from './CategoryComponent.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'CategoriesComponent',
  components: {
    CategoryComponent, VueSlickCarousel
  },
  props: {
    categoryItems: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        "arrows": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "speed": 5000,
        "autoplaySpeed": 10000,
        "cssEase": "linear"
      },
    }
  },
}
</script>
