<template>
  <div class="self-center slider">
    <div class="shadow-sm rounded  mt-4 relative">
      <div class="h-full rounded justify-self-center self-center flex">
        <img
          :src="require(`~/assets/images/${item.img}`)"
          alt="product images"
          class="w-full rounded"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertisementProduct',
  props: {
    item: {
      type: Object | Array,
      required: true,
      default: [],
    },
  },
}
</script>
