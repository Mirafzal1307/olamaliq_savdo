<template>
  <div class="group w-full hover:shadow-md shadow-sm border border-gray-100 rounded-md relative">
    <div class="flex items-center w-full bg-white rounded-md p-2 gap-2">
      <img
        :src="
          data.attributes.product.data.attributes.image !== null
            ? $tools.getFileUrl(data.attributes.product.data.attributes.image)
            : require('/assets/images/default.png')
        "
        @error="
          data.attributes.product.data.attributes.image = require('/assets/images/default.png')
        "
        class="w-14 rounded-md"
      />
      <div class="grid content-between space-y-2">
        <div class="text-gray-700 text-sm font-semibold">
          {{ data.attributes.product.data.attributes.name }}
        </div>
        <div class="text-green-700 font-medium text-xs">
          {{ data.attributes.district.data.attributes.name }}
        </div>
        <div class="flex items-center text-gray-700 font-semibold text-sm space-x-3">
          <div>Min: {{ data.attributes.min }}</div>
          <div>Max: {{ data.attributes.max }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Prices',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Object,
  },
}
</script>
