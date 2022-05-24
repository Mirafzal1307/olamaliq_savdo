<template>
  <nuxt-link :to="{ path: localePath(`/e-learning/${data.id}`) }">
    <div class="space-x-4">
      <div class="border rounded-md border-gray-200 shadow-sm hover:shadow-md group">
        <img
          src="~/assets/images/video.png"
          class="h-60 object-cover group-hover:opacity-70 rounded-md"
        />
        <div class="p-4">
          <div class="flex items-center justify-between">
            <div
              class="
                text-xs
                border border-green-700
                group-hover:bg-green-700 group-hover:text-white
                text-green-700
                font-medium
                rounded-md
                py-1.5
                px-3
              "
            >
              Planting
            </div>
            <div class="text-green-700 text-sm font-semibold">{{ data.date }}</div>
          </div>
          <div class="my-4 text-gray-700 group-hover:text-green-700 font-semibold text-lg">
            {{ data.title }}
          </div>
          <div class="text-gray-600 text-sm">
            {{ data.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Object,
  },
  data() {
    return {}
  },
}
</script>
