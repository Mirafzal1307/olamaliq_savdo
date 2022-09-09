<template>
  <div>
    <div class="flex justify-between mb-4 mt-4">
      <h3 class="text-black font-bold font-sans">{{ $t('products.PopularProduct') }}</h3>
      <!-- <nuxt-link :to="localePath('/all-products')" class="text-green border-b text-sm font-semibold">
        {{ $t('products.PopularProductLink') }}
      </nuxt-link> -->
        
      <nuxt-link :to="localePath(`/allproducts`)" class="text-green border-b text-sm font-semibold">
        {{ $t('products.PopularProductLink') }}
      </nuxt-link>
    </div>

        <div class=" justify-between gap-2 grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 flex-col">
          <PopularProductComponent
            class="w-full"
            v-for="(item, idx) in productItems"
            :key="idx"
            :item="item"
          />
        </div>

  </div>
</template>

<script>

import PopularProductComponent from './PopularProductComponent.vue'

export default {
  name: 'PopularProductsComponent',
  components: {
    PopularProductComponent,
  },
  props: {
    productItems: {
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