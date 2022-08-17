<template>
  <div>
    <div class="flex justify-between mb-4 mt-4">
      <h3 class="text-black font-bold font-sans">{{ $t('products.DiscountProduct') }}</h3>
      <router-link to="#" class="text-green border-b text-sm font-semibold">
        {{ $t('products.DiscountProductLink') }}
      </router-link>
    </div>

        <div class="flex justify-between gap-2">
          <ProductsInDiscountComponentVue
            class="w-full"
            v-for="(item, idx) in productItems"
            :key="idx"
            :item="item"
          />
        </div>

  </div>
</template>

<script>
import ProductsInDiscountComponentVue from './ProductsInDiscountComponent.vue'

export default {
  name: 'ProductsInDiscount',
  components: {
    ProductsInDiscountComponentVue,
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