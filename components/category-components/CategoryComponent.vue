<template>
  <div class="flex justify-around p-1 gap-x-1">
      <img :src="require(`~/assets/images/${item.img}`)" alt="PhotoOfCategory" class="col-span-4 text-center self-center" />
      <div class="self-center pl-2 xsm:pl-0 col-span-8">
        <p class="font-sans font-semibold text-sm text-left xsm:text-xs ">
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
      default: [],
    },
  },
}
</script>