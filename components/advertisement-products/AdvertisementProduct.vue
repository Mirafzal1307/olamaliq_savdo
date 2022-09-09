<template>
  <div class="self-center">
    <div class="shadow-sm rounded  mt-4 relative">
      <div class="h-full rounded justify-self-center self-center flex flex-col">
        <img
          :src="require(`~/assets/images/${item.img}`)"
          alt="product images"
          class="w-full rounded gap-2"
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
