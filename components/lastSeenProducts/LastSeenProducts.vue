<template>
    <div>
      <div class="flex justify-between mb-4 mt-9">
        <h3 class="text-black font-bold font-sans">{{$t("lastVisit.lastvisit")}}</h3>
        <router-link to="#" class="text-green border-b text-sm font-semibold">
          {{ $t('products.FavoriteProductLink') }}
        </router-link>
      </div>
      <div class="slider">
        <div class=" flex gap-2">
          <LastSeenProduct
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
import LastSeenProduct from './LastSeenProduct.vue';
  export default {
    name: 'LastSeenProducts',
    components: {
    LastSeenProduct,
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