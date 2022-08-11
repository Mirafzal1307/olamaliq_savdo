<template>
  <div class="flex p-1 gap-x-1">
    <img :src="require(`~/assets/images/${item.img}`)" alt="PhotoOfCategory" />
    <div class="self-center pl-2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandComponent',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>


<style  scoped>
</style>
