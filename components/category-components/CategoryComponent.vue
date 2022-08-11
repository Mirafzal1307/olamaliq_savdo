<template>
  <div class="flex p-1 gap-x-1">
    <img :src="require(`~/assets/images/${item.img}`)" alt="PhotoOfCategory" />
    <div class="self-center pl-2">
      <p class="font-sans font-semibold text-sm text-left" >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryComponent',
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
