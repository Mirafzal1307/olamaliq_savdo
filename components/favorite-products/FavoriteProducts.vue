<template>
  <div>
    <div class="flex justify-between mb-4 mt-4">
      <h3 class="text-black font-bold font-sans">{{ $t('products.FavoriteProduct') }}</h3>
      <router-link to="#" class="text-green border-b text-sm font-semibold">
        {{ $t('products.FavoriteProductLink') }}
      </router-link>
    </div>
    <div class="slider">
      <div class="flex justify-between gap-2">
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