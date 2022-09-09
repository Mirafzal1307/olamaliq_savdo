<template>
  <VueSlickCarousel :arrows="true" :dots="false" v-bind="settings"   >
    <div v-for="i in 1" :key="i"  >
      <div >
        <div class="flex justify-between mt-3 mr-2 gap-2 mb-4">
          <CategoryComponent
            class="bg-light-gray rounded grid-cols-12 grid "
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
        "cssEase": "linear",
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          },
          {
            "breakpoint": 320,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },
    }
  },
}
</script>
