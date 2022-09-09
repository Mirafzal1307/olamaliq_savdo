<template>
  <div class="flex gap-x-1">
    <img :src="require(`~/assets/images/${item.img}`)" alt="PhotoOfCategory" class="w-full col-span-12" />
  </div>
</template>

<script>
export default {
  name: 'BrandComponent',
  props: {
    item: {
      type: Object | Array,
      required: true,
      default: [],
    },
  },
}
</script>

