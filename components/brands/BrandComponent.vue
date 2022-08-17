<template>
  <div class="flex">
    <img :src="require(`~/assets/images/${item.img}`)" alt="PhotoOfCategory" class="w-full" />
    <div class="self-center pl-2">
    </div>
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

