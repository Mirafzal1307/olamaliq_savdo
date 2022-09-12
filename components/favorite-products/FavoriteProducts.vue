<template>
  <div>
    <div class="flex justify-between mb-4 mt-4">
      <h3 class="text-black font-bold font-sans">{{ $t('products.FavoriteProduct') }}</h3>
      <nuxt-link :to="localePath(`/allproducts`)" class="text-green border-b text-sm font-semibold">
        {{ $t('products.FavoriteProductLink') }}
      </nuxt-link>
    </div>
    <div class="slider">
      <div class="justify-between gap-2 grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 flex-col">
        <FavoriteProductComponentVue
          class="w-full"
          v-for="(item, idx) in productItems"
          :key="idx"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteProductComponentVue from './FavoriteProductComponent.vue'
export default {
  name: 'FavoriteProducts',
  components: {
    FavoriteProductComponentVue,
  },
  props: {
    productItems: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },
}
</script>